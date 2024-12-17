<script setup lang="ts">
import {IconoirProvider, User, Suitcase, Xmark} from "@iconoir/vue";

function closeModal() {
  sharedState.isModalOpen = false
}

</script>

<template>
  <ClientOnly>
    <TransitionRoot appear :show="sharedState.isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-[100]">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25"/>
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
              class="flex min-h-full items-center justify-center p-3 text-center"
          >
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                  class="w-full max-w-screen-md transform overflow-hidden rounded-lg bg-white pt-8 pb-10 px-6 text-left align-middle shadow-xl transition-all"
              >
                <div class="flex justify-end w-full">
                  <button @click="closeModal" class="outline-none">
                    <IconoirProvider
                        :icon-props="{
                  'color': 'current',
                  'stroke-width': 1.5,
                  'width': '1.5em',
                  'height': '1.5em',
                }">
                    <Xmark/>
                    </IconoirProvider>
                  </button>
                </div>
                <DialogTitle
                    as="h3"
                    class="text-lg text-gray-900 brand text-center font-medium mt-2"
                >
                  Please select one of these options to continue
                </DialogTitle>
                <IconoirProvider
                    :icon-props="{
                  'color': 'current',
                  'stroke-width': 1.5,
                  'width': '2em',
                  'height': '2em',
                }">
                  <div class="grid lg:grid-cols-2 gap-6 mt-6">

                    <div>
                      <NuxtLink to="https://qpioneer.qewam.com/expert-signup"
                                class="border border-black rounded-lg flex flex-col gap-3 items-center p-6 hover:bg-blue-50 duration-300 h-full">
                        <User/>
                        <h3 class="text-lg font-medium brand">I am an Expert</h3>
                        <p class="text-sm text-muted text-center">Choose this option if you're a professional looking to
                          showcase your skills and connect with clients seeking your expertise.</p>
                      </NuxtLink>
                    </div>

                    <div>
                      <NuxtLink to="https://providers.qpioneers.com/admin/"
                                class="border border-black rounded-lg flex flex-col gap-3 items-center p-6 hover:bg-blue-50 duration-300 h-full">
                        <Suitcase/>
                        <h3 class="text-lg font-medium brand">I am a Service Provider</h3>
                        <p class="text-sm text-muted text-center">Select this option if you represent a business or
                          organization offering services to a wide range of users.</p>
                      </NuxtLink>
                    </div>

                    <div class="lg:col-span-2 bg-gray-50 p-6 rounded-lg flex flex-col lg:flex-row  items-center justify-between gap-3">
                      <h3 class="text-lg font-medium brand text-center lg:text-start">If you want to become an API Partner</h3>
                      <NuxtLink to="https://cal.com/hicham-qpioneers/30min"
                                class="bg-pMain border border-pMain px-4 py-2 rounded-full text-white">
                        Schedule a call
                      </NuxtLink>
                    </div>
                  </div>
                </IconoirProvider>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>

<style scoped>

</style>