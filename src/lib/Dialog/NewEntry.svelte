<script lang="ts">
  import type { DrawerItem } from "../../store/DrawerItem";

  let title = '';
  let link = '';
  let thumb = '';

  let linkEdited = false;
  function matchLinkWithTitle() {
    if (!link) linkEdited = false;
    if (linkEdited) return;
    link = title ? `https://${title.toLowerCase()}.com` : ''
  }
  $: title, matchLinkWithTitle();

  export const pushData = (): DrawerItem => ({title, link, thumb});
</script>

<div>
  <div class="input">
    <span>Title</span>
    <input type="text" placeholder="Title" bind:value={title}>
  </div>
  <div class="input">
    <span>Link</span>
    <input type="text" placeholder="Title" bind:value={link} on:input={() => linkEdited = true}>
  </div>
</div>

<style lang="postcss">
  .input {
    @apply flex items-center py-2;

    & span {
      @apply w-24 flex-shrink-0;
    }

    & input {
      @apply bg-nord1 focus:outline-nord10 rounded-md py-1 px-2 flex-grow;
    }
  }
</style>
