<script setup lang="ts">
import RocketLaunchIcon from './RocketLaunchIcon.vue'
import { useScrollTo } from '@/composables/useScrollTo'

const { scrollTo } = useScrollTo()
</script>

<template>
    <section class="bg-[#2B2B2B]">
        <div class="mx-auto max-w-[1050px] px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div class="flex gap-[30px] items-center">
                <div class="flex-1 min-w-0">
                    <div class="flex flex-col gap-5">
                        <h1 class="text-white font-['Work_Sans'] font-semibold text-5xl sm:text-6xl lg:text-[67px] leading-[1.1] lg:leading-[73.7px] max-w-[510px]">
                            Discover AI &<br />Create Content
                        </h1>
                        <p class="text-[#CCCCCC] font-['Work_Sans'] text-base sm:text-lg leading-[35.2px] max-w-lg">
                            PromptEdit marketplace UI. Access the best AI tools without subscriptions. Pay as you go — like a grocery store for AI.
                        </p>
                    </div>
                        <a
                            href="#"
                            class="inline-flex items-center gap-3 px-8 sm:px-[50px] h-[52px] sm:h-[60px] rounded-[20px] bg-[#A259FF] text-white font-['Work_Sans'] font-semibold text-sm sm:text-base hover:bg-[#B575FF] transition-all duration-300"
                        >
                            <RocketLaunchIcon class="w-4 h-4 sm:w-5 sm:h-5" />
                            Get Started
                        </a>
                    <div class="mt-[30px] flex gap-5 sm:gap-[30px]">
                        <div>
                            <p class="text-white font-['Space_Mono'] font-bold text-xl sm:text-2xl lg:text-[28px] leading-[39.2px]">240k+</p>
                            <p class="text-[#858584] font-['Space_Mono'] text-base sm:text-lg leading-[38.4px]">AI Tools</p>
                        </div>
                        <div>
                            <p class="text-white font-['Space_Mono'] font-bold text-xl sm:text-2xl lg:text-[28px] leading-[39.2px]">100k+</p>
                            <p class="text-[#858584] font-['Space_Mono'] text-base sm:text-lg leading-[38.4px]">Creators</p>
                        </div>
                        <div>
                            <p class="text-white font-['Space_Mono'] font-bold text-xl sm:text-2xl lg:text-[28px] leading-[39.2px]">10k+</p>
                            <p class="text-[#858584] font-['Space_Mono'] text-base sm:text-lg leading-[38.4px]">Templates</p>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex flex-1">
                    <div class="w-full h-[510px] rounded-2xl overflow-hidden relative">
                        <div
                            class="absolute inset-0"
                            style="background:
                                radial-gradient(circle at 25% 20%, rgba(162,89,255,0.35) 0%, transparent 50%),
                                radial-gradient(circle at 75% 80%, rgba(0,172,79,0.25) 0%, transparent 40%),
                                radial-gradient(circle at 50% 50%, rgba(162,89,255,0.1) 0%, transparent 30%),
                                linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                        >
                            <div class="absolute top-8 left-8 w-32 h-32 rounded-full border border-white/10" />
                            <div class="absolute top-12 left-16 w-20 h-20 rounded-full bg-purple-500/20" />
                            <div class="absolute bottom-32 right-12 w-40 h-40 rounded-full border border-white/5" />
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl opacity-20 select-none">
                                &lt;/&gt;
                            </div>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[#A259FF]" />
                        <div class="absolute bottom-0 left-0 right-0 p-8">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">P</div>
                                <span class="text-white font-['Work_Sans'] text-base">PromptEdit Team</span>
                            </div>
                            <h3 class="text-white font-['Work_Sans'] font-semibold text-2xl leading-[30.8px] mb-4">AI Creator Course</h3>
                            <div class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#3B3B3B]/50 backdrop-blur-[10px]">
                                <span class="text-white/60 font-['Space_Mono'] text-xs">Early Access</span>
                                <span class="text-white font-['Space_Mono'] text-base font-bold">Limited</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
