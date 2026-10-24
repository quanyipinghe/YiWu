/**
 * TV 调试面板（开发排查工具）。
 *
 * 规范要求：
 * - 显示：当前 event.key、当前 keyCode、当前焦点 ID、当前焦点分组、
 *   当前页面、是否处于弹窗或阅读滚动模式、最近一次焦点移动结果。
 * - 提供一个可见的开发模式入口，便于使用真实遥控器开关面板。
 * - 生产环境默认关闭，且绝不展示任何用户数据（收藏、历史等）。
 */
import { useEffect, useState } from 'react';
import { useFocusSnapshot, useTv } from '../tv/TvContext';
import type { KeyInfo } from '../tv/InputManager';

export interface TvDebugPanelProps {
  open: boolean;
  readingMode: boolean;
}

export function TvDebugPanel(props: TvDebugPanelProps): JSX.Element | null {
  const { input } = useTv();
  const snap = useFocusSnapshot(props.open);
  const [lastKey, setLastKey] = useState<KeyInfo | null>(null);

  useEffect(() => {
    if (!props.open) return undefined;
    return input.onKey((info) => setLastKey(info));
  }, [input, props.open]);

  if (!props.open || !snap) return null;

  const move = snap.lastMove;
  const moveText = move
    ? move.direction + ': ' + (move.from || '无') + ' → ' + (move.to || '停留') + ' (' + move.reason + ')'
    : '暂无';

  const modeFlags: string[] = [];
  if (snap.scopeDepth > 0) modeFlags.push('弹窗中(depth=' + snap.scopeDepth + ')');
  if (props.readingMode) modeFlags.push('阅读滚动模式');
  const modeText = modeFlags.length ? modeFlags.join(' / ') : '常规导航';

  return (
    <aside className="tv-debug-panel" aria-label="TV 调试面板" data-testid="tv-debug-panel">
      <div className="tv-debug-title">TV 遥控调试面板</div>
      <dl className="tv-debug-list">
        <div className="tv-debug-row">
          <dt>event.key</dt>
          <dd data-testid="debug-event-key">{lastKey ? lastKey.key || '(空)' : '-'}</dd>
        </div>
        <div className="tv-debug-row">
          <dt>keyCode</dt>
          <dd data-testid="debug-keycode">{lastKey ? String(lastKey.keyCode) : '-'}</dd>
        </div>
        <div className="tv-debug-row">
          <dt>焦点 ID</dt>
          <dd data-testid="debug-focus-id">{snap.activeId || '(无)'}</dd>
        </div>
        <div className="tv-debug-row">
          <dt>焦点分组</dt>
          <dd data-testid="debug-focus-group">{snap.activeGroup || '(无)'}</dd>
        </div>
        <div className="tv-debug-row">
          <dt>当前页面</dt>
          <dd data-testid="debug-page">{snap.page || '-'}</dd>
        </div>
        <div className="tv-debug-row">
          <dt>特殊状态</dt>
          <dd data-testid="debug-mode">{modeText}</dd>
        </div>
        <div className="tv-debug-row">
          <dt>最近移动</dt>
          <dd data-testid="debug-last-move">{moveText}</dd>
        </div>
      </dl>
    </aside>
  );
}
