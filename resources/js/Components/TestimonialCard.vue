<script setup lang="ts">
import type { Testimonial } from '@/types'
import StarIcon from './StarIcon.vue'

defineProps<{ testimonial: Testimonial }>()
</script>

<template>
    <div class="p-6 lg:p-8 rounded-2xl bg-[#3B3B3B] border border-[#4B4B4B] hover:border-purple-500/20 transition-all">
        <div class="flex items-center gap-1 mb-4">
            <StarIcon v-for="star in 5" :key="star" class="w-4 h-4 text-yellow-400" />
        </div>
        <p class="text-gray-300 text-sm leading-relaxed mb-8">"{{ testimonial.quote }}"</p>
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
                {{ testimonial.author.charAt(0) }}
            </div>
            <div>
                <p class="font-semibold text-white text-sm">{{ testimonial.author }}</p>
                <p class="text-gray-500 text-xs">{{ testimonial.role }}</p>
            </div>
        </div>
    </div>
</template>
