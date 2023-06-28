<script>
  import { onMount } from "svelte";
  import { context, getContext } from "svelte";

  let category;

  onMount(async () => {
    const { page } = await getContext("page");
    category = page.file;
  });
</script>

<main>
  <h1>{category.title}</h1>
  <div>{@html category.description}</div>
</main>
