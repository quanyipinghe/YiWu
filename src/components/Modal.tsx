/**
 * TV 友好的弹窗组件。
 *
 * 规范要求：
 * - 打开时聚焦第一个合理操作（默认聚焦「取消 / 关闭」，防止误触危险操作）。
 * - 弹窗存在时，焦点限制在弹窗容器内，不能移到背景。
 * - 返回键优先关闭弹窗（优先级高于页面返回和阅读模式）。
 * - 关闭后恢复到打开弹窗前的焦点元素。
 * - 不依赖原生 <dialog> 或 inert 属性。
 * - 始终提供可见、可聚焦的「取消 / 关闭」按钮。
 */
import React, { useLayoutEffect, useRef } from 'react';
import { useBackHandler, useFocusGroup, useTv } from '../tv/TvContext';
import { FocusButton } from '../tv/FocusButton';

export interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  /** 确认按钮文案；不传则只显示关闭按钮 */
  confirmText?: string;
  onConfirm?: () => void;
  confirmVariant?: 'primary' | 'danger';
  cancelText?: string;
  /** 打开时优先聚焦的 focusId 列表；默认先聚焦取消按钮 */
  initialFocusIds?: string[];
  idPrefix?: string;
}

export function Modal(props: ModalProps): JSX.Element | null {
  const { focus } = useTv();
  const containerRef = useRef<HTMLDivElement>(null);
  const prefix = props.idPrefix || 'modal';
  const cancelId = prefix + '-cancel';
  const confirmId = prefix + '-confirm';
  const groupName = prefix + '-group';

  useFocusGroup(groupName, {
    layout: 'horizontal',
    exits: { up: null, down: null, left: null, right: null },
    remember: false,
  });

  // 最高优先级拦截返回键关闭弹窗
  useBackHandler(
    () => {
      props.onClose();
      return true;
    },
    100,
    props.open,
  );

  // 压入焦点作用域栈，并在卸载/关闭时恢复原焦点
  useLayoutEffect(() => {
    if (!props.open || !containerRef.current) return undefined;
    const initial =
      props.initialFocusIds && props.initialFocusIds.length
        ? props.initialFocusIds
        : [cancelId, confirmId];
    return focus.pushScope(prefix, containerRef.current, initial);
  }, [props.open, focus, prefix, cancelId, confirmId, props.initialFocusIds]);

  if (!props.open) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <div
        ref={containerRef}
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={prefix + '-title'}
      >
        <h2 id={prefix + '-title'} className="modal-title">
          {props.title}
        </h2>
        <div className="modal-body">{props.children}</div>
        <div className="modal-actions">
          <FocusButton
            focusId={cancelId}
            group={groupName}
            variant="default"
            onPress={props.onClose}
            nav={{
              left: null,
              right: props.onConfirm ? confirmId : null,
              up: null,
              down: null,
            }}
          >
            {props.cancelText || '取消'}
          </FocusButton>
          {props.onConfirm ? (
            <FocusButton
              focusId={confirmId}
              group={groupName}
              variant={props.confirmVariant || 'primary'}
              onPress={props.onConfirm}
              nav={{
                left: cancelId,
                right: null,
                up: null,
                down: null,
              }}
            >
              {props.confirmText || '确认'}
            </FocusButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
