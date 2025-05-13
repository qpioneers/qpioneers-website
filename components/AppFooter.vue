<script setup lang="ts">
function openModal() {
  sharedState.isModalOpen = true
}
</script>

<template>
  <footer class="bg-qdark w-full mt-12 lg:mt-16 px-3 2xl:px-0">
    <div class="max-w-screen-xl mx-auto">
      <div class="w-full pt-16 pb-5 grid lg:grid-cols-2 gap-10 border-b border-white/30">
        <div class="flex flex-col">
          <a href="/">
            <img class="object-contain h-[36px]" src="/logo/p-2-white.png" alt="">
          </a>
          <div class="flex text-white gap-10 mt-10">
            <div class="flex flex-col gap-3">
              <span class="text-gray-300">Email</span>
              <a href="">info@qpioneers.com</a>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-gray-300">Address</span>
              <a href="">12435 King Abdulaziz, Riyadh Saudi Arabia</a>
            </div>
          </div>
        </div>
        <div class="flex lg:justify-end text-white">
          <div>
            <h3 class="text-xl lg:text-2xl font-medium w-auto">Join QPioneers marketplace today!</h3>
            <button @click="openModal"
                class="bg-pMain border border-pMain px-4 py-2 rounded-full text-white mt-10">
              Join now
            </button>
          </div>
        </div>
        <div class="flex justify-center gap-4 text-sm text-white/70 lg:col-span-2 -mt-1">
          <NuxtLink to="/privacy" class="hover:text-white transition duration-300">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition duration-300">Terms and Conditions</NuxtLink>
        </div>
      </div>
      <div class="py-10 flex flex-col lg:flex-grow gap-5 items-center text-white">
        <div>
          <p>Explore our other products</p>
        </div>
        <div class="flex-1 flex justify-center  items-center gap-5 flex-wrap">
          <router-link to=""
                       class="border border-white/30 px-4 py-3 rounded-full hover:bg-white hover:text-fourthly hover:border-white transition duration-300 flex items-center gap-2">
            <img class="h-[20px]" src="/logo/os.svg" alt="">
            QewamOS
          </router-link>
          <router-link to=""
                       class="border border-white/30 px-4 py-3 rounded-full hover:bg-white hover:text-fourthly hover:border-white transition duration-300 flex items-center gap-2">
            <img class="h-[20px]" src="/logo/Qspace%20logo%20icon.svg" alt="">
            Qspace
          </router-link>
          <router-link to=""
                       class="border border-white/30 px-4 py-3 rounded-full hover:bg-white hover:text-fourthly hover:border-white transition duration-300 flex items-center gap-2"
                       href="">
            <img class="h-[20px]" src="/logo/qHwhite.svg" alt="">
            qHub
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-fourthly h-[20px] w-full">

    </div>
  </footer>
</template>

<style scoped>

</style>