import type { ComponentType, SvelteComponentTyped } from "svelte";
import { writable } from "svelte/store";
import { hideDrawer, showDrawer } from "./Drawer";

type ActionBody<T> = ComponentType<SvelteComponentTyped<{data?: T, 'pushData'?: () => T}>>;

interface Dialog<T> {
  title?: string;
  body: ActionBody<T>;
  cancel?: string;
  confirm?: string;
  onConfirm?: (data: T) => void;
  onCancel?: (data: T) => void;
  data?: T;
}

export const enabled = writable(false);
export const dialog = writable<Dialog<any>>(null);

export function hideActionDialog(){
  enabled.set(false);
  dialog.set(null);
}

export function showActionDialog<T>(dial: Dialog<T>) {
  const _dial: Dialog<T> = {
    title: dial.title || 'Alert',
    body: dial.body,
    data: dial.data,
    confirm: dial.confirm || 'Save',
    cancel: dial.cancel || 'Cancel',
    onConfirm: (data) => {
      if (dial.onConfirm) dial.onConfirm(data);
      hideActionDialog();
    },
    onCancel: (data) => {
      if (dial.onCancel) dial.onCancel(data);
      hideActionDialog();
    },
  }
  
  dialog.set(_dial);
  enabled.set(true);
}