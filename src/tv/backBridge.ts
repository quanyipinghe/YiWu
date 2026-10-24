/**
 * 可选的 Android WebView 宿主桥接。
 *
 * Android 原生返回键不一定会以 DOM 事件传给网页。若应用运行在自建 WebView 中，
 * 宿主可以在 onBackPressed（或 OnBackPressedCallback）里调用：
 *
 *   webView.evaluateJavascript(
 *     "(window.tvApp && window.tvApp.handleBack) ? String(window.tvApp.handleBack()) : 'false'",
 *     value -> { if (!"\"true\"".equals(value)) finish(); });
 *
 * handleBack() 返回 true 表示网页已处理（关闭弹窗、退出阅读模式、返回上一页等），
 * 返回 false 表示网页已在根页面，宿主可自行决定是否退出应用。
 * 未接入宿主时，本模块不会影响页面运行。
 */

export interface TvAppBridge {
  /** 执行应用内返回 */
  handleBack: () => boolean;
  /** 桥接协议版本 */
  bridgeVersion: number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    tvApp?: TvAppBridge;
  }
}

/**
 * 安装桥接。若宿主已注入 window.tvApp（可能带有自己的方法），只追加不覆盖。
 * 返回卸载函数。
 */
export function installBackBridge(win: Window, handleBack: () => boolean): () => void {
  const existing = win.tvApp && typeof win.tvApp === 'object' ? win.tvApp : null;
  const previous = existing ? existing.handleBack : undefined;
  const bridge: TvAppBridge = existing || ({} as TvAppBridge);
  bridge.handleBack = function () {
    try {
      return handleBack();
    } catch (e) {
      return false;
    }
  };
  bridge.bridgeVersion = 1;
  win.tvApp = bridge;
  return () => {
    if (win.tvApp !== bridge) return;
    if (previous) {
      bridge.handleBack = previous;
    } else if (!existing) {
      delete win.tvApp;
    }
  };
}
