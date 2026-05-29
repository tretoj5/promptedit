<script setup lang="ts">
import type { Testimonial } from '@/types'
import SectionHeading from './SectionHeading.vue'
import TestimonialCard from './TestimonialCard.vue'

defineProps<{ testimonials: Testimonial[] }>()
</script>

<template>
    <section class="py-16 lg:py-24 bg-[#2B2B2B]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
                title="What Creators Say"
                subtitle="Hear from our community."
            />
            <div class="grid md:grid-cols-3 gap-6">
                <TestimonialCard v-for="(t, i) in testimonials" :key="i" :testimonial="t" />
            </div>
        </div>
    </section>
</template>
