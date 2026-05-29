<script setup lang="ts">
import type { FaqItem } from '@/types'
import ChevronDownIcon from './ChevronDownIcon.vue'

defineProps<{
    faq: FaqItem
    isOpen: boolean
}>()

const emit = defineEmits<{
    toggle: []
}>()
</script>

<template>
    <div
        class="rounded-2xl bg-[#3B3B3B] border border-[#4B4B4B] overflow-hidden transition-all duration-200"
        :class="{ 'border-purple-500/30': isOpen }"
    >
        <button
            @click="emit('toggle')"
            class="w-full flex items-center justify-between px-6 py-5 text-left"
        >
            <span class="font-medium text-white pr-4 text-sm">{{ faq.q }}</span>
            <span class="transition-transform duration-200 shrink-0" :class="{ 'rotate-180': isOpen }">
                <ChevronDownIcon class="w-5 h-5 text-gray-400" />
            </span>
        </button>
        <div v-show="isOpen" class="px-6 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed">{{ faq.a }}</p>
        </div>
    </div>
</template>
