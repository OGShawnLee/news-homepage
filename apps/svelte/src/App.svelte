<script>
  import { Header, Hero } from "@lib/layout";
  import { Card, New, Separator } from "@lib/components";
  import { imageGamingGrowth, imageRetroPCs, imageTopLaptops } from "@root/assets";
</script>

<Header />

<h1 class="sr-only"> Home </h1>

<main class="breakpoints grid gap-16 mt-6">
  <div class="grid gap-9 | lg:grid-cols-12">
    <Hero title="The Bright Future of Web 3.0?">
      We dive into the next evolution of the web that claims to put the power of
      the platforms back into the hands of the people. But is it really
      fulfilling its promise?
    </Hero>
    <section
      class="p-8 | flex flex-col gap-6 lg:col-span-4 | bg-zinc-900 rounded-xl"
    >
      <h2 class="text-3xl text-amber-300 font-bold">New</h2>
      <ul class="h-full | grid gap-6 | lg:gap-0">
        <New title="Hydrogen VS Electric Cars">
          Will hydrogen-fueled cars ever catch up to EVs?
        </New>
        <Separator/>
        <New title="The Downsides of AI Artistry">
          What are the possible adverse effects of on-demand AI image
          generation?
        </New>
        <Separator/>
        <New title="is VC Funding Drying Up?">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </New>
      </ul>
    </section>
  </div>
  <section>
    <h2 class="sr-only">Secondary News</h2>
    <ul class="grid gap-9 | xl:grid-cols-12">
      <Card
        title="Reviving Retro PCs"
        src={imageRetroPCs}
        alt="Old Computers"
        index="01"
      >
        What happens when old PCs are given modern upgrades?
      </Card>
      <Card
        title="Top 10 Laptops of 2022"
        src={imageTopLaptops}
        alt="Laptop Keyboard"
        index="02"
      >
        Our best picks for various needs and budgets.
      </Card>
      <Card
        title="The Growth of Gaming"
        src={imageGamingGrowth}
        alt="PS4 Controller falling about to drop on a man's hand"
        index="03"
      >
        How the pandemic has sparked fresh opportunities.
      </Card>
    </ul>
  </section>
</main>
