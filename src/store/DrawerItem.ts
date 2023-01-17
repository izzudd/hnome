import { writable } from "svelte/store";

export interface DrawerItem {
  id?: number;
  title: string;
  link?: string;
  thumb?: string;
}

export const ItemStore = writable<DrawerItem[]>([]);

const initialItems: DrawerItem[] = [
  {id: 1, title: 'Youtube', link: 'https://www.youtube.com'},
  {id: 2, title: 'Whatsapp', link: 'https://web.whatsapp.com'},
  {id: 3, title: 'Twitter', link: 'https://twitter.com'},
  {id: 4, title: 'Instagram', link: 'https://instagram.com'},
  {id: 5, title: 'Spotify', link: 'https://spotify.com'},
  {id: 6, title: 'Linkedin', link: 'https://linkedin.com'},
  {id: 7, title: 'Microsoft', link: 'https://microsoft.com'},
  {id: 8, title: 'Invasikode', link: 'https://google.com'},
];

export function initItemStore() {
  const itemsString = localStorage.getItem('items');
  const items = itemsString ? JSON.parse(itemsString) : initialItems;
  ItemStore.set(items);
}

export function saveItemStore() {
  let items: DrawerItem[];
  ItemStore.subscribe((_items) => items = _items)();
  localStorage.setItem('items', JSON.stringify(items));
}

export function addDrawerItem(item: DrawerItem) {
  item.id ||= Date.now();
  ItemStore.update(items => {
    items.push(item);
    return items;
  });
  saveItemStore();
}

export function editDrawerItem(item: DrawerItem) {
  if (!item.id) {
    addDrawerItem(item);
    return;
  }

  ItemStore.update(items => {
    const idx = items.findIndex(_item => _item.id === item.id);
    items[idx] = item;
    return items;
  });
  saveItemStore();
}

export function removeDrawerItem(id: number) {
  ItemStore.update(items => items.filter(item => item.id !== id));
  saveItemStore();
}