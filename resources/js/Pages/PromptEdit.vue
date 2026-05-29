<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { navLinks, features, templateCategories, testimonials, faqs, pricingPlans } from '@/data/promptEdit'
import { useFaq } from '@/composables/useFaq'
import AppHeader from '@/Components/AppHeader.vue'
import HeroSection from '@/Components/HeroSection.vue'
import FeaturesSection from '@/Components/FeaturesSection.vue'
import ComparisonSection from '@/Components/ComparisonSection.vue'
import TemplatesSection from '@/Components/TemplatesSection.vue'
import PricingSection from '@/Components/PricingSection.vue'
import TestimonialsSection from '@/Components/TestimonialsSection.vue'
import FaqSection from '@/Components/FaqSection.vue'
import CtaSection from '@/Components/CtaSection.vue'
import AppFooter from '@/Components/AppFooter.vue'

const { activeIndex, toggle: toggleFaq } = useFaq()
</script>

<template>
    <Head title="PromptEdit - AI Marketplace" />

    <div class="min-h-screen bg-white">
        <AppHeader :links="navLinks" />

        <main>
            <HeroSection />
            <FeaturesSection :features="features" />
            <ComparisonSection />
            <TemplatesSection :categories="templateCategories" />
            <PricingSection :plans="pricingPlans" />
            <TestimonialsSection :testimonials="testimonials" />
            <FaqSection
                :faqs="faqs"
                :active-index="activeIndex"
                @toggle="toggleFaq"
            />
            <CtaSection />
        </main>

        <AppFooter />
    </div>
</template>
