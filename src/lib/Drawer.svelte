<script lang="ts">
  import Icon from "@iconify/svelte";
  import { addDrawerItem, ItemStore } from "../store/DrawerItem";
  import Entry from "./Entry.svelte";

  function addItem() {
    const title = prompt("title");
    const link = prompt("url");
    addDrawerItem({ title, link });
  }
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
