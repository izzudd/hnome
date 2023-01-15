<script lang="ts">
  import Icon from "@iconify/svelte";

  export let link = '';
</script>

{#if !link}
  <Icon icon="material-symbols:question-mark-rounded" class="text-8xl" />
{/if}