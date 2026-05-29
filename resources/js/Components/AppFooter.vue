<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'

const currentYear = new Date().getFullYear()
const { scrollTo } = useScrollTo()
</script>

<template>
    <footer class="bg-[#1E1E1E] text-gray-400 border-t border-[#3B3B3B]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="sm:col-span-2 lg:col-span-1">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">P</div>
                        <span class="text-lg font-bold text-white">PromptEdit</span>
                    </div>
                    <p class="mt-4 text-sm leading-relaxed text-gray-500">NFT marketplace UI created with Anima for Figma. Collect, buy and sell AI tools from more than 20k creators.</p>
                </div>
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-5">Explore</h4>
                    <ul class="space-y-3">
                        <li><a href="#features" @click.prevent="scrollTo('#features')" class="text-sm text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Features</a></li>
                        <li><a href="#pricing" @click.prevent="scrollTo('#pricing')" class="text-sm text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Pricing</a></li>
                        <li><a href="#templates" @click.prevent="scrollTo('#templates')" class="text-sm text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">Templates</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-5">Join Us</h4>
                    <ul class="space-y-3">
                        <li><a href="mailto:support@contentcreator.com" class="text-sm text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                        <li><a href="#faq" @click.prevent="scrollTo('#faq')" class="text-sm text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-5">Legal</h4>
                    <ul class="space-y-3">
                        <li><a href="https://mrpaulxavier.com/terms-and-conditions" target="_blank" class="text-sm text-gray-400 hover:text-purple-400 transition-colors">Terms</a></li>
                        <li><a href="https://mrpaulxavier.com/privacy-policy" target="_blank" class="text-sm text-gray-400 hover:text-purple-400 transition-colors">Privacy</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 pt-6 border-t border-[#3B3B3B] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="text-xs text-gray-600">&copy; {{ currentYear }} Paul Xavier International LLC. Use this template freely.</p>
                <p class="text-xs text-gray-600">This site is not a part of Facebook or Facebook Inc.</p>
            </div>
        </div>
    </footer>
</template>
