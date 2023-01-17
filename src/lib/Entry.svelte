<script lang="ts">
  import Icon from "@iconify/svelte";
  import { showActionDialog } from "../store/Action";
  import {
    editDrawerItem,
    removeDrawerItem,
    type DrawerItem,
  } from "../store/DrawerItem";
  import { showMessageDialog } from "../store/Message";
  import InsertEntry from "./Dialog/InsertEntry.svelte";

  export let item: DrawerItem;
  export let inFolder = 0;

  const iconUrl = `https://cdn.simpleicons.org/${item.title.toLowerCase()}/f5e9f0`;
  let iconValid = true;

  const editEntry = () =>
    showActionDialog({
      title: "Edit Entry",
      body: InsertEntry,
      data: item,
      onConfirm: (data) => editDrawerItem(data),
    });

  const deleteEntry = () =>
    showMessageDialog({
      title: "Delete Entry",
      message: `Entry "${item.title}" linked to "${item.link}". Are you sure want to delete it?`,
      onConfirm: () => removeDrawerItem(item.id),
    });
</script>

<div
  class="entry {inFolder ? 'bg-nord4/10' : ''} {inFolder === -1
    ? 'rounded-r-xl'
    : ''}"
>
  <div class="wrapper relative">
    <a class="inner" href={item.link}>
      {#if iconValid}
        <img
          src={iconUrl}
          alt={item.title}
          on:error={() => (iconValid = false)}
          class="w-24"
        />
      {:else}
        <span class="text-8xl font-mono">{item.title.toUpperCase()[0]}</span>
      {/if}
      <p>{item.title}</p>
    </a>

    <div
      class="absolute bottom-0 left-[calc(100%+.25rem)] action flex flex-col gap-2"
    >
      <button on:click={editEntry}>
        <Icon icon="material-symbols:edit" class="text-2xl" />
      </button>
      <button on:click={deleteEntry}>
        <Icon icon="material-symbols:delete" class="text-2xl" />
      </button>
    </div>
  </div>
</div>

<style lang="postcss">
  button {
    @apply hover:bg-nord6/20 rounded-lg p-1 invisible;
  }

  .wrapper:hover button {
    @apply visible;
  }
</style>
