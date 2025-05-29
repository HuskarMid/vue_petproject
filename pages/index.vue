<script setup>
import { computed } from 'vue'
import { useUIStore } from '@/shared/model/store/ui'
import MainPage from '@/pages/MainPage/ui/MainPage.vue'
import ToggleButton from '@/shared/ui/toggleButton/ToggleButton.vue'
import PlusButton from '@/shared/ui/PlusButton/PlusButton.vue'
import Input from '@/shared/ui/Input/Input.vue'

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
