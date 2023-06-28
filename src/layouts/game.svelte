<script>
  import { getGames } from "../metadata";
  import './styles.css';
  const games = getGames();

  export let title;
  export let description;
  export let image;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="bg-gray-900">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">GameZerg</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <!-- Mobile Menu Button -->
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        {#each games as game}
          <a href={game.path} class="text-sm font-semibold leading-6 text-white">{game.title}</a>
        {/each}
      </div>
      <!-- Log in Button -->
    </nav>
    <!-- Mobile Menu -->
  </header>

  <div class="relative isolate pt-14 mx-auto max-w-[670px] px-4 sm:px-6 lg:px-8 text-white">
    <h1>{title}</h1>
    <p>{description}</p>
    {#if image}
      <img src={image} alt={title}>
    {/if}
    <!-- Page Content -->
    <slot />
  </div>

</div>
