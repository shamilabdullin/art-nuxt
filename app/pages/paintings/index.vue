<script setup lang="ts">
  const ids = [27992, 28560, 111628]
</script>

<template>
  <div>
    <div v-for="id in ids" :key="id" class="paintings">
      <NuxtLink :to="`/paintings/${id}`">Painting {{ id }}</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .paintings {
  }
</style>
