<script lang="ts">
  import Icon from "@iconify/svelte";
  import { showActionDialog } from "../store/Action";
  import { hideDrawer, showDrawer } from "../store/Drawer";
  import { addDrawerItem, ItemStore } from "../store/DrawerItem";
  import InsertEntry from "./Dialog/InsertEntry.svelte";
  import Entry from "./Entry.svelte";

  const addItem = () => {
    hideDrawer();
    showActionDialog({
      title: "New Entry",
      body: InsertEntry,
      onConfirm(item) {
        addDrawerItem(item);
        showDrawer();
      },
      onCancel: showDrawer,
    })};
</script>

<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
  {#each $ItemStore as item, idx (item.title + idx)}
    <Entry {item} />
  {/each}

  <div class="entry">
    <button class="inner" on:click={addItem}>
      <Icon icon="material-symbols:add" class="text-8xl" />
      <p>add</p>
    </button>
  </div>
</div>
