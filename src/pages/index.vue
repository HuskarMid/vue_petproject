<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const currentOrigin = window.location.origin
  window.location.href = `${currentOrigin}/vue-petproject/vue_petproject/`
})
</script>

<template>
  <div>
    <p>Перенаправление...</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style> 