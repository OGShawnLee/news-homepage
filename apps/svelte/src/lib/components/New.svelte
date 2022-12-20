<script lang="ts">
  export let title: string;
</script>

<article class="flex flex-col gap-1.5">
  <h3 class="text-lg text-white font-bold"> 
    <a class="hover:text-amber-300 focus:text-amber-300" href="/">
      {title} 
    </a>
  </h3>
  <p class="text-sm text-neutral-400 leading-relaxed"> <slot /> </p>
</article>
