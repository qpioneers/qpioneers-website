<script setup lang="ts">
import {useSeo} from "~/composables/useSeo";
import {
  CircleSpark,
  IconoirProvider,
  Number1Square,
  Number2Square,
  Number3Square,
  Number4Square,
  Network,
  Reports, GraphUp, ArrowRight, ArrowLeft, Rocket, Community, ThumbsUp
} from "@iconoir/vue";
import {Swiper, SwiperSlide} from 'swiper/vue'
// @ts-ignore
import type {Swiper as SwiperType} from 'swiper'
// @ts-ignore
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import AppEcosystem from "~/components/AppEcosystem.vue";

useSeo('Partners', 'Join QPioneers, the AI-powered platform that connects experts with high-quality leads. Let your expertise shine while we bring customers directly to you. No advertising needed!')

const modules = ref([
  Autoplay
])

const storyActiveIndex = ref(0)
const swiperInstance = ref<SwiperType | null>(null)

const onStorySlideChange = (swiper: SwiperType) => {
  storyActiveIndex.value = swiper.activeIndex
}

const onStorySwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

const slidePrev = () => {
  swiperInstance.value?.slidePrev()
}

const slideNext = () => {
  swiperInstance.value?.slideNext()
}

const autoplayStoryConfig = {
  delay: 5000,
  disableOnInteraction: true
}

const marketplaceFeatures = [
  {
    icon: Network,
    title: 'Ready-to-Integrate infrastructure',
    description: 'Enhance your platform with a plug-and-play marketplace solution that connects your users to a growing network of vendors and service providers.'
  },
  {
    icon: CircleSpark,
    title: 'AI-driven precision',
    description: 'Our recommendation engine ensures users find the perfect match for their needs, increasing satisfaction and engagement on your platform.'
  },
  {
    icon: GraphUp,
    title: 'Automatic growth',
    description: 'Every new vendor added to QPioneers becomes available on your platform, offering continuous value and expanding the ecosystem without additional work.'
  },
  {
    icon: Reports,
    title: 'Scalable opportunities',
    description: 'Whether your focus is innovation, healthcare, real estate, or beyond, our infrastructure adapts to serve your users effectively.'
  }
];

const keyBenefits = [
  {
    icon: '🎯',
    title: 'Enhanced User Retention',
    description: 'Keep your users engaged with accurate, AI-driven solutions.'
  },
  {
    icon: '🤝',
    title: 'Seamless Collaboration',
    description: 'Gain access to a network of vendors already pre-vetted and actively providing value.'
  },
  {
    icon: '🌍',
    title: 'Global Expansion Made Easy',
    description: 'Expand your platform’s capabilities across industries and geographies with QPioneers’ continuously growing ecosystem.'
  },
  {
    icon: '💡',
    title: 'Innovation Without the Workload',
    description: 'Let QPioneers handle vendor onboarding, AI matching, and marketplace management while you focus on scaling your platform.'
  }
];

const vendorStories = [
  {
    fullName: 'Ahmed K.',
    role: 'Workflow Automation Platform',
    quote: '"Since partnering with QPioneers, we’ve seen a 35% increase in user engagement on our platform. The AI-powered recommendations are a game-changer!"',
    image: 'happy-bearded-trader-in-formal-wear-and-eyeglasses-2023-11-27-05-12-26-utc.jpg'
  },
  {
    fullName: ' Sarah L.',
    role: 'Real Estate SaaS Platform',
    quote: '"Integrating QPioneers was seamless, and the benefits were immediate. Our users love the ease of finding expert help through the platform."',
    image: 'happy-woman-portrait-and-small-business-professio-2023-11-27-05-04-14-utc.jpg'
  },
];

