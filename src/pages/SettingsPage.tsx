/**
 * 设置页。
 *
 * 功能与焦点规则：
 * - TV 模式 / 普通模式切换（持久化在本地，支持 ?tv=1 / ?tv=0 临时覆盖）。
 * - 动画偏好切换（标准 / 减少动画）。
 * - 本地数据说明与遥控器操作说明。
 * - 清空本地数据：点击后弹出遥控器可操作的二次确认弹窗，关闭后恢复原按钮焦点。
 * - 普通模式下提供 JSON 数据导出与导入弹窗；TV 模式下不依赖文件选择器或键盘输入，
 *   也不展示任何不可用的假按钮。
 * - 开发环境下提供可聚焦的「TV 调试面板」开关入口。
 */
import { useState } from 'react';
import { useAppState } from '../app/AppState';
import { Modal } from '../components/Modal';
import { FocusButton } from '../tv/FocusButton';
import { useFocusGroup, usePageFocus } from '../tv/TvContext';

export interface SettingsPageProps {
  debugOpen: boolean;
  onToggleDebug: () => void;
  showDebugEntry: boolean;
}

export function SettingsPage(props: SettingsPageProps): JSX.Element {
  const {
    data,
    mode,
    modeSource,
    motion,
    storageStatus,
    setMode,
    setMotion,
    clearAll,
    exportData,
    importData,
  } = useAppState();

  const [clearModalOpen, setClearModalOpen] = useState(false);
  const [ClearedTip, setClearedTip] = useState(false);
  const [ioModalOpen, setIoModalOpen] = useState(false);
  const [ioText, setIoText] = useState('');
  const [ioStatus, setIoStatus] = useState<string | null>(null);

  usePageFocus('settings', () => [
    mode === 'tv' ? 'settings-mode-tv' : 'settings-mode-normal',
    'settings-mode-tv',
  ]);

  useFocusGroup('settings-controls', {
    layout: 'vertical',
    exits: {
      left: '@group:nav',
      right: null,
      up: null,
      down: null,
    },
    enterTo: 'first',
  });

  const isNormal = mode === 'normal';
  // 计算「清空数据」按钮的上下邻居
  const clearUpId = 'settings-motion-full';
  const clearDownId = isNormal
    ? 'settings-export-btn'
    : props.showDebugEntry
      ? 'settings-toggle-debug'
      : null;

  return (
    <section className="page-section settings-page" aria-label="应用设置">
      <div className="page-top-bar">
        <div>
          <h2 className="section-title">应用设置</h2>
          <p className="section-subtitle">
            所有设置与阅读记录均保存在当前设备本地，无需注册登录。
          </p>
        </div>
      </div>

      <div className="settings-grid">
        {/* 1. 显示模式切换 */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h3 className="settings-card-title">显示与交互模式</h3>
            <span className="settings-status-tag">
              当前：{mode === 'tv' ? 'TV 模式' : '普通模式'}
              {modeSource === 'query' ? '（网址参数覆盖）' : ''}
            </span>
          </div>
          <p className="settings-card-desc">
            TV 模式默认开启大字号、远距离留白与焦点看门狗；普通模式适合桌面鼠标或手机触屏浏览。也可通过网址参数{' '}
            <code>?tv=1</code> 或 <code>?tv=0</code> 临时覆盖。
          </p>
          <div className="settings-btn-row">
            <FocusButton
              focusId="settings-mode-tv"
              group="settings-controls"
              variant="default"
              selected={mode === 'tv'}
              onPress={() => setMode('tv')}
              nav={{
                left: '@group:nav',
                right: 'settings-mode-normal',
                up: null,
                down: 'settings-motion-full',
              }}
            >
              TV 远距模式（推荐电视）
            </FocusButton>

            <FocusButton
              focusId="settings-mode-normal"
              group="settings-controls"
              variant="default"
              selected={mode === 'normal'}
              onPress={() => setMode('normal')}
              nav={{
                left: 'settings-mode-tv',
                right: null,
                up: null,
                down: 'settings-motion-reduced',
              }}
            >
              普通浏览模式（桌面 / 手机）
            </FocusButton>
          </div>
        </div>

        {/* 2. 动画偏好 */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h3 className="settings-card-title">界面过渡效果</h3>
            <span className="settings-status-tag">
              当前：{motion === 'full' ? '轻量淡入' : '减少动画'}
            </span>
          </div>
          <p className="settings-card-desc">
            性能较弱的电视盒子建议开启「减少动画」，抽签后直接展示结果，不做过渡动画。
          </p>
          <div className="settings-btn-row">
            <FocusButton
              focusId="settings-motion-full"
              group="settings-controls"
              variant="default"
              selected={motion === 'full'}
              onPress={() => setMotion('full')}
              nav={{
                left: '@group:nav',
                right: 'settings-motion-reduced',
                up: 'settings-mode-tv',
                down: 'settings-clear-data',
              }}
            >
              轻量淡入动画
            </FocusButton>

            <FocusButton
              focusId="settings-motion-reduced"
              group="settings-controls"
              variant="default"
              selected={motion === 'reduced'}
              onPress={() => setMotion('reduced')}
              nav={{
                left: 'settings-motion-full',
                right: null,
                up: 'settings-mode-normal',
                down: 'settings-clear-data',
              }}
            >
              减少动画（直接展示）
            </FocusButton>
          </div>
        </div>

        {/* 3. 本地数据说明与清空 */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h3 className="settings-card-title">本地数据管理</h3>
            <span className="settings-status-tag">
              存储状态：{storageStatus === 'ok' ? 'localStorage 正常' : '仅当前会话（降级）'}
            </span>
          </div>
          <p className="settings-card-desc">
            已累计抽取 <strong>{data.history.length}</strong> 天，收藏{' '}
            <strong>{data.favorites.length}</strong> 句老话，当前处于第{' '}
            <strong>{data.round.number}</strong> 轮。所有数据保存在本机浏览器{' '}
            <code>yiwu:v1:data</code> 中，清除浏览器缓存或执行下方清空操作会重置记录。
          </p>
          <div className="settings-btn-row">
            <FocusButton
              focusId="settings-clear-data"
              group="settings-controls"
              variant="danger"
              onPress={() => {
                setClearedTip(false);
                setClearModalOpen(true);
              }}
              nav={{
                left: '@group:nav',
                right: isNormal ? 'settings-export-btn' : null,
                up: clearUpId,
                down: clearDownId,
              }}
            >
              清空本地收藏与足迹…
            </FocusButton>

            {isNormal ? (
              <FocusButton
                focusId="settings-export-btn"
                group="settings-controls"
                variant="default"
                onPress={() => {
                  setIoText(exportData());
                  setIoStatus(null);
                  setIoModalOpen(true);
                }}
                nav={{
                  left: 'settings-clear-data',
                  right: null,
                  up: 'settings-motion-reduced',
                  down: props.showDebugEntry ? 'settings-toggle-debug' : null,
                }}
              >
                导出 / 导入备份数据（JSON）
              </FocusButton>
            ) : null}
          </div>
          {ClearedTip ? (
            <p className="settings-inline-feedback" role="status">
              已清空本地收藏、历史足迹与轮次记录。
            </p>
          ) : null}
        </div>

        {/* 4. 遥控器与返回键说明 */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h3 className="settings-card-title">遥控器操作与兼容说明</h3>
          </div>
          <ul className="settings-help-list">
            <li>
              <strong>方向键（上下左右）</strong>：在导航栏、按钮与卡片之间移动焦点；到达边界时默认停留，不随机循环跳转。
            </li>
            <li>
              <strong>确认键（Enter / OK）</strong>：执行当前聚焦按钮的操作；长按确认不会重复抽签或连续触发。
            </li>
            <li>
              <strong>返回键（Escape / 电视返回键）</strong>：优先关闭弹窗或退出阅读滚动模式，其次从详情返回上一页；页面内同时提供可见的「返回」按钮。
            </li>
            <li>
              <strong>宿主返回桥接</strong>：若运行在 Android WebView 中，宿主可调用{' '}
              <code>window.tvApp.handleBack()</code> 触发网页内返回。
            </li>
          </ul>

          {props.showDebugEntry ? (
            <div className="settings-btn-row">
              <FocusButton
                focusId="settings-toggle-debug"
                group="settings-controls"
                variant="default"
                selected={props.debugOpen}
                onPress={props.onToggleDebug}
                nav={{
                  left: '@group:nav',
                  right: null,
                  up: isNormal ? 'settings-export-btn' : 'settings-clear-data',
                  down: null,
                }}
              >
                {props.debugOpen
                  ? '关闭 TV 调试面板（开发工具）'
                  : '开启 TV 调试面板（开发工具）'}
              </FocusButton>
            </div>
          ) : null}
        </div>
      </div>

      {/* 清空数据二次确认弹窗 */}
      <Modal
        open={clearModalOpen}
        idPrefix="confirm-clear"
        title="确认清空本地数据？"
        cancelText="取消"
        confirmText="确认清空"
        confirmVariant="danger"
        onClose={() => setClearModalOpen(false)}
        onConfirm={() => {
          clearAll();
          setClearModalOpen(false);
          setClearedTip(true);
        }}
      >
        <p>
          此操作将清空本设备上保存的全部「收藏」与「每日足迹」记录，并重置抽取轮次。清空后无法恢复，是否继续？
        </p>
      </Modal>

      {/* 普通模式下的 JSON 备份导出/导入弹窗 */}
      <Modal
        open={ioModalOpen}
        idPrefix="data-io"
        title="备份导出与导入（普通模式）"
        cancelText="关闭"
        confirmText="导入此 JSON"
        confirmVariant="primary"
        onClose={() => setIoModalOpen(false)}
        onConfirm={() => {
          const ok = importData(ioText);
          if (ok) {
            setIoStatus('导入成功，数据已更新。');
            setIoModalOpen(false);
          } else {
            setIoStatus('JSON 格式无效，请检查后再试。');
          }
        }}
      >
        <p className="modal-io-hint">
          下方为当前本地数据的 JSON 文本，可复制保存备份；或粘贴已有备份后点击「导入此 JSON」：
        </p>
        <textarea
          className="modal-io-textarea"
          rows={6}
          value={ioText}
          onChange={(e) => setIoText(e.target.value)}
          aria-label="备份数据 JSON 文本"
        />
        {ioStatus ? <p className="modal-io-status">{ioStatus}</p> : null}
      </Modal>
    </section>
  );
}
