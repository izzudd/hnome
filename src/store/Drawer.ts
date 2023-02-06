import { writable } from "svelte/store";

export const drawerShown = writable(true);

export const showDrawer = () => drawerShown.set(true);
export const hideDrawer = () => drawerShown.set(false);
export const toggleDrawer = () => drawerShown.update(show => !show);