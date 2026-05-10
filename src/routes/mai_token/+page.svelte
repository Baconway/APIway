<script lang="ts">
  import Seperator from "$lib/components/seperator.svelte";
  import Docs from "$lib/doc/mai_token.svx";
</script>

<img class="h-70" src="/bigdrkm.png" alt="big derakuma" />

<Seperator divider_color="bg-shiroko-2" />

<!--https://tjaddison.com/blog/2020/08/updating-to-tailwind-typography-to-style-markdown-posts/-->
<article
  class="prose
  prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-4 prose-h1:px-4 prose-h1:py-2 prose-h1:m-0 prose-h1:text-white
  prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:px-4 prose-h2:py-1.5 prose-h2:m-0 prose-h2:text-white
  prose-h3:text-xl prose-h3:font-medium prose-h3:mb-2 prose-h3:px-4 prose-h3:py-1 prose-h3:m-0 prose-h3:text-white
  prose-h4:text-lg prose-h4:font-normal prose-h4:mb-1 prose-h4:px-4 prose-h4:py-0.5 prose-h4:m-0 prose-h4:text-white
  prose-h5:text-base prose-h5:font-normal prose-h5:mb-1 prose-h5:px-4 prose-h5:py-0.5 prose-h5:m-0 prose-h5:text-white
  prose-h6:text-sm prose-h6:font-normal prose-h6:mb-1 prose-h6:px-4 prose-h6:py-0.5 prose-h6:m-0 prose-h6:text-white
  prose-p:leading-relaxed prose-p:mb-4 prose-p:m-0 prose-p:text-white
  prose-ul:mb-4 prose-ul:pl-8 prose-ol:mb-4 prose-ol:pl-8
  prose-li:mb-2 prose-li:text-white
  prose-strong:text-white
  prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-shiroko-5
  prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded prose-pre:overflow-x-auto
  prose-pre:prose-code:p-0 prose-pre:prose-code:bg-transparent
  prose-a:text-blue-600 prose-a:no-underline prose-a:hover:underline
"
>
  <Docs />
</article>
