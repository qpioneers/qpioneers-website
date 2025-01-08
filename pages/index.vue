<script setup lang="ts">
import {
  IconoirProvider,
  Bell,
  ArrowRight,
  Number1Square,
  Number2Square,
  Number3Square,
  Rocket,
  Community,
  ThumbsUp,
  ArrowLeft,
  Check,
  NavArrowDown
  // @ts-ignore
} from '@iconoir/vue';
import {Swiper, SwiperSlide} from 'swiper/vue'
// @ts-ignore
import type {Swiper as SwiperType} from 'swiper'
// @ts-ignore
import {Autoplay} from 'swiper/modules'
import AccordionContainer from "@/components/accordion/AccordionContainer.vue";
import AccordionItem from "@/components/accordion/AccordionItem.vue";
import 'swiper/css'
import {useSeo} from "~/composables/useSeo";
import AppEcosystem from "~/components/AppEcosystem.vue";

useSeo('Join QPioneers marketplace', 'Join QPioneers, the AI-powered platform that connects experts with high-quality leads. Let your expertise shine while we bring customers directly to you. No advertising needed!')

const modules = ref([
  Autoplay
])

const services = ref([
  'Advertising',
  'Animation',
  'AR / VR',
  'Artificial Intelligence',
  'Audio Production',
  'Blockchain / Web 3',
  'Brand Design',
  'Brand Strategy',
  'Business Strategy',
  'Change Management',
  'CMS / DXP',
  'Copywriting',
  'Corporate Communications',
  'Creative Production',
  'CRM Implementation',
  'CRM Strategy',
  'Customer Data Platforms',
  'Customer Experience Design',
  'Customer Strategy',
  'Dashboarding & Measurement',
  'Data Analytics',
  'Data Strategy',
  'Data Visualisation',
  'Digital Campaign Development',
  'Digital Performance Marketing',
  'Digital Strategy',
  'Editing',
  'Editing / Proofreading',
  'Employee Experience',
  'Events',
  'EVP / Employer Branding',
  'Experience Strategy',
  'Experiential Marketing',
  'eCommerce & Marketplaces',
  'Future Trends',
  'Graphic Design',
  'Growth & Innovation Strategy',
  'Illustration',
  'Internal Communications',
  'Learning & Development',
  'Loyalty Strategy',
  'MarTech Consulting',
  'MarTech Implementation',
  'Media Buying',
  'Media Strategy & Planning',
  'Mobile App Development',
  'Motion Graphics',
  'New Venture Strategy',
  'Photography',
  'PR',
  'Production Management',
  'Product Strategy',
  'Proposition Design',
  'Purpose, Values & Culture',
  'Qualitative Research',
  'Quantitative Research',
  'Recruitment Campaigns',
  'Research Tools',
  'ROl Optimisation',
  'Segmentation',
  'SEO / SEM',
  'Service Design',
  'Shopper / PoS marketing',
  'Social & Influencer Marketing',
  'Social Media',
  'Software Development',
  'Spatial Design',
  'Sustainability Strategy',
  'TV Production',
  'UX / UI Design',
  'Video Production',
  'Web Development'
]);
const whyBlocks = [
  {
    title: "Effortless exposure.",
    description: "Forget self-promotion—our recommendation engine ensures your profile reaches users who need your services.",
    image: "Frame1.jpg"
  },
  {
    title: "One profile, infinite reach.",
    description: "Fill out your details once, and your profile will automatically be available across all our API partner platforms, expanding your visibility every time we onboard a new partner.",
    image: "Frame2.jpg"
  },
  {
    title: "Grow without limits.",
    description: "Access a growing network of startups, businesses, and organizations across multiple industries.",
    image: "Frame3.jpg"
  },
]

const faqs = [
  {
    question: "How does AI matchmaking work?",
    answer: "Our AI analyzes your offerings and matches them with the specific needs of startups, incubators, and accelerators.",
  },
  {
    question: "What types of vendors can join?",
    answer: "We welcome vendors in tech, marketing, SaaS, finance, and more.",
  },
  {
    question: "Can I connect with multiple clients?",
    answer: "Yes! The AI will keep matching you with clients based on your capacity.",
  },
  {
    question: "Is there a fee?",
    answer: "There’s no upfront fee. You only pay for the services you use.",
  },
  {
    question: "What if I don’t like my matches?",
    answer: "We’ll keep refining the matches until you find the perfect fit.",
  },
];
const vendorStories = [
  {
    fullName: 'Emily S.',
    role: 'Marketing Solutions Provider',
    quote: '"QPioneers Marketplace helped us secure long-term partnerships with high-growth startups and accelerators. It\'s a game-changer for our business."',
    image: 'happy-woman-portrait-and-small-business-professio-2023-11-27-05-04-14-utc.jpg'
  },
  {
    fullName: 'James D.',
    role: 'Software Development Consultant',
    quote: '"Thanks to QPioneers, I’ve expanded my client base effortlessly. The platform’s AI matches me with projects that align perfectly with my skills."',
    image: 'happy-bearded-trader-in-formal-wear-and-eyeglasses-2023-11-27-05-12-26-utc.jpg'
  },
  {
    fullName: 'Sophia R.',
    role: 'Graphic Design Specialist',
    quote: '"QPioneers made it simple to connect with clients who value my work. It saves time and helps me focus on what I do best: creating amazing designs."',
    image: 'smiling-female-photographer-at-desk-in-studio-2023-11-27-04-58-44-utc.jpg'
  }
];

