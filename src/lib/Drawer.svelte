<script lang="ts">
  import type { DrawerItem } from "../types/DrawerItem";
  import Entry from "./Entry.svelte";
    import Folder from "./Folder.svelte";

  export let items: DrawerItem[];
</script>

<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
  {#each items as item, idx (item.title + idx)}
    {#if item.items}
      <Folder items={item.items} title={item.title} />
    {:else}
      <Entry title={item.title} to={item.link} />
    {/if}
  {/each}
</div>