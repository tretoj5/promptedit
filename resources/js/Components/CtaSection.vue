<script setup lang="ts">
import ArrowRightIcon from './ArrowRightIcon.vue'
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()
</script>

<template>
    <section class="py-16 lg:py-24 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-white">Join Our Weekly Digest</h2>
            <p class="mt-4 text-purple-200 text-sm sm:text-base">Get exclusive promotions & updates straight to your inbox.</p>
            <div class="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email here"
                    class="flex-1 px-5 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2B2B2B] rounded-full hover:bg-[#3B3B3B] transition-colors">
                    Subscribe
                    <ArrowRightIcon class="ml-2 w-4 h-4" />
                </button>
            </div>
        </div>
    </section>
</template>
