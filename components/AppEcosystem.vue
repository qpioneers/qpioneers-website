<script setup lang="ts">
function openModal() {
  sharedState.isModalOpen = true
}
</script>

<template>
  <section class="py-12 lg:py-16">
    <div class="max-w-screen-xl mx-auto bg-qdark rounded-lg py-20 lg:py-28 px-5">
      <div class="flex items-center flex-col">
        <h1 class="text-3xl lg:text-5xl font-bold brand text-center text-white text-balance leading-snug lg:w-1/2">Integration with
          <br> the Qewam ecosystem</h1>
        <div class="flex mt-10 justify-center gap-2 lg:gap-8">
          <div class="bg-white/5 h-14 rounded-lg flex justify-center items-center p-4">
            <img src="/logo/qewam-white-green.svg" class="object-contain h-full" alt="">
          </div>
          <div class="bg-white/5 h-14 rounded-lg flex justify-center items-center p-4">
            <img src="/logo/Qspace logo.svg" class="object-contain h-full" alt="">
          </div>
          <div class="bg-white/5 h-14 rounded-lg flex justify-center items-center p-4">
            <img src="/logo/qHub.svg" class="object-contain h-full" alt="">
          </div>
        </div>
        <p class="mt-14 text-center text-balance text-gray-400 text-lg lg:w-4/5">
          Join QPioneers and empower your platform with an ecosystem that connects users to the expertise they need.
          Let’s innovate together!
        </p>

        <button @click="openModal"
            class="bg-pMain border border-pMain text-lg px-10 py-2 rounded-full text-white mt-10">
          Get started
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>