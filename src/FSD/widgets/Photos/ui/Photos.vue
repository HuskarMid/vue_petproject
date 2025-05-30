<script setup>
import { useUIStore } from '@/FSD/shared/model/store/ui'
import { ref, onMounted, computed } from 'vue'
import choosed from './choosed.svg'

const uiStore = useUIStore()
const isClient = ref(false)

onMounted(() => {
    isClient.value = true
})

const setPhotoChoosed = (id) => {
    uiStore.setPhotoChoosed(id)
}

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

const preventContextMenu = (event, id) => {
    event.preventDefault()
    setPhotoChoosed(id)
}

</script>

<template>
    <div class="photos__container">
        <div v-if="isClient">
            <div class="photos__item" v-for="photo in photos" 
                :key="photo.id" :style="getItemStyle(photo.height)" 
                @click="setPhotoChoosed(photo.id)" 
                @contextmenu="(event) => preventContextMenu(event, photo.id)">
                <div v-show="photo.isChoosed" class="photos__item-choosed">
                    <img :src="choosed" alt="choosed">
                </div>
                <img :src="photo.image" :alt="`photo-${photo.id}`" loading="lazy">
            </div>
        </div>
        <div v-else>
            <div class="photos__item" v-for="photo in photos" 
                :key="photo.id" :style="getItemStyle(photo.height)">
                <img :src="photo.image" :alt="`photo-${photo.id}`" loading="lazy">
            </div>
        </div>
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
        position: relative;
        box-sizing: border-box;
    }
    .photos__item:hover {
        transform: scale(1.01);
        transition: transform 0.3s ease;
        cursor: pointer;
    }
    .photos__item:hover {
        border: 2px solid var(--text-color);
    }
    .photos__item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .photos__item-choosed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        border: 2px solid var(--text-color);
    }
    .photos__item-choosed img {
        width: 100px;
        height: 100px;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        filter: invert(1);
        object-fit: cover;
    }
    @media (max-width: 1650px) {
        .photos__item {
            width: 230px;
        }
    }
    @media (max-width: 1500px) {
        .photos__item {
            width: 200px;
        }
    }
    @media (max-width: 1500px) {
        .photos__item {
            width: 170px;
        }
    }
</style>
