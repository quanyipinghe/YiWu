/**
 * 应用顶层组装组件。
 *
 * 职责：
 * - 连接 AppStateProvider、TvProvider 与 RouterProvider。
 * - 处理跨天日期检查（窗口重新获得焦点、页面可见性变化、遥控器操作时自动检查本地日期）。
 * - 注册页面级返回处理器（弹窗 > 阅读滚动模式 > 详情页出栈 > 次级导航返回今日页）。
 * - 从详情页返回列表时恢复主容器滚动位置。
 */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  AppStateProvider,
  useAppState,
  type AppStateProviderProps,
} from './AppState';
import { RouterProvider, useRouter, type RootName } from './router';
import { Layout } from '../components/Layout';
import { TodayPage } from '../pages/TodayPage';
import { DetailPage } from '../pages/DetailPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HistoryPage } from '../pages/HistoryPage';
import { SettingsPage } from '../pages/SettingsPage';
import {
  TvProvider,
  useBackHandler,
  useTv,
  type TvContextValue,
} from '../tv/TvContext';

export interface AppProps extends Omit<AppStateProviderProps, 'children'> {
  tvValue?: TvContextValue;
  initialRoute?: RootName;
  /** 是否显示开发调试入口；默认在开发环境或 URL 含 ?debug=1 时开启 */
  showDebugEntry?: boolean;
  /** 初始是否展开调试面板；生产环境默认关闭 */
  initialDebugOpen?: boolean;
}

function detectDebugEntry(explicit?: boolean): boolean {
  if (typeof explicit === 'boolean') return explicit;
  if (import.meta.env.DEV) return true;
  if (typeof location !== 'undefined' && /[?&]debug=1\b/.test(location.search)) {
    return true;
  }
  return false;
}

export function App(props: AppProps): JSX.Element {
  return (
    <AppStateProvider
      repo={props.repo}
      storage={props.storage}
      now={props.now}
      random={props.random}
      search={props.search}
    >
      <AppWithTv
        tvValue={props.tvValue}
        initialRoute={props.initialRoute}
        showDebugEntry={detectDebugEntry(props.showDebugEntry)}
        initialDebugOpen={props.initialDebugOpen || false}
      />
    </AppStateProvider>
  );
}

interface InnerProps {
  tvValue?: TvContextValue;
  initialRoute?: RootName;
  showDebugEntry: boolean;
  initialDebugOpen: boolean;
}

function AppWithTv(props: InnerProps): JSX.Element {
  const { mode } = useAppState();
  return (
    <TvProvider watchdog={mode === 'tv'} value={props.tvValue}>
      <AppWithRouter
        initialRoute={props.initialRoute}
        showDebugEntry={props.showDebugEntry}
        initialDebugOpen={props.initialDebugOpen}
      />
    </TvProvider>
  );
}

function AppWithRouter(props: Omit<InnerProps, 'tvValue'>): JSX.Element {
  const mainRef = useRef<HTMLElement>(null);
  const { input } = useTv();

  return (
    <RouterProvider
      initial={props.initialRoute}
      getScrollContainer={() => mainRef.current}
      onNativeBack={() => input.handleBack()}
    >
      <AppRoutes
        mainRef={mainRef}
        showDebugEntry={props.showDebugEntry}
        initialDebugOpen={props.initialDebugOpen}
      />
    </RouterProvider>
  );
}

interface RoutesProps {
  mainRef: React.RefObject<HTMLElement>;
  showDebugEntry: boolean;
  initialDebugOpen: boolean;
}

function AppRoutes(props: RoutesProps): JSX.Element {
  const { refreshToday } = useAppState();
  const { current, depth, back, navigateRoot } = useRouter();
  const { input } = useTv();
  const [debugOpen, setDebugOpen] = useState<boolean>(props.initialDebugOpen);
  const [readingMode, setReadingMode] = useState<boolean>(false);

  // 跨天检查：遥控器操作、窗口重新聚焦、可见性变化时检查本地日期
  useEffect(() => {
    const offActivity = input.onActivity(() => refreshToday());
    const onFocus = () => refreshToday();
    const onVis = () => {
      if (document.visibilityState === 'visible') refreshToday();
    };
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      offActivity();
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [input, refreshToday]);

  // 页面级返回：详情页出栈；非今日的根页面返回到今日页
  useBackHandler(
    () => {
      if (depth > 1) {
        return back();
      }
      if (current.route.name !== 'today') {
        navigateRoot('today');
        return true;
      }
      return false;
    },
    20,
    true,
  );

  // 路由切换或返回时恢复主容器的滚动位置
  useLayoutEffect(() => {
    const el = props.mainRef.current;
    if (el) {
      el.scrollTop = current.scrollTop || 0;
    }
  }, [current.key, current.scrollTop, props.mainRef]);

  const route = current.route;
  let content: JSX.Element;
  if (route.name === 'detail') {
    content = (
      <DetailPage
        key={'detail:' + route.id}
        id={route.id}
        onReadingModeChange={setReadingMode}
      />
    );
  } else if (route.name === 'favorites') {
    content = <FavoritesPage />;
  } else if (route.name === 'history') {
    content = <HistoryPage />;
  } else if (route.name === 'settings') {
    content = (
      <SettingsPage
        debugOpen={debugOpen}
        onToggleDebug={() => setDebugOpen((v) => !v)}
        showDebugEntry={props.showDebugEntry}
      />
    );
  } else {
    content = <TodayPage />;
  }

  return (
    <Layout
      mainRef={props.mainRef}
      debugOpen={debugOpen}
      onToggleDebug={() => setDebugOpen((v) => !v)}
      showDebugEntry={props.showDebugEntry}
      readingMode={readingMode}
    >
      {content}
    </Layout>
  );
}
