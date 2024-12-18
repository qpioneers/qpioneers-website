<script lang="ts" setup>

import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
import {IconoirProvider, Xmark, NavArrowDown, ArrowRight} from "@iconoir/vue";

function closeSidebar() {
  sharedState.isAppOpen = false;
}

interface NavLink {
  url_name: string;
  name: string;
}

const navLinks = ref<NavLink[]>([
  {url_name: "index", name: "Home"},
  {url_name: "partners", name: "Partners"},
  // {url_name: "blog", name: "Blog"},
]);

const router = useRouter()

router.afterEach(() => {
  sharedState.isAppOpen = false;
});

function openModal() {
  sharedState.isModalOpen = true
  sharedState.isAppOpen = false;
}

</script>

<template>
  <TransitionRoot class="lg:hidden" as="template" :show="sharedState.isAppOpen">
    <Dialog class="fixed z-[201] h-full top-0 end-0" @close="closeSidebar">
      <TransitionChild as="template"
                       class="opacity-0"
                       enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/30 transition-opacity"/>
      </TransitionChild>
      <TransitionChild as="template"
                       class="translate-x-full"
                       enter="transform transition ease-in-out duration-300"
                       enter-from="translate-x-full"
                       enter-to="translate-x-0"
                       leave="transform transition ease-in-out duration-300"
                       leave-from="translate-x-0"
                       leave-to="translate-x-full">
        <DialogPanel class="pointer-events-auto relative h-full w-[350px] bg-white px-4 overflow-y-auto">
          <div class="flex justify-end py-4">
            <button type="button" @click="closeSidebar" class="text-muted outline-none">
              <IconoirProvider
                  :icon-props="{
                    'color': 'current',
                    'stroke-width': 1.5,
                    'width': '1.8em',
                    'height': '1.8em',
                  }">
                <Xmark/>
              </IconoirProvider>
            </button>
          </div>
          <div class="flex items-start flex-col gap-3">
            <NuxtLink v-for="link in navLinks" class="border-b text-lg font-medium py-2.5 w-full"
                      :to="{name: link.url_name}">{{ link.name }}
            </NuxtLink>

            <button @click="openModal" class="px-4 py-2 border border-black rounded-full mt-3 w-full">
              Get Matched
            </button>
            <div class="flex justify-center mt-10 w-full pb-20">
              <a href="/">
                  <img class="object-contain h-[45px]" src="/logo/p-2.png" alt="">
              </a>
            </div>

          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>

</style>