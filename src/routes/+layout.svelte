<script lang="ts">
	import "./layout.css";
	import MenuIcon from "@iconify-svelte/material-symbols/menu";
	import { resolve } from "$app/paths";

	let { children } = $props();
	let showNav = $state(false);
</script>

<svelte:head><link rel="icon" href="/minisalt.png" /></svelte:head>

<nav
	class="fixed inset-y-0 left-0 z-10 w-64 pl-5 pr-5 transform bg-shiroko-5 transition-transform duration-300 ease-in-out"
	class:translate-x-0={!showNav}
	class:-translate-x-48={showNav}
>
	<button
		class="fixed top-0 right-0 z-10 p-2"
		onclick={() => showNav = !showNav}
	><MenuIcon class="w-12 h-12" /></button>

	<div class="pt-20 flex flex-col gap-3">
		<div
			class="flex flex-col justify-center items-center gap-3 transition-opacity duration-200 {showNav ? 'opacity-0' : 'opacity-100'}"
		>
			<img
				class="object-contain w-32"
				src="/minisalt.png"
				alt="mini salt"
			/>

			<img class="" src="/logo.png" alt="project logo" />
		</div>

		<div
			class="flex flex-col gap-5 align-middle transition-opacity duration-200 {showNav ? 'opacity-0' : 'opacity-100'}"
		>
			<a
				class="border-2 border-shiroko-3 flex justify-center items-center p-3 font-bold"
				href={resolve("/")}
			>Home</a>

			<a
				class="border-2 border-shiroko-3 flex justify-center items-center p-3 font-bold"
				href={resolve("/mai_token")}
			>mai_token</a>
		</div>
	</div>
</nav>

<div
	class="duration-300 transition-[margin] {showNav ? 'ml-20' : 'ml-70'}"
>
	<!--you can rewrite this as: class:ml-64={showNav}-->
	{@render children()}
</div>
