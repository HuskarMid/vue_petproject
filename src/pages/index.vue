<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const currentOrigin = window.location.origin
  const isGithubPages = currentOrigin.includes('github.io')
  const basePath = isGithubPages ? '/vue_petproject/' : '/vue-petproject/vue_petproject/'
  window.location.href = `${currentOrigin}${basePath}`
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