const benefits = [
  {
    title: "Reach the right startups.",
    description: "Qewam is full of early-stage startups actively looking for vendors like you in tech, marketing, finance, and more.",
    icon: Rocket,
  },
  {
    title: "Form partnerships.",
    description: "Secure long-term partnerships with incubators and accelerators who need trusted vendors.",
    icon: Community,
  },
  {
    title: "Boost credibility.",
    description: "Being part of Qewam helps you gain visibility and grow your reputation in innovation hubs.",
    icon: ThumbsUp,
  },
];

</script>

<template>
  <main class="px-3 2xl:px-0">
    <section class="max-w-screen-xl mx-auto py-16 lg:py-20">
      <div class=" flex flex-col items-start">
        <h1 class="text-3xl lg:text-5xl leading-snug font-bold lg:w-2/3 brand">
          Empower your platform with Seamless Expertise Integration
        </h1>
        <p class="md:w-3/4 mt-6 leading-normal text-gray-700">
          Partner with QPioneers to transform how your users connect with the expertise they need. Our integrable
          marketplace infrastructure and powerful recommendation engine enhance your platform, providing seamless
          connections between users and service providers without any additional effort from your side.
        </p>
        <NuxtLink class="mt-10 text-lg bg-pSecondary border border-pMain px-4 py-2 rounded-full text-white" to="https://cal.com/hicham-qpioneers/30min">
          Book a meeting now
        </NuxtLink>

        <div class="h-[400px] lg:h-[600px] mt-10 w-full bg-gray-100 rounded-lg p-5">
          <img class="h-[400px] w-full object-cover object-left  rounded-[15px] shadow-[0_0_50px_rgba(255,255,255,0.8)]" src="/img/screens/Frame4.png" alt="">
        </div>

        <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div class="flex flex-col items-start gap-3" v-for="(benefit, index) in keyBenefits">
            <h2 class="text-lg font-bold brand">{{ benefit.title }}</h2>
            <p class="text-muted">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex justify-center">
          <h1 class="text-center lg:w-2/3 text-3xl lg:text-5xl font-bold brand text-balance leading-snug">Why partner
            with
            QPioneers?</h1>
        </div>
        <div class="grid lg:grid-cols-2 gap-6 mt-16 lg:mt-20">
          <div class="flex flex-col items-start gap-3 p-10 bg-gray-50 rounded-lg" v-for="why in marketplaceFeatures">
            <IconoirProvider
                :icon-props="{
                  'color': 'current',
                  'stroke-width': 2,
                  'width': '2em',
                  'height': '2em',
                }">
              <component class="text-pMain" :is="why.icon"/>
            </IconoirProvider>
            <h2 class="text-xl font-bold brand mt-3">{{ why.title }}</h2>
            <p class="text-muted text-lg">{{ why.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex justify-center">
          <h1 class="text-center lg:w-2/3 text-3xl lg:text-5xl font-bold brand text-balance leading-snug">How it
            works?</h1>
        </div>
        <div class="grid lg:grid-cols-12 gap-x-10 gap-y-10 lg:gap-y-24 mt-16 lg:mt-20">
          <IconoirProvider
              :icon-props="{
                  'color': 'current',
                  'stroke-width': 2,
                  'width': '2em',
                  'height': '2em',
                }">

            <div class="lg:col-span-5 flex flex-col items-start">
              <Number1Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">Integrate with Ease</h1>
              <p class="mt-6 text-lg">Our API integration is designed for simplicity. With minimal technical effort,
                your platform gains access to our robust marketplace infrastructure.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Explore now
              </NuxtLink>
            </div>
            <div class="lg:col-span-7">
              <div class="flex bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%201.svg" alt="">
              </div>
            </div>


            <div class="lg:col-span-5 flex flex-col items-start">
              <Number2Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">Leverage AI-Driven Matches</h1>
              <p class="mt-6 text-lg">Our recommendation engine seamlessly pairs users with relevant service providers
                based on profiles, needs, and vendor expertise—enhancing the user experience on your platform.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Explore now
              </NuxtLink>
            </div>

            <div class="lg:col-span-7 ">
              <div class="bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%202.svg" alt="">
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col items-start">
              <Number3Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">Continuous Expansion</h1>
              <p class="mt-6 text-lg">As QPioneers grows its vendor base, your platform benefits automatically. Every
                new vendor and API partner adds value, ensuring your users have access to the best solutions
                available.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Explore now
              </NuxtLink>
            </div>
            <div class="lg:col-span-7">
              <div class="bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%203.svg" alt="">
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col items-start">
              <Number4Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">Support for success</h1>
              <p class="mt-6 text-lg">QPioneers provides ongoing support to ensure a smooth integration process and
                continued alignment with your business goals.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Explore now
              </NuxtLink>
            </div>
            <div class="lg:col-span-7">
              <div class="flex bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%201.svg" alt="">
              </div>
            </div>
          </IconoirProvider>
        </div>
      </div>
    </section>

    <AppEcosystem/>

    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex justify-center">
          <h1 class="text-center  lg:w-2/3 text-3xl lg:text-5xl font-bold brand text-balance leading-snug">Key benefits
            of Qewam
            integration for Partners</h1>
        </div>
        <div class="mt-14 lg:mt-20 grid lg:grid-cols-3 gap-10">
          <div v-for="benefit in benefits" class="flex gap-5 flex-col items-start rounded-lg p-10 bg-gray-50">
            <IconoirProvider
                :icon-props="{
                  'color': 'current',
                  'stroke-width': 1.8,
                  'width': '2em',
                  'height': '2em',
                }">
              <component class="text-pMain" :is="benefit.icon"/>
            </IconoirProvider>
            <h3 class="text-2xl font-bold brand">{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto rounded-lg">
        <div class="flex justify-center">
          <h1 class="text-3xl lg:text-5xl font-bold brand text-balance leading-snug text-center">Success stories from
            our
            Partners</h1>
        </div>
        <div class="flex flex-col-reverse lg:grid grid-cols-2 gap-5 mt-16">
          <div class=" rounded-lg h-full flex flex-col justify-between">
            <div class="flex-1 flex flex-col items-start">
              <div class="p-10 bg-gray-50 rounded-lg flex-1">
                <p v-for="(story, index) in vendorStories" class="text-xl brand">
                  <template v-if="storyActiveIndex === index">
                    {{ story.quote }}
                  </template>
                </p>
              </div>
            </div>

            <div class="pt-5 border-t w-full flex justify-between gap-5 items-end mt-10">
              <div class="flex flex-col">
                <template v-for="(story, index) in vendorStories">
                  <template v-if="storyActiveIndex === index">
                    <span class="text-lg"> {{ story.fullName }}</span>
                    <span class="text-muted text-lg">{{ story.role }}</span>
                  </template>
                </template>
              </div>
              <div class="flex gap-2">
                <IconoirProvider
                    :icon-props="{
                  'color': 'current',
                  'stroke-width': 1.5,
                  'width': '1.1em',
                  'height': '1.1em',
                }">
                  <button @click="slidePrev"
                          class="size-10 border border-black rounded-full flex items-center justify-center">
                    <ArrowLeft/>
                  </button>
                  <button @click="slideNext"
                          class="size-10 border border-black rounded-full flex items-center justify-center">
                    <ArrowRight/>
                  </button>
                </IconoirProvider>
              </div>
            </div>
          </div>

          <div>
            <ClientOnly>
              <swiper
                  @swiper="onStorySwiper"
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="10"
                  @slideChange="onStorySlideChange"
                  :autoplay="autoplayStoryConfig"
                  class="h-full"
                  :rewind="true"
              >
                <swiper-slide
                    v-for="(story, index) in vendorStories"
                    :key="index"
                >
                  <NuxtImg
                      loading="lazy"
                      class="h-[350px] lg:h-[500px] object-cover rounded-lg w-full"
                      fit="cover" placeholder
                      :src="'/img/' + story.image"/>
                </swiper-slide>
              </swiper>
            </ClientOnly>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>

</style>