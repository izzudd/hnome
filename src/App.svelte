<script>
  import { onDestroy, onMount } from "svelte";
  import Main from "./lib/Main.svelte";
  import MessageDialog from "./lib/Dialog/MessageDialog.svelte";
  import { initItemStore, saveItemStore } from "./store/DrawerItem";
  import ActionDialog from "./lib/Dialog/ActionDialog.svelte";
  import Panel from "./lib/Panel.svelte";
  import Background from "./lib/Background.svelte";

  onMount(initItemStore);
  onDestroy(saveItemStore);
</script>

<Panel />
<Background />
<Main />
<MessageDialog />
<ActionDialog />