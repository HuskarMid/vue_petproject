<script setup>
import { useUIStore } from '@/FSD/shared/model/store/ui'
import { useRouter } from 'vue-router'

const uiStore = useUIStore()

const photos = uiStore.getPhotos
const fivePhotos = photos.slice(0, 5)

const router = useRouter()

const uploadPhoto = (image) => {
    uiStore.addPhoto({
        image: image
    })
    router.push('/')
}

const uploadMyPhoto = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            uploadPhoto(e.target.result)
        }
        reader.readAsDataURL(file)
        router.push('/')
    }
}
</script>

<template>
    <div class="container">
        <div class="chooseList">
            <div class="chooseList__item" v-for="photo in fivePhotos" :key="photo.id" @click="uploadPhoto(photo.image)">
                <img :src="photo.image" alt="photo">
            </div>

            <input 
                type="file" 
                accept="image/*" 
                @change="uploadMyPhoto" 
                style="display: none" 
                ref="fileInput"
            >
            <div class="chooseList__Upload" @click="$refs.fileInput.click()">
                <div class="circle">
                    <div class="circle__plus">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 70px;
}
.chooseList {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 80vh;
    background-color: var(--bg-color);
}
.chooseList__item {
    display: flex;

    width: 15%;
    height: 100%;
    transition: all 0.25s ease;
    box-sizing: border-box;
}

.chooseList__item:hover {
    transform: scale(1.02) translateY(-30px);
    cursor: pointer;
    border: 5px solid rgb(255, 255, 255);
}

.chooseList__item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.chooseList__Upload {
    width: 15%;
    height: 100%;
    border: 5px solid rgb(40, 40, 40);

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease;
}

.chooseList__Upload:hover {
    cursor: pointer;
    border: 5px solid rgb(255, 255, 255);
    transform: scale(1.02) translateY(-30px);
}

.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(40, 40, 40);

    display: flex;
    justify-content: center;
    align-items: center;
}

.circle__plus {
    font-size: 25px;
    color: rgb(200, 200, 200);
}
</style>