const storyActiveIndex = ref(0)
const swiperInstance = ref<SwiperType | null>(null)

const activeIndex = ref(0)
const onSlideChange = (swiper: SwiperType) => {
  activeIndex.value = swiper.activeIndex
}

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

const autoplayConfig = {
  delay: 2500,
  disableOnInteraction: false
}

const autoplayStoryConfig = {
  delay: 5000,
  disableOnInteraction: true
}

function openModal() {
  sharedState.isModalOpen = true
}
</script>

<template>
  <main class="px-3 2xl:px-0">
    <section class="max-w-screen-xl mx-auto py-16 lg:py-20">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-8">
          <div class="flex">
            <button @click="openModal" class="border ps-2 py-2 pe-5 rounded-full flex gap-2 items-center text-sm md:text-base outline-none">
              <IconoirProvider
                  :icon-props="{
                  'color': 'current',
                  'stroke-width': 2,
                  'width': '1.1em',
                  'height': '1.1em',
                }">
          <span class="size-9 rounded-full bg-blue-100 flex justify-center items-center">
            <Bell/>
          </span>
              </IconoirProvider>
              Join QPioneers Marketplace for Vendors!
            </button>
          </div>

          <h1 class="text-3xl lg:text-5xl leading-snug font-bold lg:text-balance mt-6 brand">
            Sign up once, reach new customers every day!
          </h1>

          <p class="lg:w-4/5 mt-6 leading-normal text-gray-700">
            Join QPioneers and let your expertise shine. Our AI-powered platform does the heavy lifting for you,
            bringing high-quality leads directly to your profile. No need to advertise or chase customers—we connect you
            with users actively seeking your services.
          </p>
          <div class="mt-20">
            <span class="uppercase font-bold text-sm">Trusted by leading Brands</span>
            <div class="flex gap-6 mt-8 flex-wrap">
              <img class="h-[50px] rounded-lg object-contain" src="/img/partners/red-switch.jpg" alt="">
              <img class="h-[50px] rounded-lg object-contain" src="/img/partners/rapti.jpg" alt="">
              <img class="h-[50px] rounded-lg object-contain" src="/img/partners/craft-crew.jpg" alt="">
              <img class="h-[50px] rounded-lg object-contain" src="/img/partners/io.jpg" alt="">
              <img class="h-[50px] rounded-lg object-contain" src="/img/partners/sald.png" alt="">
              <img class="h-[50px] rounded-lg object-contain" src="/img/partners/blue-points.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-span-4 hidden lg:flex items-end">
          <div class="rounded-xl h-[400px] w-full pt-2">
            <ClientOnly>
              <swiper
                  :modules="modules"
                  direction="vertical"
                  :slides-per-view="6"
                  :space-between="10"
                  @slideChange="onSlideChange"
                  :autoplay="autoplayConfig"
                  class="h-full"
              >
                <swiper-slide
                    v-for="(service, index) in services"
                    :key="index"
                >
                  <div
                      class="rounded-full border border-black h-full flex items-center px-5 font-medium transition-all duration-300 justify-between"
                      :class="{ 'bg-pMain/10': index === activeIndex + 1 }"
                  >
                    {{ service }}
                    <IconoirProvider
                        :icon-props="{
              'color': '#000000',
              'stroke-width': 2,
              'width': '1.3em',
              'height': '1.3em'
            }"
                    >
                      <ArrowRight v-if="index === activeIndex + 1"/>
                    </IconoirProvider>
                  </div>
                </swiper-slide>
              </swiper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-screen-xl mx-auto py-12 lg:py-16">
      <div class="sr-only">
        <div class="my-1.5" v-for="why in whyBlocks">
          <h3>{{ why.title }}</h3>
          <p>{{ why.description }}</p>
        </div>
      </div>
      <ClientOnly>
        <swiper
            :slides-per-view="1.2"
            :space-between="20"
            class="h-full"
            :breakpoints="{
      '640': {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2.2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }"
        >
          <swiper-slide
              v-for="(why, index) in whyBlocks"
              :key="index"
          >
            <div class="flex flex-col items-start">
              <NuxtImg
                  loading="lazy"
                  class="w-full h-[400px] rounded-lg object-cover"
                  fit="cover" placeholder
                  :src="'/img/screens/' + why.image" :alt="why.title"/>
              <p class="text-muted mt-6"><span class="inline-block text-black font-bold">{{
                  why.title
                }}</span> {{ why.description }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </ClientOnly>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex justify-center">
          <h1 class="text-center lg:w-2/3 text-3xl lg:text-5xl font-bold brand text-balance leading-snug">How it
            works?</h1>
        </div>
        <div class="grid lg:grid-cols-12 gap-x-10 gap-y-10 lg:gap-y-24 mt-14 lg:mt-20">
          <IconoirProvider
              :icon-props="{
                  'color': 'current',
                  'stroke-width': 2,
                  'width': '2em',
                  'height': '2em',
                }">

            <div class="order-1 lg:col-span-5 flex flex-col items-start">
              <Number1Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">Sign up and create your profile.</h1>
              <p class="mt-6 text-lg">Set up your account, showcase your offerings, and let us handle the rest.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Experience now
              </NuxtLink>
            </div>
            <div class="order-2 lg:col-span-7">
              <div class="flex bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%201.png" alt="">
              </div>
            </div>

            <div class="order-4 lg:order-3 lg:col-span-7 ">
              <div class="bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%202.png" alt="">
              </div>
            </div>

            <div class="order-3 lg:order-4 lg:col-span-5 flex flex-col items-start">
              <Number2Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">AI-Driven connections.</h1>
              <p class="mt-6 text-lg">Our technology matches your services with the right users across our partner
                ecosystem.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Experience now
              </NuxtLink>
            </div>

            <div class="order-5 lg:col-span-5 flex flex-col items-start">
              <Number3Square class="text-pMain"/>
              <h1 class="text-xl md:text-2xl lg:text-4xl font-bold brand mt-6">Expand your reach automatically.</h1>
              <p class="mt-6 text-lg">With every API partner we onboard, your profile gets shared with new
                users—effortlessly.</p>
              <NuxtLink
                  class="border-b-2 border-gray-300 font-medium text-lg mt-10 hover:border-pMain duration-300"
                  to="">Experience now
              </NuxtLink>
            </div>
            <div class="order-6 lg:col-span-7">
              <div class="bg-gray-50 p-10 rounded-lg">
                <img class="w-full object-contain h-[400px]" src="/img/screens/Task%20Card%203.png" alt="">
              </div>
            </div>

          </IconoirProvider>
        </div>
      </div>
    </section>


    <section class="py-12 lg:py-16">
      <div class="max-w-screen-xl mx-auto rounded-lg">
        <div class="flex justify-center">
          <h1 class="text-3xl lg:text-5xl font-bold brand text-balance leading-snug text-center">Success stories from
            our
            Vendors</h1>
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

            <div
                class="pt-5 border-t w-full flex justify-between flex-col lg:flex-row gap-5 items-center lg:items-end mt-10">
              <div class="flex flex-col">
                <template v-for="(story, index) in vendorStories">
                  <template v-if="storyActiveIndex === index">
                    <span class="text-center lg:text-start text-lg"> {{ story.fullName }}</span>
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

          <div class="">
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

    <AppCta/>

    <section class="py-12 lg:py-16">
      <div class="max-w-screen-md mx-auto">
        <div class="flex justify-center">
          <h1 class="text-center lg:w-2/3 text-3xl lg:text-5xl font-bold brand text-balance leading-snug">Frequently
            asked
            questions</h1>
        </div>
        <div class="mt-16 lg:mt-20">
          <AccordionContainer ref="accordionFaq" class="flex flex-col gap-6">
            <template v-for="(faq, sectionIndex) in faqs" :key="sectionIndex">
              <AccordionItem
                  :id="sectionIndex"
                  :isFirst="sectionIndex === 0"
                  :image="''"
                  class=""

              >
                <template #button="{ expanded }">
                  <div
                      class="flex items-center cursor-pointer justify-between gap-3 border-black border p-4 rounded-full"
                      :class="{'bg-blue-50' : expanded}"
                  >

                    <span class="lg:text-lg">{{ faq.question }}</span>
                    <IconoirProvider
                        :icon-props="{
                    'color': 'current',
                    'stroke-width': 1.8,
                    'width': '1.5em',
                    'height': '1.5em',
                  }"
                    >

                      <button class="">
                        <NavArrowDown class="duration-300" :class="{'rotate-180' : expanded}"/>
                      </button>
                    </IconoirProvider>
                  </div>
                </template>

                <template #content>
                  <div class="pt-5 px-4">
                    <p class="text-zinc-800">{{ faq.answer }}</p>
                  </div>
                </template>
              </AccordionItem>
            </template>
          </AccordionContainer>
        </div>
      </div>

    </section>
  </main>
</template>

<style scoped>

</style>