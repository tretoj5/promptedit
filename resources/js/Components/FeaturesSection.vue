<script setup lang="ts">
import { ref } from 'vue'
import type { Feature } from '@/types'
import SectionHeading from './SectionHeading.vue'
import FeatureCard from './FeatureCard.vue'

defineProps<{ features: Feature[] }>()

const scrollContainer = ref<HTMLElement | null>(null)
const showRightFade = ref(true)
const showLeftFade = ref(false)

function onScroll() {
    const el = scrollContainer.value
    if (!el) return
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
    const atStart = el.scrollLeft <= 2
    showRightFade.value = !atEnd
    showLeftFade.value = !atStart
}

function scrollRight() {
    scrollContainer.value?.scrollBy({ left: 330, behavior: 'smooth' })
}

function scrollLeft() {
    scrollContainer.value?.scrollBy({ left: -330, behavior: 'smooth' })
}
</script>

<template>
    <section id="features" class="bg-[#2B2B2B] py-20 overflow-hidden">
        <div class="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col gap-[60px]">
                <SectionHeading
                    title="AI Tool Categories"
                    subtitle="Access the full spectrum of AI creation tools — all in one place."
                />
                <div class="relative -mx-4 sm:-mx-6 lg:-mx-8">
                    <div
                        ref="scrollContainer"
                        @scroll="onScroll"
                        class="flex gap-[30px] overflow-x-auto scrollbar-none scroll-smooth px-4 sm:px-6 lg:px-8"
                    >
                        <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
                    </div>
                    <div
                        v-if="showLeftFade"
                        class="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#2B2B2B] to-transparent pointer-events-none z-10"
                    />
                    <div
                        v-if="showRightFade"
                        class="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#2B2B2B] to-transparent pointer-events-none z-10"
                    />
                    <button
                        v-if="showLeftFade"
                        @click="scrollLeft"
                        class="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#3B3B3B] items-center justify-center text-white shadow-lg hover:scale-90 transition-all duration-300 z-20 cursor-pointer border border-white/10"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        v-if="showRightFade"
                        @click="scrollRight"
                        class="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#A259FF] items-center justify-center text-white shadow-lg hover:scale-90 transition-all duration-300 z-20 cursor-pointer"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
    display: none;
    width: 0;
}
.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
