<script lang="ts">
  import { enabled } from "../store/Action";
  import Drawer from "./Drawer.svelte";
  import Search from "./Search.svelte";
</script>

<div class="bg-nord0/40 backdrop-blur min-h-screen w-full pb-16 pt-24" class:invisible={$enabled}>
  <main class="container mx-auto px-4">
    <Search />
    <Drawer />
  </main>
</div>
