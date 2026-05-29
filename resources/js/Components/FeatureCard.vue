<script setup lang="ts">
import type { Feature } from '@/types'
import { computed } from 'vue'

const props = defineProps<{ feature: Feature }>()

const gradientMap: Record<string, string> = {
    '🎨': 'from-purple-600/40 via-purple-800/30 to-purple-950/60',
    '🎬': 'from-blue-600/40 via-blue-800/30 to-blue-950/60',
    '🎵': 'from-emerald-600/40 via-emerald-800/30 to-emerald-950/60',
    '🔌': 'from-orange-600/40 via-orange-800/30 to-orange-950/60',
}

const gradientClass = computed(() => gradientMap[props.feature.icon] || 'from-purple-600/40 via-purple-800/30 to-purple-950/60')

const extraCount = computed(() => Math.max(0, props.feature.items.length - 2))
</script>

<template>
    <div class="group flex flex-col gap-[15px] w-[300px] lg:w-[330px] shrink-0 rounded-2xl bg-[#3B3B3B] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-[0.95]">
        <div class="relative h-[300px] lg:h-[330px] overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br" :class="gradientClass" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#3B3B3B]/60 to-transparent" />
            <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-7xl sm:text-8xl select-none">{{ feature.icon }}</span>
            </div>
        </div>
        <div class="flex gap-[15px] px-3">
            <div
                v-for="(item, i) in feature.items.slice(0, 2)"
                :key="i"
                class="flex-1 h-[80px] sm:h-[100px] rounded-2xl bg-[#2B2B2B] flex items-center justify-center p-2 text-center text-white/60 font-['Work_Sans'] text-xs sm:text-sm leading-tight"
            >
                {{ item }}
            </div>
            <div
                v-if="extraCount > 0"
                class="flex-1 h-[80px] sm:h-[100px] rounded-2xl bg-[#A259FF] flex items-center justify-center transition-all duration-300 hover:scale-[0.95]"
            >
                <span class="text-white font-['Space_Mono'] text-sm sm:text-base leading-[35.2px]">+{{ extraCount }}</span>
            </div>
        </div>
        <div class="flex flex-col gap-2.5 p-0 pb-2.5 px-3">
            <h3 class="text-white font-['Work_Sans'] font-semibold text-[22px] leading-[30.8px]">{{ feature.title }}</h3>
            <div class="flex items-center gap-3">
                <span class="text-base">{{ feature.icon }}</span>
                <span class="text-white/60 font-['Work_Sans'] text-base leading-[22.4px]">AI Category</span>
            </div>
        </div>
    </div>
</template>
