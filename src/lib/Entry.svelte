<script lang="ts">
  import Icon from "@iconify/svelte";

  export let title: string;
  export let to = "";
  export let inFolder = 0;

  const iconUrl = `https://cdn.simpleicons.org/${title.toLowerCase()}/f5e9f0`;
  let iconValid = true;
</script>

<div class="entry {inFolder ? 'bg-nord4/10' : ''} {inFolder === -1 ? 'rounded-r-xl' : ''}">
  <a href={to}>
    <slot>
      {#if to && iconValid}
        <img src={iconUrl} alt={title} on:error={() => iconValid = false} class="w-24" />
      {:else}
        <!-- <Icon icon="material-symbols:question-mark-rounded" class="text-8xl" /> -->
        <span class="text-8xl font-mono">{title.toUpperCase()[0]}</span>
      {/if}
    </slot>
    <p>{title}</p>
  </a>
</div>
