import { reactive } from 'vue';

export const sharedState = reactive({
    isAppOpen: false,
    isModalOpen: false,
});
