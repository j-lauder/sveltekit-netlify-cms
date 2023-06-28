<script>
  import { onMount } from "svelte";
  import { context, getContext } from "svelte";

  let game;

  onMount(async () => {
    const { page } = await getContext("page");
    game = page.file;
  });
</script>

<main>
  <h1>{game.title}</h1>
  <img src="{game.image_url}" alt="{game.title}" />
  <div>{@html game.description}</div>
</main>
