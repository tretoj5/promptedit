<script setup lang="ts">
import type { FaqItem } from '@/types'
import SectionHeading from './SectionHeading.vue'
import FaqItemComponent from './FaqItem.vue'

defineProps<{
    faqs: FaqItem[]
    activeIndex: number | null
}>()

const emit = defineEmits<{
    toggle: [index: number]
}>()
</script>

<template>
    <section id="faq" class="py-16 lg:py-24 bg-[#1E1E1E]">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about PromptEdit."
            />
            <div class="space-y-3">
                <FaqItemComponent
                    v-for="(faq, index) in faqs"
                    :key="index"
                    :faq="faq"
                    :is-open="activeIndex === index"
                    @toggle="emit('toggle', index)"
                />
            </div>
        </div>
    </section>
</template>
