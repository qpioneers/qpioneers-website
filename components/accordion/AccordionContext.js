import { ref, provide, inject } from 'vue';

export const ACCORDION_INJECTION_KEY = Symbol('accordion');

export function provideAccordion() {
    const activeId = ref(null);
    const activeImage = ref(null);

    const setActivePanel = (id, image) => {
        activeId.value = id;
        activeImage.value = image;
    };

    const context = {
        activeId,
        activeImage,
        setActivePanel
    };

    provide(ACCORDION_INJECTION_KEY, context);

    return context;
}

export function useAccordion() {
    const context = inject(ACCORDION_INJECTION_KEY);
    if (!context) {
        throw new Error('useAccordion must be used within an Accordion provider');
    }
    return context;
}