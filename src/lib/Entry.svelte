<script lang="ts">
  import IconGrabber from "./IconGrabber.svelte";

  export let text: string;
  export let to = '';
</script>

<div class="flex justify-center text-nord6 p-2 mb-6">
  <a href={to} class="p-4 hover:bg-nord4/10 rounded-xl text-center">
    <slot>
      <IconGrabber />
    </slot>
    <p>{text}</p>
  </a>
</div>
