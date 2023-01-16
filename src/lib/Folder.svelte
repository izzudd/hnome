<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { DrawerItem } from "../types/DrawerItem";
  import Entry from "./Entry.svelte";

  export let title: string;
  export let items: DrawerItem[];

  let open = false;
</script>

<div class="entry rounded-l-xl {open ? 'bg-nord4/10' : ''}">
  <button on:click={() => open = !open}>
    <Icon icon="material-symbols:folder" class="text-8xl" />
    <p>{title}</p>
  </button>
</div>

{#if open}
  {#each items as item, idx (item.title + idx)}
    <Entry title={item.title} to={item.link} inFolder={idx < items.length - 1 ? 1 : -1} />
  {/each}
{/if}