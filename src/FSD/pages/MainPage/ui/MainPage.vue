<script setup>
import Photos from '@widgets/Photos/ui/Photos.vue'
import ToggleButton from '@shared/ui/ToggleButton/ToggleButton.vue'
import PlusButton from '@shared/ui/PlusButton/PlusButton.vue'
</script>
<template>
    <div class="main-page">
        <Photos />
    </div>
</template>

<style>
.main-page {
    top: calc(71px);
    padding-top: 120px;
    position: absolute;
    width: 100%;
    background-color: var(--bg-color);
}

.main-page__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--bg-color);

    position: fixed;
    z-index: 100;
    height: 71px;
    width: 100%;
}
</style>
