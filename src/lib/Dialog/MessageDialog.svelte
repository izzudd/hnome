<script lang="ts">
  import { enabled, message } from "../../store/Message";
</script>

{#if $enabled}
<div class="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50 bg-nord0/40 text-nord6 backdrop-blur-sm">
  <div class="bg-nord1 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl">
    <div class="p-6 text-center">
      <h2 class="text-2xl font-bold mb-3">{$message.title}</h2>
      <p>{$message.message}</p>
    </div>
    <div class="flex">
      <button class="border-t" on:click={$message.onCancel}>{$message.cancel}</button>
      <button class="border-t border-l text-nord11" on:click={$message.onConfirm}>{$message.confirm}</button>
    </div>
  </div>
</div>
{/if}

<style lang="postcss">
  button {
    @apply py-3 font-semibold flex-1 border-nord3 hover:bg-nord2;
  }
</style>