/**
 * 电视端主布局框架：
 * - 顶部：品牌与副标题、本地日期与星期、当前页面名称、存储降级提示、子页面可见返回按钮。
 * - 左侧：主导航（今日、收藏、足迹、设置），区分 selected（当前所在模块）与 focused（遥控器焦点）。
 * - 右侧：主要内容区域。
 * - 底部：简短清晰的遥控器操作提示。
 */
import React, { useLayoutEffect } from 'react';
import { useAppState } from '../app/AppState';
import { useRouter, type RootName } from '../app/router';
import { formatFullDate, formatWeekday } from '../domain/date';
import { FocusButton } from '../tv/FocusButton';
import { useFocusGroup, useTv } from '../tv/TvContext';
import { TvDebugPanel } from './TvDebugPanel';

interface NavItem {
  key: RootName;
  label: string;
  focusId: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'today', label: '今日', focusId: 'nav-today' },
  { key: 'favorites', label: '收藏', focusId: 'nav-favorites' },
  { key: 'history', label: '足迹', focusId: 'nav-history' },
  { key: 'settings', label: '设置', focusId: 'nav-settings' },
];

const PAGE_TITLES: Record<RootName | 'detail', string> = {
  today: '今日一悟',
  favorites: '我的收藏',
  history: '每日足迹',
  settings: '应用设置',
  detail: '读懂这句话',
};

export interface LayoutProps {
  children: React.ReactNode;
  mainRef: React.RefObject<HTMLElement>;
  debugOpen: boolean;
  onToggleDebug: () => void;
  showDebugEntry: boolean;
  readingMode: boolean;
}

export function Layout(props: LayoutProps): JSX.Element {
  const { today, storageStatus, notice, dismissNotice, mode } = useAppState();
  const { current, rootName, navigateRoot } = useRouter();
  const { focus } = useTv();

  // rem 取根字号，电视字号需随显示模式切换，不能只按窗口宽度放大。
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-display-mode', mode);
    return () => document.documentElement.removeAttribute('data-display-mode');
  }, [mode]);

  // 主导航分组：纵向排列，向右进入内容区，上下到头停留，不循环跳转
  useFocusGroup('nav', {
    layout: 'vertical',
    exits: {
      right: '@content',
      left: null,
      up: null,
      down: null,
    },
    enterTo: 'selected',
    remember: false,
  });

  useFocusGroup('notice-bar', {
    layout: 'horizontal',
    exits: {
      down: '@content',
      left: '@group:nav',
      up: null,
      right: null,
    },
    remember: false,
  });

  const pageTitle = PAGE_TITLES[current.route.name] || '一日一悟';

  return (
    <div
      className={'app-shell mode-' + mode}
      data-mode={mode}
      data-page={current.route.name}
    >
      {/* 顶部栏：品牌、日期、当前页面名称 */}
      <header className="app-header">
        <div className="brand-block">
          <div className="brand-seal" aria-hidden="true">
            悟
          </div>
          <div className="brand-text">
            <h1 className="brand-title">一日一悟</h1>
            <p className="brand-subtitle">每天一句老话，看懂一点生活。</p>
          </div>
        </div>

        <div className="header-meta">
          <span className="header-page-name" data-testid="header-page-name">
            {pageTitle}
          </span>
          <span className="header-divider" aria-hidden="true">
            ·
          </span>
          <time className="header-date" dateTime={today} data-testid="header-date">
            {formatFullDate(today)} {formatWeekday(today)}
          </time>
          {storageStatus === 'memory' ? (
            <span className="header-badge header-badge-warn" role="status">
              临时会话模式
            </span>
          ) : null}
          {props.showDebugEntry ? (
            <button
              type="button"
              className={'header-debug-pill' + (props.debugOpen ? ' is-active' : '')}
              tabIndex={-1}
              onClick={props.onToggleDebug}
              title="可在「设置」页用遥控器开关 TV 调试面板"
            >
              调试面板：{props.debugOpen ? '开' : '关'}
            </button>
          ) : null}
        </div>
      </header>

      {/* 存储异常或降级提示栏 */}
      {notice ? (
        <div className="storage-notice" role="alert">
          <span className="storage-notice-text">{notice}</span>
          <FocusButton
            focusId="notice-dismiss"
            group="notice-bar"
            variant="ghost"
            onPress={() => {
              dismissNotice();
              focus.ensureFocus();
            }}
          >
            知道了
          </FocusButton>
        </div>
      ) : null}

      {/* 主体：左侧主导航 + 右侧主要内容 */}
      <div className="app-body">
        <nav className="app-nav" aria-label="主导航">
          <ul className="nav-list">
            {NAV_ITEMS.map((item, idx) => {
              const isSelected = rootName === item.key;
              const prevId = idx > 0 ? NAV_ITEMS[idx - 1].focusId : null;
              const nextId = idx < NAV_ITEMS.length - 1 ? NAV_ITEMS[idx + 1].focusId : null;
              return (
                <li key={item.key} className="nav-item">
                  <FocusButton
                    focusId={item.focusId}
                    group="nav"
                    variant="nav"
                    selected={isSelected}
                    selectedKind="page"
                    nav={{
                      up: prevId,
                      down: nextId,
                      left: null,
                      right: '@content',
                    }}
                    onPress={() => {
                      if (current.route.name === item.key) {
                        focus.focusContent();
                      } else {
                        navigateRoot(item.key);
                      }
                    }}
                  >
                    <span className="nav-label">{item.label}</span>
                    {isSelected ? (
                      <span className="nav-indicator" aria-hidden="true" />
                    ) : null}
                  </FocusButton>
                </li>
              );
            })}
          </ul>
        </nav>

        <main
          ref={props.mainRef}
          className="app-main"
          id="main-content"
          tabIndex={-1}
        >
          {props.children}
        </main>
      </div>

      {/* 底部：遥控器操作提示 */}
      <footer className="app-footer" aria-label="遥控器操作提示">
        <div className="footer-hints">
          <span className="hint-item">
            <kbd className="hint-key">▲▼◀▶</kbd> 移动焦点
          </span>
          <span className="hint-item">
            <kbd className="hint-key">确认 / OK</kbd> 选择操作
          </span>
          <span className="hint-item">
            <kbd className="hint-key">返回 / Esc</kbd> 返回上一级
          </span>
          {props.readingMode ? (
            <span className="hint-item hint-reading-active">
              当前处于阅读滚动模式：上下键滚动正文，按返回键退出
            </span>
          ) : null}
        </div>
        <div className="footer-mode-tag">
          {mode === 'tv' ? 'TV 远距模式' : '普通浏览模式'}
        </div>
      </footer>

      <TvDebugPanel open={props.debugOpen} readingMode={props.readingMode} />
    </div>
  );
}
