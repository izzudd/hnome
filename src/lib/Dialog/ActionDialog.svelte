<script lang="ts">
  import { enabled, dialog } from "../../store/Action";

  let getData: () => any;
</script>

{#if $enabled && $dialog}
  <div
    class="fixed h-screen w-screen top-0 left-0 flex items-center justify-center"
  >
    <div class="w-full max-w-lg rounded-xl bg-nord0 text-nord6 overflow-hidden shadow-xl">
      <div class="p-2 flex items-center font-bold bg-nord1">
        <button
          on:click={() => $dialog.onCancel(getData())}
          class="bg-nord2 hover:bg-nord3">{$dialog.cancel}</button
        >
        <span class="block flex-grow text-center">{$dialog.title}</span>
        <button
          on:click={() => $dialog.onConfirm(getData())}
          class="bg-nord10 hover:bg-nord9">{$dialog.confirm}</button
        >
      </div>
      <div class="p-4">
        <svelte:component this={$dialog.body} bind:pushData={getData} data={$dialog.data} />
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  button {
    @apply rounded-lg px-4 py-1;
  }
</style>
