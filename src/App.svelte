<script>
  import { onDestroy, onMount } from "svelte";
  import Main from "./lib/Main.svelte";
  import { initItemStore, saveItemStore } from "./store/DrawerItem";

  onMount(initItemStore);
  onDestroy(saveItemStore);
</script>

<div class="outer fixed top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat -z-10"></div>
<div class="bg-nord0/40 backdrop-blur min-h-screen w-full py-16">
  <Main />
</div>

<style lang="postcss">
  .outer {
    background-image: url(https://raw.githubusercontent.com/dxnst/nord-backgrounds/main/avogadr.io/1920x1080/dopamine.png);
  }
</style>