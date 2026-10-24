/**
 * Vite 构建配置 —— 以 Chrome 66（Android TV WebView）为最终运行目标。
 *
 * 兼容策略要点（详见 README「Chrome 66 兼容策略」）：
 * 1. 不使用 @vitejs/plugin-legacy：
 *    plugin-legacy 的「现代包」检测条件（import.meta、动态 import、async generator）
 *    在 Chrome 66 上全部成立，Chrome 66 实际会加载 modern 包而不是 legacy 包，
 *    仅生成 legacy 包并不能证明兼容。因此这里直接把唯一的产物降级到 chrome66。
 * 2. esbuild 语法目标 chrome66：可选链、空值合并、类字段等会被转译。
 * 3. 输出为单个 IIFE 经典脚本（非 type="module"）：
 *    - 不依赖 ES Module 的严格 MIME 校验，部分电视端静态服务器配置不规范时更稳；
 *    - 不产生运行时模块拆分、动态 import 和 modulepreload。
 * 4. 运行时 API（如 Object.fromEntries、Array.prototype.at）不会被语法转译处理，
 *    由源码约束 + 测试扫描 + 构建后 scripts/check-compat.mjs 共同把关。
 */
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** Chrome 66 构建目标 */
const TARGET = 'chrome66';

/**
 * 把 Vite 注入的 <script type="module" crossorigin> 改写为经典 defer 脚本。
 * 产物本身是 IIFE，不含 import/export，因此可以安全地作为经典脚本加载。
 */
function classicScriptPlugin(): Plugin {
  return {
    name: 'yiwu-classic-script',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html: string): string {
        return html
          .replace(/<script type="module" crossorigin src=/g, '<script defer src=')
          .replace(/<script type="module" src=/g, '<script defer src=')
          .replace(/<link rel="stylesheet" crossorigin href=/g, '<link rel="stylesheet" href=')
          .replace(/<link rel="modulepreload"[^>]*>\s*/g, '');
      },
    },
  };
}

export default defineConfig({
  // 相对路径，方便部署在任意子目录（仍需通过 HTTP 访问，不支持 file:// 双击打开）
  base: './',
  plugins: [react(), classicScriptPlugin()],
  esbuild: {
    target: TARGET,
    supported: {
      'optional-catch-binding': false,
    },
  },
  build: {
    target: TARGET,
    cssTarget: TARGET,
    // 不注入 modulepreload polyfill
    modulePreload: false,
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    sourcemap: false,
    rollupOptions: {
      output: {
        format: 'iife',
        // 单文件输出，禁止运行时模块拆分
        inlineDynamicImports: true,
        entryFileNames: 'assets/app-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
