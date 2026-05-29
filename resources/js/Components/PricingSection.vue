<script setup lang="ts">
import type { PricingPlan } from '@/types'
import CheckIcon from './CheckIcon.vue'
import SectionHeading from './SectionHeading.vue'

defineProps<{ plans: PricingPlan[] }>()
</script>

<template>
    <section id="pricing" class="py-20 bg-[#1E1E1E]">
        <div class="mx-auto max-w-[1050px] px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <SectionHeading title="Choose Your Plan" subtitle="Simple pricing. No hidden fees. Cancel anytime." />
            </div>
            <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div
                    v-for="plan in plans"
                    :key="plan.name"
                    :class="[
                        'relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer',
                        plan.highlighted
                            ? 'bg-gradient-to-b from-purple-600/20 to-[#3B3B3B] border-purple-500/40 scale-105 hover:scale-[1.02]'
                            : 'bg-[#3B3B3B] border-[#4B4B4B] hover:border-purple-500/20 hover:scale-[0.95]'
                    ]"
                >
                    <div
                        v-if="plan.highlighted"
                        class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-semibold rounded-full"
                    >
                        Most Popular
                    </div>
                    <div class="text-center">
                        <h3 class="text-lg font-semibold text-white">{{ plan.name }}</h3>
                        <div class="mt-4">
                            <span class="text-4xl font-bold text-white">{{ plan.price }}</span>
                            <span class="text-gray-400 ml-1">/ {{ plan.period }}</span>
                        </div>
                        <p class="mt-2 text-sm text-purple-400 font-medium">{{ plan.credits }}</p>
                        <div v-if="plan.badge !== 'Most Popular'" class="mt-2 inline-flex px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                            {{ plan.badge }}
                        </div>
                    </div>
                    <ul class="mt-6 space-y-3">
                        <li
                            v-for="feature in plan.features"
                            :key="feature"
                            class="flex items-start gap-2 text-sm text-gray-400"
                        >
                            <CheckIcon class="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                            {{ feature }}
                        </li>
                    </ul>
                    <a
                        href="https://promptedit.com"
                        target="_blank"
                        :class="[
                            'mt-6 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all',
                            plan.highlighted
                                ? 'text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90'
                                : 'text-white bg-[#4B4B4B] hover:bg-[#5B5B5B] border border-[#5B5B5B]'
                        ]"
                    >
                        {{ plan.cta }}
                    </a>
                </div>
            </div>
            <p class="mt-6 text-center text-xs text-gray-500">All major payment methods accepted. 30-day money back guarantee.</p>
        </div>
    </section>
</template>
