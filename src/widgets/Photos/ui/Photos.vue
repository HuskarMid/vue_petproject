<script setup>
import { useUIStore } from '@/shared/model/store/ui'
import { ref, onMounted, computed } from 'vue'

const uiStore = useUIStore()
const isClient = ref(false)

onMounted(() => {
    isClient.value = true
})

const getDeterministicHeight = (id) => {
    return 200 + (id % 5) * 100
}

const photos = computed(() => {
    return uiStore.getPhotos.map(photo => ({
        ...photo,
        height: photo.height || getDeterministicHeight(photo.id)
    }))
})

const getItemStyle = (height) => {
    return {
        height: `${height}px`
    }
}   
</script>

<template>
    <div v-if="isClient" class="photos__container">
        <div class="photos__item" v-for="photo in photos" :key="photo.id" :style="getItemStyle(photo.height)">
            <img :src="photo.image" alt="photo">
        </div>
    </div>
    <div v-else class="photos__container">
        <!-- Placeholder for SSR -->
    </div>
</template>

<style>
    .photos__container {
        width: 100%;
        max-width: 1900px;
        margin: 0 auto 0;
        padding: 0px 20px 20px 20px;
        columns: 6;
        column-gap: 0px;

        margin-top: 20px;
    }
    .photos__item {
        width: 270px;
        background-color: #000;
        display: inline-block;
        margin-bottom: 20px;
        break-inside: avoid;

        box-sizing: border-box;

        @media (max-width: 1650px) {
            width: 230px;
        }
        @media (max-width: 1500px) {
            width: 200px;
        }
        @media (max-width: 1500px) {
            width: 170px;
        }

    }
    .photos__item:hover {
        transform: scale(1.01);
        transition: transform 0.3s ease;
        cursor: pointer;

        &:hover {
            border: 2px solid var(--text-color);
        }
    }
    .photos__item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
