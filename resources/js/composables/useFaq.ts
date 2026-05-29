import { ref } from 'vue'

export function useFaq() {
    const activeIndex = ref<number | null>(null)

    function toggle(index: number) {
        activeIndex.value = activeIndex.value === index ? null : index
    }

    function close() {
        activeIndex.value = null
    }

    return { activeIndex, toggle, close }
}
