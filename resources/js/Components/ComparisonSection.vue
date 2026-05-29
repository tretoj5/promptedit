<script setup lang="ts">
import XIcon from './XIcon.vue'
import CheckIcon from './CheckIcon.vue'
</script>

<template>
    <section class="py-16 lg:py-24 bg-[#1E1E1E]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-2xl sm:text-3xl font-bold text-white">Before & After PromptEdit</h2>
                <p class="mt-2 text-gray-400">Stop juggling multiple subscriptions. One platform. All the tools.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="p-8 rounded-2xl bg-white/5 border border-white/10">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center"><XIcon class="w-5 h-5 text-red-400" /></span>
                        <span class="font-semibold text-red-400">Before</span>
                    </div>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3 text-red-300 text-sm"><XIcon class="w-4 h-4 shrink-0" /> Multiple subscriptions</li>
                        <li class="flex items-center gap-3 text-red-300 text-sm"><XIcon class="w-4 h-4 shrink-0" /> Different interfaces to learn</li>
                        <li class="flex items-center gap-3 text-red-300 text-sm"><XIcon class="w-4 h-4 shrink-0" /> Expensive monthly bills</li>
                    </ul>
                </div>
                <div class="p-8 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"><CheckIcon class="w-5 h-5 text-green-400" /></span>
                        <span class="font-semibold text-green-400">After — PromptEdit</span>
                    </div>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3 text-green-300 text-sm"><CheckIcon class="w-4 h-4 shrink-0" /> One place for all AI tools</li>
                        <li class="flex items-center gap-3 text-green-300 text-sm"><CheckIcon class="w-4 h-4 shrink-0" /> Single easy interface</li>
                        <li class="flex items-center gap-3 text-green-300 text-sm"><CheckIcon class="w-4 h-4 shrink-0" /> Pay only for what you use</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
