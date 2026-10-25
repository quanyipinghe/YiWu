/**
 * 基于本机 Chrome (CDP) 的生产构建 HTTP 端到端交互与多视口校验脚本。
 *
 * 注意：
 * - 本脚本使用开发机上的现代 Chrome 验证生产构建 dist/ 通过 HTTP 正常加载、
 *   真实 CSS 渲染下的聚焦背景色变化、多视口排版无横向裁切、以及纯遥控器按键全流程闭环。
 * - 现代 Chromium 自动化测试不能替代真实 Chrome 66 / Android TV 真机兼容验证。
 */
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const chromeBin = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = (req.url || '/').split('?')[0];
      const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
      const filePath = path.join(distDir, rel);
      if (!filePath.startsWith(distDir) || !fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not Found');
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(fs.readFileSync(filePath));
    });
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({ server, port: addr.port });
    });
  });
}

async function run() {
  if (!fs.existsSync(chromeBin)) {
    console.log('未检测到本机 Google Chrome，跳过浏览器 E2E 检查。');
    return;
  }

  const { server, port } = await startStaticServer();
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'yiwu-chrome-e2e-'));

  const chrome = spawn(
    chromeBin,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--remote-debugging-port=0',
      '--user-data-dir=' + userDataDir,
      'about:blank',
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  );

  const wsUrl = await new Promise((resolve, reject) => {
    let stderr = '';
    const timer = setTimeout(() => reject(new Error('等待 Chrome CDP 超时: ' + stderr)), 8000);
    chrome.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
      const m = /DevTools listening on (ws:\/\/[^\s]+)/.exec(stderr);
      if (m) {
        clearTimeout(timer);
        resolve(m[1]);
      }
    });
  });

  // 获取第一个 page target
  const debugPort = new URL(wsUrl).port;
  const targets = await fetch('http://127.0.0.1:' + debugPort + '/json/list').then((r) =>
    r.json(),
  );
  const pageTarget = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let seq = 0;
  const pending = new Map();
  const runtimeExceptions = [];

  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(String(ev.data));
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    } else if (msg.method === 'Runtime.exceptionThrown') {
      runtimeExceptions.push(msg.params.exceptionDetails.text);
    }
  });

  await new Promise((resolve) => ws.addEventListener('open', resolve));

  function send(method, params = {}) {
    const id = ++seq;
    ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  }

  async function evaluate(expression) {
    const res = await send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error('Evaluation exception: ' + JSON.stringify(res.exceptionDetails));
    }
    return res.result.value;
  }

  async function pressKey(key, windowsVirtualKeyCode) {
    await send('Input.dispatchKeyEvent', {
      type: 'rawKeyDown',
      key,
      windowsVirtualKeyCode,
      nativeVirtualKeyCode: windowsVirtualKeyCode,
    });
    await send('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key,
      windowsVirtualKeyCode,
      nativeVirtualKeyCode: windowsVirtualKeyCode,
    });
  }

  try {
    await send('Page.enable');
    await send('Runtime.enable');

    // 设置 1920x1080 电视视口并打开 HTTP 静态生产站点
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      mobile: false,
    });

    await send('Page.navigate', { url: 'http://127.0.0.1:' + port + '/?tv=1&debug=1' });
    await new Promise((r) => setTimeout(r, 350));

    // 1. 验证默认焦点与聚焦背景色
    const initialState = await evaluate(`({
      focusId: document.activeElement && document.activeElement.getAttribute('data-focus-id'),
      bg: window.getComputedStyle(document.activeElement).backgroundColor,
      color: window.getComputedStyle(document.activeElement).color
    })`);
    if (initialState.focusId !== 'today-draw' || initialState.bg !== 'rgb(242, 200, 121)') {
      throw new Error('初始焦点或聚焦背景色异常: ' + JSON.stringify(initialState));
    }

    // 2. 按 Enter 抽取今日一悟 -> 聚焦 today-read
    await pressKey('Enter', 13);
    const afterDraw = await evaluate(`({
      focusId: document.activeElement && document.activeElement.getAttribute('data-focus-id'),
      bg: window.getComputedStyle(document.activeElement).backgroundColor,
      proverb: document.querySelector('[data-testid="today-proverb-text"]')?.textContent
    })`);
    if (afterDraw.focusId !== 'today-read' || !afterDraw.proverb) {
      throw new Error('抽签后状态异常: ' + JSON.stringify(afterDraw));
    }

    // 3. 按右方向键移到收藏按钮并按 Enter 收藏，再按左回 today-read，按 Enter 进入详情页
    await pressKey('ArrowRight', 39);
    await pressKey('Enter', 13);
    await pressKey('ArrowLeft', 37);
    await pressKey('Enter', 13);

    const inDetail = await evaluate(`({
      focusId: document.activeElement && document.activeElement.getAttribute('data-focus-id'),
      heading: document.querySelector('[data-testid="detail-step-heading"]')?.textContent
    })`);
    if (inDetail.focusId !== 'detail-next') {
      throw new Error('进入详情页焦点异常: ' + JSON.stringify(inDetail));
    }

    // 短屏电视仍需保留正文滚动区域，阅读模式不能只滚动外层页面。
    await pressKey('Enter', 13);
    await pressKey('Enter', 13);
    await send('Emulation.setDeviceMetricsOverride', {
      width: 960, height: 480, deviceScaleFactor: 1, mobile: false,
    });
    await evaluate(`document.querySelector('[data-focus-id="detail-read-area"]').focus()`);
    await pressKey('Enter', 13);
    await pressKey('ArrowDown', 40);
    const shortTvReading = await evaluate(`({
      reading: document.querySelector('.detail-article-box').classList.contains('is-reading-mode'),
      scrollTop: document.querySelector('.detail-article-box').scrollTop,
      pageHeight: document.documentElement.scrollHeight
    })`);
    if (!shortTvReading.reading || shortTvReading.scrollTop <= 0 || shortTvReading.pageHeight > 481) {
      throw new Error('短屏 TV 阅读滚动异常: ' + JSON.stringify(shortTvReading));
    }
    await pressKey('Escape', 27);

    // 4. 在 360x800、390x844、768x1024、1366x768、1920x1080、960x540、1280x720、3840x2160 视口下检查无横向溢出
    const viewports = [
      { width: 360, height: 800 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1366, height: 768 },
      { width: 1920, height: 1080 },
      { width: 960, height: 540 },
      { width: 1280, height: 720 },
      { width: 3840, height: 2160 },
    ];
    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 700,
      });
      const overflow = await evaluate(
        `document.documentElement.scrollWidth > document.documentElement.clientWidth + 1`,
      );
      if (overflow) {
        throw new Error('视口 ' + vp.width + 'x' + vp.height + ' 发生横向裁切/溢出');
      }
    }

    // 5. 验证 window.tvApp.handleBack() 宿主桥接从详情返回今日页
    const backHandled = await evaluate(`window.tvApp.handleBack()`);
    // 返回后的页面 effect 异步恢复焦点，等待目标状态而非读取过渡中的导航焦点。
    const afterBack = await evaluate(
      `new Promise(resolve => {
        const deadline = performance.now() + 1000;
        function check() {
          const id = document.activeElement && document.activeElement.getAttribute('data-focus-id');
          if (id === 'today-read' || performance.now() >= deadline) resolve(id);
          else requestAnimationFrame(check);
        }
        check();
      })`,
    );
    if (!backHandled || afterBack !== 'today-read') {
      throw new Error('window.tvApp.handleBack() 返回异常: ' + afterBack);
    }

    if (runtimeExceptions.length > 0) {
      throw new Error('页面运行时报错: ' + runtimeExceptions.join('; '));
    }

    console.log(
      '✅ 生产构建 HTTP 浏览器 E2E 验证通过：多视口排版无溢出、聚焦背景色 rgb(242, 200, 121)、遥控器全流程闭环与 window.tvApp.handleBack() 正常。',
    );
  } finally {
    ws.close();
    chrome.kill('SIGKILL');
    await new Promise((r) => chrome.once('exit', r));
    server.close();
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true, maxRetries: 3 });
    } catch (e) {
      // 忽略临时目录清理错误
    }
  }
}

run().catch((err) => {
  console.error('❌ E2E 验证失败:', err);
  process.exit(1);
});
