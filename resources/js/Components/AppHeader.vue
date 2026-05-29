<script setup lang="ts">
import type { NavLink } from '@/types'
import BarsIcon from './BarsIcon.vue'
import { useMobileMenu } from '@/composables/useMobileMenu'
import { useScrollTo } from '@/composables/useScrollTo'

defineProps<{ links: NavLink[] }>()

const { isOpen, toggle, close } = useMobileMenu()
const { scrollTo } = useScrollTo()

function handleNavClick(link: NavLink) {
    if (link.href.startsWith('#')) {
        close()
        scrollTo(link.href)
    }
}
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B]/95 backdrop-blur-md border-b border-[#3B3B3B]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">P</div>
                    <span class="text-xl font-bold text-white">PromptEdit</span>
                </div>
                <nav class="hidden lg:flex items-center gap-10">
                    <a
                        v-for="link in links"
                        :key="link.href"
                        :href="link.href"
                        @click.prevent="handleNavClick(link)"
                        class="text-sm text-white hover:text-purple-400 transition-colors cursor-pointer"
                    >
                        {{ link.label }}
                    </a>
                    <a
                        href="https://promptedit.com"
                        target="_blank"
                        class="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </a>
                </nav>
                <div class="flex items-center gap-4 lg:hidden">
                    <a
                        href="https://promptedit.com"
                        target="_blank"
                        class="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                    >
                        Get Started
                    </a>
                    <button @click="toggle" class="p-2 rounded-lg hover:bg-[#3B3B3B] transition-colors" aria-label="Toggle menu">
                        <BarsIcon v-if="!isOpen" class="w-5 h-5 text-white" />
                        <svg v-else class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div v-if="isOpen" class="lg:hidden border-t border-[#3B3B3B] py-4 space-y-2">
                <a
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    @click.prevent="handleNavClick(link)"
                    class="block px-3 py-2.5 text-sm text-white hover:text-purple-400 rounded-lg hover:bg-[#3B3B3B] transition-colors cursor-pointer"
                >
                    {{ link.label }}
                </a>
            </div>
        </div>
    </header>
</template>
