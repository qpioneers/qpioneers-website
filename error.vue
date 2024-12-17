<script lang="ts" setup>
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({redirect: '/'})
</script>

<template>
  <NuxtLayout>
    <section class="bg-white px-3 2xl:px-0 py-32">
      <div
          class="max-w-screen-2xl rounded-xl mx-auto flex-col flex justify-center min-h-[60vh] py-32 bg-white items-center gap-6">
        <span class="text-2xl">{{ error.statusCode }}</span>
        <h1 class="text-3xl sm:text-4xl text-center">{{ error.statusMessage }}</h1>
        <button @click="handleError" class="px-4 py-2 border border-black rounded-full">Clear errors</button>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>

</style>