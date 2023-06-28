<script>
	import { getRoutes } from "../metadata";
	import './styles.css';
	const routes = getRoutes();

	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="bg-gray-900">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <!-- Mobile Menu Button -->
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        {#each routes as route}
          <a href={route.path} class="text-sm font-semibold leading-6 text-white">{route.title}</a>
        {/each}
      </div>
      <!-- Log in Button -->
    </nav>
    <!-- Mobile Menu -->
  </header>

 <div class="relative isolate pt-14 mx-auto max-w-[670px] px-4 sm:px-6 lg:px-8 text-white">
    <!-- Page Content -->
    <slot />
</div>

</div>
