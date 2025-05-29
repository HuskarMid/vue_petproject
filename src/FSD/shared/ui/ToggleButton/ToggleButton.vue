<script setup>
import { useUIStore } from '@/FSD/shared/model/store/ui'

const uiStore = useUIStore()

const toggleTheme = () => {
    uiStore.toggleTheme()
}
</script>

<template>
    <button @click="toggleTheme" class="toggle-Button">Toggle</button>
</template>

<style>
    .toggle-Button {
        position: fixed;
        top: 20px;
        right: 40px;
        padding: 8px 16px;
        font-weight: 600;
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