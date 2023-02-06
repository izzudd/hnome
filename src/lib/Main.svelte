<script lang="ts">
  import { drawerShown } from "../store/Drawer";
  import Drawer from "./Drawer.svelte";
  import Search from "./Search.svelte";
</script>

<div class="bg-nord0/40 backdrop-blur min-h-screen w-full pb-16 pt-24" class:invisible={!$drawerShown}>
  <main class="container mx-auto px-4">
    <Search />
    <Drawer />
  </main>
</div>
