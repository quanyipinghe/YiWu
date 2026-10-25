/**
 * 设置页。
 *
 * 功能与焦点规则：
 * - 支持三种模式选择：TV 远距模式 / 普通浏览模式 / 自动判断模式（持久化在本地，支持 ?tv=1 / ?tv=0 / ?mode=auto 临时覆盖）。
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
    modePreference,
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

  const sourceLabel =
    modeSource === 'query'
      ? '（网址参数覆盖）'
      : modeSource === 'saved'
        ? '（已手动保存）'
        : '（自动判断）';

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
            <span className="settings-status-tag" data-testid="settings-mode-status">
              当前生效：{mode === 'tv' ? 'TV 模式' : '普通模式'}
              {sourceLabel}
            </span>
          </div>
          <p className="settings-card-desc">
            在电视上使用大字号与遥控器导航，在手机或电脑上自然滚动阅读。也可以让应用自动选择。
            {modeSource === 'query' ? '当前链接已指定显示模式，需移除网址中的模式参数后，手动选择才会生效。' : ''}
          </p>
          <div className="settings-btn-row">
            <FocusButton
              focusId="settings-mode-tv"
              group="settings-controls"
              variant="default"
              selected={modePreference === 'tv' || (modePreference === 'auto' && mode === 'tv' && modeSource === 'default')}
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
              selected={modePreference === 'normal'}
              onPress={() => setMode('normal')}
              nav={{
                left: 'settings-mode-tv',
                right: 'settings-mode-auto',
                up: null,
                down: 'settings-motion-reduced',
              }}
            >
              普通浏览模式（桌面 / 手机）
            </FocusButton>

            <FocusButton
              focusId="settings-mode-auto"
              group="settings-controls"
              variant="default"
              selected={data.settings.mode === 'auto'}
              onPress={() => setMode('auto')}
              nav={{
                left: 'settings-mode-normal',
                right: null,
                up: null,
                down: 'settings-motion-reduced',
              }}
            >
              自动判断模式
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
              {storageStatus === 'ok' ? '已保存在当前设备' : '仅当前会话有效'}
            </span>
          </div>
          <p className="settings-card-desc">
            已累计抽取 <strong>{data.history.length}</strong> 天，收藏{' '}
            <strong>{data.favorites.length}</strong> 句老话，当前处于第{' '}
            <strong>{data.round.number}</strong> 轮。记录仅保存在当前设备，清除浏览器数据或执行下方清空操作会重置记录，建议提前备份。
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
                备份与恢复记录
              </FocusButton>
            ) : null}
          </div>
          {ClearedTip ? (
            <p className="settings-inline-feedback" role="status">
              已清空本地收藏、历史足迹与轮次记录。
            </p>
          ) : null}
        </div>

        {/* 4. 遥控器与多端操作说明 */}
        <div className="settings-card">
          <div className="settings-card-header">
            <h3 className="settings-card-title">使用帮助</h3>
          </div>
          <ul className="settings-help-list">
            <li>
              <strong>TV 远距模式（遥控器）</strong>：方向键在导航栏、按钮与卡片间移动真实 DOM 焦点；确认键（Enter / OK）执行操作且长按防重；返回键优先关闭弹窗或退出阅读滚动模式。
            </li>
            <li>
              <strong>PC 普通模式（鼠标与键盘）</strong>：支持鼠标点击与 Tab / Shift+Tab 键盘导航、Enter / Space 激活按钮，可自然滚动阅读与复制文字。
            </li>
            <li>
              <strong>手机普通模式（触摸）</strong>：单列自适应排版，故事支持逐格或全览切换与左右轻扫手势，不强制自动聚焦以免弹出软键盘。
            </li>
            <li>
              <strong>记录与隐私</strong>：无需注册，收藏与足迹仅保存在当前设备，不会自动同步到其他设备。
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
