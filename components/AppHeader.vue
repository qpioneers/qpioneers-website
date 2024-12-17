<script setup lang="ts">
import {IconoirProvider, MenuScale} from "@iconoir/vue";

interface NavLink {
  url_name: string;
  name: string;
}

const navLinks = ref<NavLink[]>([
  {url_name: "index", name: "Home"},
  {url_name: "partners", name: "Partners"},
  {url_name: "blog", name: "Blog"},
]);

const toggleOpen = () => {
  sharedState.isAppOpen = true;
};


function openModal() {
  sharedState.isModalOpen = true
}
</script>

<template>
  <header class="w-full sticky top-0 bg-white z-[100] px-3 2xl:px-0">
    <div class="max-w-screen-xl mx-auto flex justify-center h-[65px] lg:h-[80px] items-center">
      <div class="flex-1 flex items-center gap-10">
        <a href="/">
          <img
              class="w-[140px] object-contain"
              src="/logo/allPioneers.svg"
              alt="All Pioneers Logo"
          >
        </a>

        <div class="hidden lg:flex gap-8">
          <NuxtLink
              v-for="link in navLinks"
              :key="link.url_name"
              :to="{name: link.url_name}"
              class="hover:text-pSecondary duration-300"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
      <div class="hidden lg:flex justify-end">
        <button @click="openModal" class="px-4 py-2 border border-black rounded-full">
          Get Matched
        </button>
      </div>

      <div class="flex lg:hidden justify-end">
        <button @click="toggleOpen">
          <IconoirProvider
              :icon-props="{
                    'color': 'current',
                    'stroke-width': 1.8,
                    'width': '1.5em',
                    'height': '1.5em',
                  }"
          >
            <MenuScale/>
          </IconoirProvider>
        </button>
      </div>
    </div>
  </header>
</template>