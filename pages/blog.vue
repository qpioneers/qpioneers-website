<script setup lang="ts">
import {useSeo} from "~/composables/useSeo";
import {IconoirProvider} from "@iconoir/vue";

useSeo('Case studies', 'Join QPioneers, the AI-powered platform that connects experts with high-quality leads. Let your expertise shine while we bring customers directly to you. No advertising needed!')

</script>

<template>
  <main class="px-3 2xl:px-0">
    <section class="max-w-screen-xl mx-auto py-16 lg:py-20">
      <div class=" flex flex-col items-center">
        <h1 class="text-3xl lg:text-5xl leading-snug font-bold lg:w-2/3 brand text-center">
          Insights, Trends, and Success Stories from the QPioneers Ecosystem
        </h1>
      </div>
    </section>
    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-10">
          <div class="lg:col-span-3 flex flex-col gap-6">
            <input class="px-4 py-4 rounded-lg bg-gray-100 w-full text-lg outline-none" type="text"
                   placeholder="Search">
            <div class="flex flex-col items-start font-medium gap-3">
              <button class="ps-4 border-l-[1.5px] border-pSecondary text-pSecondary">All</button>
              <button class="ps-4 border-l-[1.5px] border-transparent">Startups & Innovation</button>
              <button class="ps-4 border-l-[1.5px] border-transparent">Expert Tips for Vendors</button>
              <button class="ps-4 border-l-[1.5px] border-transparent">API and Integration Trends</button>
            </div>
          </div>
          <div class="lg:col-span-9 grid lg:grid-cols-2 gap-10">
            <div class="bg-gray-100 h-[400px] rounded-lg">

            </div>
            <div class="bg-gray-100 h-[400px] rounded-lg">

            </div>
            <div class="bg-gray-100 h-[400px] rounded-lg">

            </div>
            <div class="bg-gray-100 h-[400px] rounded-lg">

            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style scoped>

</style>