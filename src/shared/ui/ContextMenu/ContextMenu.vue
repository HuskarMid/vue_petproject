<script setup lang="ts">
import { useUIStore } from '@shared/model/store/ui'
const uiStore = useUIStore()
const shareContext = computed(() => uiStore.getShareContext)
const choosedCount = computed(() => uiStore.getChoosedCount)
</script>

<template>
    <div 
        v-if="shareContext"
        class="context-menu"
    >
        <div class="context-count">{{ choosedCount }} PHOTOS</div>
        <div class="context-button">Share</div>
    </div>
</template>

<style scoped>
.context-menu {
    position: fixed;
    top: calc(50% - 75px);
    left: calc(50% - 150px);
    width: 300px;
    min-height: 150px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    z-index: 1000;
    color: white;
    box-sizing: border-box;
    border: 2px solid #7e7e7e;
}

.context-count {
    position: absolute;
    top: 20%;
    width: 300px;
    text-align: center;
    left: calc(50% - 150px);
    font-weight: 600;
    font-size: 24px;
}

.context-button {
    position: absolute;
    bottom: 25px;
    left: calc(50% - 75px);
    width: 150px;
    height: 50px;
    border-radius: 12px;
    padding: 10px;
    background-color: #212121;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    transition: all 0.15s ease;
    font-size: 18px;
}

.context-button:hover {
    background-color: #333;
}
</style>

