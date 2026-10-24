# 一日一悟 (YiWu)

> **每天一句老话，看懂一点生活。**

「一日一悟」是一个主要面向 **Android TV（Chrome 66 WebView / 浏览器）**、同时兼容桌面浏览器与手机竖屏的纯前端 Web 应用。用户每天打开网站，抽取一条俗语、成语、惯用语、格言、箴言或警句，通过四格生活故事、白话解释和适用边界理解它。

---

## 一、快速开始（安装、启动、测试、构建）

### 1. 推荐运行环境与锁定依赖版本

- **开发构建电脑推荐环境**：Node.js `>= 18.18.0`（推荐 Node 20 LTS 或 Node 22/24），npm `>= 9`。
- **最终产物目标运行环境**：Android TV 浏览器 / WebView（内核 **Chrome 66+**），同时兼容现代桌面与移动端浏览器。
- **核心依赖版本（精确锁定，已提交 `package-lock.json`）**：
  - `react`: `18.3.1`
  - `react-dom`: `18.3.1`
  - `typescript`: `5.6.3`
  - `vite`: `5.4.11`
  - `@vitejs/plugin-react`: `4.3.4`
  - `vitest`: `2.1.8`
  - `jsdom`: `25.0.1`
  - `acorn`: `8.14.0`（用于生产构建后的 ES2018 AST 兼容性校验）

### 2. 常用命令

```bash
# 1. 安装依赖（严格按锁文件安装）
npm ci
# 或
npm install

# 2. 启动本地开发服务器（默认监听 0.0.0.0:5173，同一局域网电视可直接访问）
npm run dev

# 3. 执行 TypeScript 类型检查
npm run typecheck

# 4. 执行自动化单元测试与遥控器全流程集成测试
npm test

# 5. 构建生产静态包并执行 Chrome 66 产物兼容检查（tsc + vite build + check-compat）
npm run build

# 6. 预览生产构建（默认监听 0.0.0.0:4173）
npm run preview

# 7. 运行基于本机 Chrome CDP 的生产包 HTTP 端到端校验（可选）
npm run e2e
```

---

## 二、生产静态部署方法

1. 执行 `npm run build`，产物输出在 `dist/` 目录：
   - `dist/index.html`
   - `dist/assets/style-[hash].css`
   - `dist/assets/app-[hash].js`
2. 将 `dist/` 目录托管在任意 HTTP 静态服务器（Nginx、Caddy、Apache、CDN 静态托管或局域网 HTTP 服务）即可运行。
3. **支持子目录部署**：`vite.config.ts` 配置了 `base: './'`，静态资源全部采用相对路径引用，可部署在根路径 `/` 或任意子目录（如 `/yiwu/`）下。
4. **注意**：必须通过 `http://` 或 `https://` 协议访问，不支持通过 `file://` 直接双击打开。

Nginx 最小示例配置：

