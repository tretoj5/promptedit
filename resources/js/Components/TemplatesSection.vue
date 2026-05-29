<script setup lang="ts">
import type { TemplateCategory } from '@/types'
import SectionHeading from './SectionHeading.vue'

defineProps<{ categories: TemplateCategory[] }>()
</script>

<template>
    <section id="templates" class="py-20 bg-[#2B2B2B]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
                title="Browse Template Categories"
                subtitle="100,000+ professionally designed editing templates."
            />
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <div
                    v-for="cat in categories"
                    :key="cat.name"
                    class="group p-6 rounded-2xl bg-[#3B3B3B] transition-all duration-300 cursor-pointer hover:scale-[0.95]"
                >
                    <div class="w-14 h-14 rounded-full bg-[#2B2B2B] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">{{ cat.icon }}</div>
                    <h3 class="text-base font-semibold text-white font-['Work_Sans']">{{ cat.name }}</h3>
                    <p class="text-xs text-gray-500 mt-1 font-['Space_Mono']">{{ cat.count }} items</p>
                </div>
            </div>
        </div>
    </section>
</template>
