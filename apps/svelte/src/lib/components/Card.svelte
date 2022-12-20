<script lang="ts">
  export let alt: string;
  export let title: string;
  export let src: string;
  export let index: string;
</script>

<li class="col-span-4">
  <article class="flex gap-4.5 | md:(grid grid-cols-12)">
    <img class="h-40 | rounded-xl | md:col-span-4" {src} {alt} />
    <div class="flex flex-col gap-3 | md:col-span-8">
      <h3 class="flex flex-col justify-between gap-1.5">
        <span
          class="text-xl text-neutral-300 font-black tracking-widest | md:text-2xl"
        >
          {index}
        </span>
        <a class="text-black text-lg font-bold md:text-lg" href="/">
          <span class="hover:text-red-500 focus:text-red-500"> {title} </span>
        </a>
      </h3>
      <p class="text-sm | md:text-base">
        <slot />
      </p>
    </div>
  </article>
</li>