```nginx
server {
  listen 80;
  server_name tv.example.com;
  root /var/www/yiwu/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## 三、TV 模式与普通模式切换方式

应用默认启用 **TV 远距模式**（大字号、4%～5% 电视安全留白、焦点看门狗防丢失），绝不仅凭 `User-Agent` 猜测设备。提供以下切换方式：

1. **应用内切换（持久化保存）**：
   - 进入左侧导航 **「设置」** → 在「显示与交互模式」中选择 **「TV 远距模式」** 或 **「普通浏览模式」**。选择结果保存在本地 `localStorage`。
2. **URL 查询参数临时覆盖（不覆盖已保存的本地设置）**：
   - 强制启用 TV 模式：`?tv=1` 或 `?tv=true`
   - 强制启用普通模式（适合手机/桌面直接分享链接）：`?tv=0` 或 `?tv=false`
   - 开启开发调试面板入口：`?debug=1`

---

## 四、Chrome 66 兼容策略说明

### 1. 为什么不使用 `@vitejs/plugin-legacy` 默认双包方案？

`@vitejs/plugin-legacy` 默认通过特性嗅探（动态 `import()`、`import.meta`、异步生成器）决定浏览器加载现代包还是 legacy 包。而 **Chrome 66 恰好支持这三项特性**，但**不支持**可选链 `?.`、空值合并 `??`、`optional-catch-binding`（无参 `catch {}`）、`Object.fromEntries`、`Array.prototype.at` 等后续标准。若仅引入 `@vitejs/plugin-legacy`，Chrome 66 实际会加载未降级的现代包而直接报错。

### 2. 本项目的实操兼容方案

1. **单一产物直接以 Chrome 66 为目标（[vite.config.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/vite.config.ts)）**：
   - `build.target = 'chrome66'`、`build.cssTarget = 'chrome66'`、`esbuild.target = 'chrome66'`。
   - 显式设置 `esbuild.supported = { 'optional-catch-binding': false }`，强制将 React 18 生产包及源码中的无参 `catch {}` 转译为 `catch (e) {}`。
   - `rollupOptions.output.format = 'iife'` + `inlineDynamicImports = true`，打包为单一经典脚本 `<script defer src="./assets/app-[hash].js">`，完全不依赖 ES Module 动态拆分或 `modulepreload`。
2. **源码级运行时 API 约束**：
   - `tsconfig.json` 将 `lib` 限制为 `["ES2018", "DOM", "DOM.Iterable"]`，从编译期阻止调用 ES2019+ 标准库方法。
   - 不使用 `structuredClone`、`crypto.randomUUID`、`Array.prototype.at`、`Object.fromEntries`、`Object.hasOwn`、`ResizeObserver`。
3. **CSS 兼容性约束（[src/styles/app.css](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/styles/app.css)）**：
   - 纯手写标准 CSS，不使用 `:focus-visible`、`:has()`、`@container`、CSS 嵌套、Flexbox `gap`、`aspect-ratio`、`clamp()`、`dvh`/`svh`、`backdrop-filter`。
   - 聚焦样式使用独立的 `.tv-focusable:focus` 与 `.tv-focusable[data-tv-focused="true"]` 规则，不与任何新伪类合并在同一选择器列表中。
4. **构建后自动产物核验（[scripts/check-compat.mjs](file:///Users/quanyipinghe/Documents/AI/family/YiWu/scripts/check-compat.mjs)）**：
   - 每次执行 `npm run build` 时，自动使用 `acorn` 以 `ecmaVersion: 2018, sourceType: 'script'` 解析最终生成的 `dist/assets/app-*.js`，并扫描禁用运行时 API 与禁用 CSS 属性。

---

## 五、遥控器映射配置方法

遥控器按键映射集中在 [src/tv/keymap.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/tv/keymap.ts) 中管理，统一由 [src/tv/InputManager.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/tv/InputManager.ts) 监听，不在各页面散落绑定 `keydown`。

### 1. 默认映射

| 动作 (`TvAction`) | `event.key` | `event.keyCode` / `which` |
| --- | --- | --- |
| `up` | `ArrowUp`, `Up` | `38` |
| `down` | `ArrowDown`, `Down` | `40` |
| `left` | `ArrowLeft`, `Left` | `37` |
| `right` | `ArrowRight`, `Right` | `39` |
| `enter` | `Enter` | `13` |
| `back` | `Escape`, `Esc`, `GoBack`, `BrowserBack`, `Backspace` | `27`, `461` (webOS), `10009` (Tizen), `8`, `166` |

### 2. 自定义映射配置方式

- **方式一（宿主或 HTML 注入）**：在页面加载前向 `window.YIWU_KEYMAP` 注入追加或替换配置：
  ```html
  <script>
    window.YIWU_KEYMAP = {
      mode: 'append', // 'append' 在默认基础上追加；'replace' 替换对应动作映射
      map: {
        back: { keys: [' SoftRight '], keyCodes: [10009] }
      }
    };
  </script>
  ```
- **方式二（代码内调用）**：通过 `input.setKeyMap(mergeKeyMap(DEFAULT_KEYMAP, customPatch, 'append'))` 动态更新。

---

## 六、可选 Android WebView 返回桥接说明

Android 原生返回键（`KEYCODE_BACK = 4`）属于系统层按键，默认不一定作为网页 DOM `keydown` 事件传递给 WebView，因此页面一方面在所有子页面、阅读滚动模式和弹窗中提供了**可见且可聚焦的「返回 / 取消」按钮**，另一方面在 [src/tv/backBridge.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/tv/backBridge.ts) 中挂载了宿主桥接接口 `window.tvApp.handleBack()`。

### Android 宿主接入示例（Kotlin / Java）

```kotlin
override fun onBackPressed() {
    webView.evaluateJavascript(
        "(window.tvApp && typeof window.tvApp.handleBack === 'function') ? String(window.tvApp.handleBack()) : 'false'"
    ) { result ->
        // evaluateJavascript 返回字符串 "\"true\"" 表示网页已消费返回动作（如关闭弹窗、退出阅读滚动模式、从详情返回列表）
        if (result != "\"true\"") {
            // 网页已处于根页面（今日页），由宿主决定是否退出 Activity
            super.onBackPressed()
        }
    }
}
```

- 未接入宿主桥接时，网页本身完全正常运行，不会报错。

---

## 七、添加新内容的方法

所有内容数据保存在 [src/data/proverbs.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/data/proverbs.ts)，类型定义在 [src/data/types.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/data/types.ts)。

添加新条目步骤：
1. 打开 [src/data/proverbs.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/data/proverbs.ts)，在 `PROVERBS` 数组中新增一个遵循 `Proverb` 接口的对象：
   - `id`：使用稳定且唯一的小写拼音短横线标识（如 `'qian-li-zhi-xing'`），**切勿使用数字下标**。
   - `category`：主要类型（`'suyu' | 'chengyu' | 'guanyongyu' | 'geyan' | 'zhenyan' | 'jingju'`）。
   - `tags`：2～3 个辅助标签。
   - `story`：固定 4 格生活故事数组，`beat` 依次为 `'cause'`（起因）、`'action'`（选择）、`'result'`（结果）、`'point'`（点题），`scene` 从 12 种内置 SVG 场景中选择。
   - `source` 与 `sourceStatus`：有明确典籍出处的填 `'classical'` 并注明篇名；民间熟语填 `'folk'`（「民间流传，具体出处未核实」）；待考证填 `'unverified'`，**严禁编造古籍原文或作者**。
2. 运行 `npm test`（`src/test/draw.test.ts` 会自动校验所有条目的 ID 唯一性、四格故事结构与字段长度）。

---

## 八、数据存储说明与限制

- **存储键名与版本**：统一封装于 [src/storage/storage.ts](file:///Users/quanyipinghe/Documents/AI/family/YiWu/src/storage/storage.ts)，命名空间为 `yiwu:v1:data`（损坏数据自动备份至 `yiwu:v1:corrupt` 并初始化干净状态）。
- **存储限制**：
  1. 数据仅保存在当前电视/设备的浏览器 `localStorage` 中，卸载应用、清除 WebView 数据或无痕浏览会导致数据清空。
  2. 当检测到 `localStorage` 被禁用或配额已满时，应用不会崩溃，会自动降级为**当前会话内存模式**并在顶部显示温和提示。
  3. TV 模式下不依赖系统文件选择器；如需 JSON 文本备份导出/导入，可在「设置」中切换到普通模式操作。

---

## 九、已知问题与真机兼容验收清单

### 声明：**未完成真机兼容验证**

> 开发环境在 macOS 上通过了 TypeScript 检查、Vitest 单元测试（21 项）、生产构建 ES2018 AST 与 CSS 兼容性静态扫描（`scripts/check-compat.mjs`）以及本机 Headless Chrome HTTP 端到端测试（`scripts/e2e-cdp.mjs`）。
> 但由于本地开发环境无物理 Android TV（Chrome 66 WebView）真机，**目前尚未在真实 Chrome 66 / Android TV 硬件上完成最终真机验证**。上线前请按以下清单在目标电视或盒子上逐项验收。

### Android TV / Chrome 66 真机验收清单

- [ ] **1. HTTP 加载与首屏渲染**：通过局域网 HTTP 地址在目标 Android TV（Chrome 66 WebView）打开页面，确认首屏正常渲染、无白屏、控制台无 SyntaxError 或 ReferenceError。
- [ ] **2. 聚焦背景色明显变化（硬性指标）**：使用电视遥控器移动焦点，确认所有可操作元素（左侧导航、抽取按钮、读懂按钮、收藏按钮、步骤标签、阅读滚动模式按钮、上下段按钮、收藏卡片、分类筛选、分页按钮、设置项、弹窗按钮）在获得焦点时，背景色均明显变为暖金色 `#F2C879`，文字变为深色 `#1C2028`，且与 `selected`（朱砂红边框深底色）清晰区分。
- [ ] **3. 纯遥控器全流程无死角**：不使用鼠标或触屏，仅用遥控器「上、下、左、右、确认（OK）、返回（Back）」完成：
  - 首页抽取今日一悟 → 进入详情页三段阅读 → 开启并退出阅读滚动模式 → 返回首页；
  - 收藏与取消收藏 → 在收藏页切换分类筛选 → 删除收藏后焦点自动落到相邻卡片或空状态按钮；
  - 在足迹页翻页查看历史记录并进入详情后返回恢复原页码与焦点；
  - 在设置页打开「清空本地数据」弹窗，验证焦点被限制在弹窗内，按返回键或取消按钮关闭后恢复原按钮焦点。
- [ ] **4. 长按防抖与防重**：长按遥控器「确认」键不会重复抽签、不会反复切换收藏或重复开关弹窗；长按方向键平滑节流移动，页面不发生乱跳。
- [ ] **5. 远距离排版与安全留白**：在电视观看距离（2～3 米）检查字号清晰度，确认页面四周保留 4%～5% 安全留白（未被电视 Overscan 裁切），正文无横向滚动条或固定高度截断。
- [ ] **6. 返回键与宿主桥接**：测试遥控器物理返回键表现；如在自建 Android WebView 中运行，验证宿主调用 `window.tvApp.handleBack()` 能否逐级返回并在首页返回 `false`。
