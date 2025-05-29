<script setup>
import { computed } from 'vue'
import { useUIStore } from '@/shared/model/store/ui'
import MainPage from '@/pages/MainPage/ui/MainPage.vue'
import ToggleButton from '@/shared/ui/ToggleButton/ToggleButton.vue'
import PlusButton from '@/shared/ui/PlusButton/PlusButton.vue'
import Input from '@/shared/ui/Input/Input.vue'
import ShareButton from '@/shared/ui/ShareButton/ShareButton.vue'
import ContextMenu from '@/shared/ui/ContextMenu/ContextMenu.vue'

import { loadState, saveState, isLocalStorageAvailable, isPhotoInLocalStorage } from '@/shared/model/store/ui'

const uiStore = useUIStore()
const theme = computed(() => `theme-${uiStore.getTheme}`)

const loadedState = loadState()
if (loadedState && loadedState.photos && loadedState.photos.length > 0) {
    uiStore.setPhotos(loadedState.photos)
}

const toggleTheme = () => {
  uiStore.toggleTheme()
}
</script>

<template>
  <div :class="theme">
    <div class="main-page__navbar">
        <ContextMenu/>
        <Input />
        <ToggleButton />
        <PlusButton />
        <ShareButton />
    </div>
    <slot />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html {
  background: var(--bg-color);
}

:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

.main-page__navbar {
    display: flex;
    justify-content: center;
}

.theme-light {
  --bg-color: #ffffff;
  --text-color: #000000;
  background-color: #ffffff;
}

.theme-dark {
  --bg-color: #0e0e0e;
  --text-color: #ffffff;
  background-color: #0e0e0e;
}
</style>