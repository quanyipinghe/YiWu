/**
 * 统一的可聚焦按钮组件。
 *
 * - 使用原生 <button>，真实 DOM 焦点；data-focus-id / data-focus-group 稳定唯一。
 * - selected（当前页面 / 当前筛选项）与 focused（遥控器所在位置）是两种独立状态：
 *   selected 通过 aria-current / aria-pressed 与 is-selected 类表达；
 *   focused 只由 :focus 与 data-tv-focused 驱动。
 */
import React from 'react';
import type { NavOverrides } from './FocusManager';
import { useFocusable } from './TvContext';

export interface FocusButtonProps {
  focusId: string;
  group: string;
  nav?: NavOverrides;
  onPress: () => void;
  children: React.ReactNode;
  /** 视觉变体 */
  variant?: 'default' | 'primary' | 'nav' | 'chip' | 'card' | 'danger' | 'ghost';
  selected?: boolean;
  /** 选中语义：导航用 page，筛选 / 开关用 pressed */
  selectedKind?: 'page' | 'pressed';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  busy?: boolean;
}

export function FocusButton(props: FocusButtonProps): JSX.Element {
  const ref = useFocusable<HTMLButtonElement>(props.focusId, { group: props.group, nav: props.nav });
  const classes = ['tv-focusable', 'btn', 'btn-' + (props.variant || 'default')];
  if (props.selected) classes.push('is-selected');
  if (props.busy) classes.push('is-busy');
  if (props.className) classes.push(props.className);
  const selectedKind = props.selectedKind || 'pressed';
  return (
    <button
      ref={ref}
      type="button"
      className={classes.join(' ')}
      data-focus-id={props.focusId}
      data-focus-group={props.group}
      data-selected={props.selected ? 'true' : undefined}
      aria-current={props.selected && selectedKind === 'page' ? 'page' : undefined}
      aria-pressed={selectedKind === 'pressed' && props.selected !== undefined ? !!props.selected : undefined}
      aria-label={props.ariaLabel}
      aria-busy={props.busy ? true : undefined}
      disabled={props.disabled}
      onClick={() => {
        if (props.busy) return;
        props.onPress();
      }}
    >
      {props.children}
    </button>
  );
}
