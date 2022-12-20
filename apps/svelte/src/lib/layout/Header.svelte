<script>
  import MobileSidebar from '@lib/layout/MobileSidebar.svelte'
  import { LinkItem } from "@lib/components";
  import { logo, iconMenu, iconMenuClose } from "@root/assets";
</script>

<header class="breakpoints h-16 | flex items-center justify-between">
  <img src={logo} alt="" />
  <nav>
    <ul class="hidden | items-center gap-9 | md:flex">
      <LinkItem text="Home" />
      <LinkItem text="New" />
      <LinkItem text="Popular" />
      <LinkItem text="Trending" />
      <LinkItem text="Categories" />
    </ul>
    <MobileSidebar>
      <ul class="grid gap-4.5">
        <LinkItem text="Home" />
        <LinkItem text="New" />
        <LinkItem text="Popular" />
        <LinkItem text="Trending" />
        <LinkItem text="Categories" />
      </ul>
    </MobileSidebar>
  </nav>
</header>
