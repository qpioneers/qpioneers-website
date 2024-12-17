<script setup lang="ts">

import {Check, IconoirProvider, Mail} from "@iconoir/vue";

function openModal() {
  sharedState.isModalOpen = true
}
</script>

<template>
  <section class="py-16">
    <div
        class="max-w-screen-xl mx-auto p-10 lg:p-20 bg-pMain rounded-lg z-10  overflow-hidden relative  after:size-full after:absolute after:-z-10 after:top-0 after:left-0 after:bg-no-repeat after:opacity-10">

      <div class="grid lg:grid-cols-2 gap-5">
        <div class="flex flex-col items-start">
          <h1 class="text-4xl lg:text-6xl text-white lg:w-2/3 font-bold brand leading-snug">
            Ready to Scale?
          </h1>

          <div class="flex flex-col items-start gap-5 mt-10">
            <IconoirProvider
                :icon-props="{
                  'color': 'current',
                  'stroke-width': 1.5,
                  'width': '1.1em',
                  'height': '1.1em',
                }">
        <span class="flex gap-1.5 text-lg text-white items-center"><Check/>
          Reach startups, incubators, and accelerators.
        </span>
              <span class="flex gap-1.5 text-lg text-white items-center"><Check/>
          Get AI-powered matches tailored to your business.
        </span>
              <span class="flex gap-1.5 text-lg text-white items-center"><Check/>
            Form lasting partnerships and grow your brand.
        </span>
            </IconoirProvider>
          </div>
          <button @click="openModal" class="mt-10 text-lg bg-pSecondary border border-pMain px-4 py-2 rounded-full text-white">
            Get started today
          </button>
        </div>
        <div class="hidden lg:flex items-center justify-center">
          <img class="w-full object-contain h-[350px]" src="/logo/white-icon-allpioneers.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>