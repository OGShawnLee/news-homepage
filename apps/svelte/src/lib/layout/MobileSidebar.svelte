<script lang="ts" context="module">
  import type { Action } from "svelte/action";

  const hideScrollbar: Action = () => {
    const body = document.body;
    const initialOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    return {
      destroy: () => {
        body.style.overflow = initialOverflow;
      },
    };
  };
</script>

<script lang="ts">
  import { iconMenu, iconMenuClose } from "@root/assets";
  import { tick } from "svelte";

  const TABLET_BREAKPOINT = 768

  let isOpen = false;
  let buttonRef: HTMLButtonElement;
  let buttonCloseRef: HTMLButtonElement;
  let buttonName = "popover-button";
  let panelName = "popover-panel";
  let viewWidth = 0

  $: if (viewWidth >= TABLET_BREAKPOINT) isOpen = false;

  function handleClose(event?: KeyboardEvent | MouseEvent) {
    if (event instanceof KeyboardEvent) {
      if (event.code === "Escape") handleClose()
    } else {
      isOpen = false;
      buttonRef.focus();
    }
  }

  async function handleOpen() {
    isOpen = !isOpen;
    await tick();
    buttonCloseRef.focus();
  }
</script>

<svelte:window bind:innerWidth={viewWidth} on:keydown={handleClose}/>

<button
  class="md:hidden"
  aria-controls={panelName}
  aria-expanded={isOpen}
  aria-label="Open Sidebar"
  id={buttonName}
  bind:this={buttonRef}
  on:click={handleOpen}
>
  <img src={iconMenu} alt="" />
</button>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="fixed inset-0 z-10 | bg-black/80 | md:hidden" on:click={handleClose} />
  <div
    class="fixed inset-y-0 right-0 z-20 w-275px px-8 py-8 | flex flex-col | bg-white | md:hidden"
    aria-labelledby={buttonName}
    id={panelName}
    use:hideScrollbar
  >
    <button
      class="h-16 mb-12 self-end"
      aria-label="Close Sidebar"
      bind:this={buttonCloseRef}
      on:click|stopPropagation={handleClose}
    >
      <img src={iconMenuClose} alt="" />
    </button>
    <slot />
  </div>
{/if}
