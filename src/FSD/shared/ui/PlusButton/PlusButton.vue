<script setup>
import { useUIStore } from '@/FSD/shared/model/store/ui'
import { useRouter } from 'vue-router'

const uiStore = useUIStore()
const router = useRouter()

const toggleTheme = () => {
    uiStore.toggleTheme()
}

const click = () => {
    router.push('/create')
}
</script>

<template>
    <button @click="click()" class="plus-Button">+</button>
</template>

<style>
    .plus-Button {
        position: fixed;
        top: 20px;
        right: 135px;
        width: 33px;
        height: 33px;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid var(--text-color);
        background: var(--bg-color);
        color: var(--text-color);
        cursor: pointer;


    &:hover {
        transition: all 0.15s ease;
        background: var(--text-color);
        color: var(--bg-color);
    }
}
</style>