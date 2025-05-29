<script setup>
import { computed } from 'vue'
import { useUIStore } from './src/shared/model/store/ui'
import MainPage from './src/pages/MainPage/ui/MainPage.vue'
import ToggleButton from './src/shared/ui/toggleButton/ToggleButton.vue'
import PlusButton from './src/shared/ui/PlusButton/PlusButton.vue'
import Input from './src/shared/ui/Input/Input.vue'

const uiStore = useUIStore()
const theme = computed(() => `theme-${uiStore.getTheme}`)

const toggleTheme = () => {
  uiStore.toggleTheme()
}
</script>

<template>
    <NuxtLayout>
        <MainPage />
    </NuxtLayout>
</template>

<style>

</style>
