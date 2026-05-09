<script lang="ts">
  import "./layout.css";
  import { slide } from "svelte/transition";
  import { resolve } from "$app/paths";
  let { children } = $props();
  let showNav = $state(false);
</script>

<svelte:head><link rel="icon" href="/minisalt.png" /></svelte:head>

<div class="flex flex-row">
  <button
    class="border-2 border-amber-100 z-10"
    onclick={() => (showNav = !showNav)}>navbar toggle</button
  >

  {#if showNav}
    <!--inset-y-0 is shorthand for top-0 bottom-0 -->
    <nav
      transition:slide
      class="absolute top-0 bottom-0 left-0 w-64 bg-shiroko-5 duration-200 pt-20"
    >
      <div class="flex flex-col gap-5">
        <img class="object-contain w-16" src="/minisalt.png" alt="mini salt" />

        <a href={resolve("/")}>Home</a>
        <a href={resolve("/mai_token")}>mai_token</a>
      </div>
    </nav>
  {/if}
</div>
{@render children()}
