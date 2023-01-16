<script lang="ts">
  import type { DrawerItem } from "../types/DrawerItem";
  import Drawer from "./Drawer.svelte";
  import Search from "./Search.svelte";

  const items: DrawerItem[] = [
    {title: 'Youtube', link: 'https://www.youtube.com'},
    {title: 'Twitter', link: 'https://twitter.com'},
    {title: 'Whatsapp', link: 'https://web.whatsapp.com'},
    {title: 'Instagram', link: 'https//instagram.com'},
    {title: 'Folder', items: [
      {title: 'Youtube', link: 'https://www.youtube.com'},
      {title: 'Twitter', link: 'https://twitter.com'},
      {title: 'Whatsapp', link: 'https://web.whatsapp.com'},
    ]},
    {title: 'Spotify', link: 'https//spotify.com'},
    {title: 'Linkedin', link: 'https//linkedin.com'},
    {title: 'Microsoft', link: 'https//microsoft.com'},
    {title: 'Invasikode', link: 'https//google.com'},
  ]
</script>

<main class="container mx-auto px-4">
  <Search />
  <Drawer {items} />
</main>
