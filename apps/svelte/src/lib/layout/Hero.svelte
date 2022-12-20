<script lang="ts">
  import { imageWeb3Desktop, imageWeb3Mobile } from "@root/assets";

  export let title: string;
</script>

<section class="grid gap-9 | lg:col-span-8">
  <picture>
    <source media="(min-width: 686px)" srcset={imageWeb3Desktop} type="image/jpg">
    <img class="rounded-xl" src={imageWeb3Mobile} alt="" />
  </picture>
  <div class="grid gap-6 | xl:grid-cols-12 xl:gap-12">
    <h2 class="text-6xl font-extrabold text-black | xl:col-span-6">{title}</h2>
    <div class="flex flex-col justify-between gap-9 | xl:col-span-6 xl:gap-3">
      <p class="leading-relaxed">
        <slot />
      </p>
      <button class="button-primary | max-w-fit px-8 py-2">
        Read More
      </button>
    </div>
  </div>
</section>
