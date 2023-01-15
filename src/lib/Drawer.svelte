<script>
    import Entry from "./Entry.svelte";
    import Icon from "@iconify/svelte";
</script>
<div class="grid grid-cols-6">
  {#each Array(10) as _, index (index)}
    <Entry text="Entry {index}" />
  {/each}
  <Entry text="Add">
    <Icon icon="material-symbols:add-circle-rounded" class="text-8xl"/>
  </Entry>
</div>