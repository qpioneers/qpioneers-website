<template>
  <div class="accordion-container">
    <slot></slot>
  </div>
</template>

<script setup>
import { provideAccordion } from './AccordionContext';

const { activeImage } = provideAccordion();

defineExpose({ activeImage });
</script>