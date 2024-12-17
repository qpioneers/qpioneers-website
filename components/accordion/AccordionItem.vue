<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { useAccordion } from './AccordionContext';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  buttonClass: {
    type: String,
    default: ''
  },
  panelClass: {
    type: String,
    default: ''
  },
  isFirst: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    required: true
  }
});

const { activeId, setActivePanel } = useAccordion();
const contentRef = ref(null);
const contentHeight = ref(0);

const isExpanded = computed(() => activeId.value === props.id);

const toggleExpanded = () => {
  if (isExpanded.value) {
    setActivePanel(null, null);
  } else {
    setActivePanel(props.id, props.image);
    nextTick(() => {
      contentHeight.value = contentRef.value.scrollHeight;
    });
  }
};

onMounted(() => {
  if (props.isFirst) {
    setActivePanel(props.id, props.image);
  }
  nextTick(() => {
    contentHeight.value = contentRef.value.scrollHeight;
  });
});
</script>

<template>
  <div>
    <div
        :id="'faqs-title-' + id"
        :class="buttonClass"
        @click="toggleExpanded"
        :aria-expanded="isExpanded"
        :aria-controls="'faqs-text-' + id"
    >
      <slot name="button" :expanded="isExpanded"></slot>
    </div>
    <div
        :id="'faqs-text-' + id"
        role="region"
        :aria-labelledby="'faqs-title-' + id"
        :class="['overflow-hidden transition-all duration-300 ease-in-out', panelClass]"
        :style="{ maxHeight: isExpanded ? contentHeight + 'px' : '0px' }"
    >
      <div ref="contentRef">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>