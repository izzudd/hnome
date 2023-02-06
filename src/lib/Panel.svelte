<script lang="ts">
  import Icon from "@iconify/svelte";

  function getCurrentTime(){
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`
  }

  let currentTime = getCurrentTime();

  setInterval(() => currentTime = getCurrentTime(), 1000);
</script>

<header class="fixed top-0 left-0 w-screen bg-black z-50 text-white flex items-center justify-between py-1 px-4 font-bold">
  <button class="hover:bg-white/20 rounded-full px-3 py-0.5">Activities</button>
  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono">{currentTime}</span>
  <button>
    <Icon icon="material-symbols:arrow-drop-down" class="text-2xl" />
  </button>
</header>