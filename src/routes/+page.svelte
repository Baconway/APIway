<script lang="ts">
  import Seperator from "$lib/components/seperator.svelte";
  import Docs from "$lib/doc/home.svx";
</script>

<img class="h-65 object-contain" src="/bigsalt.png" alt="big salt" />

<Seperator divider_color="bg-shiroko-2" />

<title>Home</title>

<article
  class="prose
  prose-h1:text-white prose-h1:border-b-2 prose-h1:border-b-shiroko-3 prose-h1:p-3 prose-h1:my-5
  prose-h2:text-white prose-h2:border-b-2 prose-h2:border-b-shiroko-3 prose-h2:p-3 prose-h2:my-5
  prose-h3:text-white prose-h3:mt-6 prose-h3:mb-4
  prose-h4:text-white prose-h4:mt-6 prose-h4:mb-4
  prose-h5:text-white prose-h5:mt-6 prose-h5:mb-4 prose-h5:text-sm
  prose-h6:text-white prose-h6:mt-6 prose-h6:mb-4
  prose-p:text-white prose-p:mx-4 prose-p:mt-0
  prose-li:text-white
  prose-strong:text-white
  prose-code:text-salt-3
  prose-li:mb-0 prose-li:mt-1
  prose-ul:m-0 prose-ul:pl-8
"
>
  <Docs />
</article>
