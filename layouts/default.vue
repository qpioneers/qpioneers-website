<script setup lang="ts">

import AppHeader from "~/components/AppHeader.vue";
import AppModal from "~/components/modal/AppModal.vue";
</script>

<template>
  <AppHeader/>
  <main>
    <slot/>
  </main>
  <AppFooter/>
  <AppSidebar/>
  <AppModal/>
</template>

<style scoped>
</style>