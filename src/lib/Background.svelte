<script lang="ts">
  function getCurrentTime(){
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`
  }

  let currentTime = getCurrentTime();

  let currentDate = new Date().toLocaleDateString('en', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });


  setInterval(() => currentTime = getCurrentTime(), 1000);
</script>

<div class="outer fixed top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat -z-10 text-nord6">
  <div class="absolute bottom-10 right-10 font-mono">
    <p>{currentDate}</p>
    <p class="text-9xl">{currentTime}</p>
  </div>
</div>

<style lang="postcss">
  .outer {
    background-image: url(https://raw.githubusercontent.com/dxnst/nord-backgrounds/main/avogadr.io/1920x1080/serotonin.png);
  }
</style>