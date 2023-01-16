import { writable } from "svelte/store";

interface Message {
  title?: string;
  message: string;
  cancel?: string;
  confirm?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const enabled = writable(false);
export const message = writable<Message>(null);

export function hideMessageDialog(onHide?: () => void){
  if (onHide) onHide();
  enabled.set(false);
}

export function showMessageDialog(msg: Message) {
  const _msg: Message = {
    title: msg.title || 'Alert',
    message: msg.message,
    confirm: msg.confirm || 'Confirm',
    cancel: msg.cancel || 'Cancel',
    onConfirm: () => hideMessageDialog(msg.onConfirm),
    onCancel: () => hideMessageDialog(msg.onCancel),
  }
  
  message.set(_msg);
  enabled.set(true);
}