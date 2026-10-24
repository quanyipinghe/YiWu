/**
 * 生产产物 Chrome 66 兼容性静态检查脚本。
 *
 * 检查范围（针对 dist/ 最终实际加载的产物，而非仅检查配置）：
 * 1. HTML 检查：
 *    - 确认入口脚本为经典 <script defer src="...">（非 type="module"），
 *      确保 Chrome 66 100% 加载唯一产物，不存在「只生成 legacy 包却不加载」的问题。
 *    - 确认无远程字体、CDN 脚本或外部图片引用。
 * 2. JS 语法 AST 检查：
 *    - 使用 acorn 以 ecmaVersion: 2018, sourceType: 'script' 解析 dist/assets/*.js。
 *    - 任何 Chrome 66 不支持的语法（可选链 ?.、空值合并 ??、无参数 catch {}、
 *      动态 import()、import.meta、类字段、逻辑赋值等）都会直接触发解析错误。
 * 3. JS 运行时 API 检查：
 *    - 检查源码与产物中是否出现 structuredClone、randomUUID、Object.fromEntries、
 *      Object.hasOwn、ResizeObserver、Array.prototype.at、replaceAll 等不兼容 API。
 * 4. CSS 产物检查：
 *    - 检查 dist/assets/*.css 是否含 :focus-visible、:has()、@container、
 *      flex/grid gap、aspect-ratio、clamp()、dvh/svh、backdrop-filter。
 *    - 确认独立的 .tv-focusable:focus 背景色规则存在。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as acorn from 'acorn';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');

const errors = [];

function fail(msg) {
  errors.push(msg);
}

// 1. 检查 dist/index.html
const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  fail('未找到 dist/index.html，请先运行 vite build');
} else {
  const html = fs.readFileSync(indexHtmlPath, 'utf8');
  if (/<script[^>]+type=["']module["']/i.test(html)) {
    fail('dist/index.html 仍包含 type="module" 脚本，应输出为经典 IIFE 脚本');
  }
  if (!/<script\s+defer\s+src=["']\.\/assets\/app-[^"']+\.js["']><\/script>/.test(html)) {
    fail('dist/index.html 未找到预期的 <script defer src="./assets/app-*.js"> 引用');
  }
  if (/(?:src|href)=["']https?:\/\//i.test(html) || /url\(\s*["']?https?:\/\//i.test(html)) {
    fail('dist/index.html 包含远程 http(s) 资源引用，违反纯本地离线资源要求');
  }
}

// 2. 检查 dist/assets/*.js 语法与运行时 API
const FORBIDDEN_JS_APIS = [
  { name: 'structuredClone', pattern: /\bstructuredClone\b/ },
  { name: 'crypto.randomUUID', pattern: /\brandomUUID\b/ },
  { name: 'Object.fromEntries', pattern: /\bObject\.fromEntries\b/ },
  { name: 'Object.hasOwn', pattern: /\bObject\.hasOwn\b/ },
  { name: 'ResizeObserver', pattern: /\bResizeObserver\b/ },
  { name: 'Array/String.prototype.at', pattern: /\.at\s*\(/ },
  { name: 'String.prototype.replaceAll', pattern: /\.replaceAll\s*\(/ },
];

if (!fs.existsSync(assetsDir)) {
  fail('未找到 dist/assets 目录');
} else {
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter((f) => f.endsWith('.js'));
  const cssFiles = files.filter((f) => f.endsWith('.css'));

  if (jsFiles.length === 0) {
    fail('dist/assets 下没有任何 .js 产物');
  }
  if (jsFiles.length > 1) {
    fail('dist/assets 下存在多个 JS 分包 (' + jsFiles.join(', ') + ')，违反单包无动态拆分策略');
  }

  for (const file of jsFiles) {
    const fullPath = path.join(assetsDir, file);
    const code = fs.readFileSync(fullPath, 'utf8');
    try {
      acorn.parse(code, {
        ecmaVersion: 2018,
        sourceType: 'script',
      });
    } catch (err) {
      fail('JS 产物 ' + file + ' 存在超出 ES2018 (Chrome 66) 的语法: ' + err.message);
    }

    for (const api of FORBIDDEN_JS_APIS) {
      if (api.pattern.test(code)) {
        fail('JS 产物 ' + file + ' 包含目标环境不支持的 API: ' + api.name);
      }
    }
  }

  // 3. 检查 CSS 产物
  if (cssFiles.length === 0) {
    fail('dist/assets 下没有任何 .css 产物');
  }

  const FORBIDDEN_CSS = [
    { name: ':focus-visible', pattern: /:focus-visible\b/ },
    { name: ':has()', pattern: /:has\s*\(/ },
    { name: '@container', pattern: /@container\b/ },
    { name: 'Flex/Grid gap', pattern: /(?:^|[;{]\s*)(?:row-gap|column-gap|gap)\s*:/m },
    { name: 'aspect-ratio', pattern: /\baspect-ratio\s*:/ },
    { name: 'clamp()', pattern: /\bclamp\s*\(/ },
    { name: 'dvh/svh/lvh 动态视口单位', pattern: /\d+(?:\.\d+)?(?:dvh|svh|lvh)\b/ },
    { name: 'backdrop-filter', pattern: /\bbackdrop-filter\s*:/ },
  ];

  for (const file of cssFiles) {
    const fullPath = path.join(assetsDir, file);
    const css = fs.readFileSync(fullPath, 'utf8');
    for (const rule of FORBIDDEN_CSS) {
      if (rule.pattern.test(css)) {
        fail('CSS 产物 ' + file + ' 包含禁用特性: ' + rule.name);
      }
    }
    if (!/\.tv-focusable:focus\s*\{[^}]*background-color:/i.test(css)) {
      fail('CSS 产物 ' + file + ' 缺少独立的 .tv-focusable:focus 背景色规则');
    }
  }
}

if (errors.length > 0) {
  console.error('❌ Chrome 66 兼容性检查未通过：');
  for (const e of errors) {
    console.error('  - ' + e);
  }
  process.exit(1);
} else {
  console.log('✅ Chrome 66 兼容性检查通过：ES2018 经典脚本 AST 校验、运行时 API 扫描、CSS 规则检查全部合格。');
}
