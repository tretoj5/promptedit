<script setup lang="ts">
defineProps<{
    title: string
    subtitle: string
}>()
</script>

<template>
    <div class="flex flex-col gap-[10px]">
        <h2 class="text-white font-['Work_Sans'] font-semibold text-[28px] sm:text-[38px] leading-[45.6px]">{{ title }}</h2>
        <p class="text-white font-['Work_Sans'] text-base sm:text-[22px] leading-[35.2px]">{{ subtitle }}</p>
    </div>
</template>
