<script setup>
import { useUIStore } from '@/shared/model/store/ui'
import { useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'

const uiStore = useUIStore()
const router = useRouter()
const isMounted = ref(false)

onMounted(() => {
    isMounted.value = true
})

const toggleShareContext = () => {
    uiStore.toggleShareContext()
}

const click = () => {
    router.push('/create')
}

const choosedCount = computed(() => isMounted.value ? uiStore.getChoosedCount : 0)
</script>

<template>
    <button @click="toggleShareContext()" class="share-Button">{{ choosedCount }}</button>
</template>

<style>
    .share-Button {
        position: fixed;
        top: 20px;
        right: 185px;
        width: 33px;
        height: 33px;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid var(--text-color);
        background: var(--bg-color);
        color: var(--text-color);
        cursor: pointer;
    }

    .share-Button:hover {
        transition: all 0.15s ease;
        background: var(--text-color);
        color: var(--bg-color);
    }
</style>