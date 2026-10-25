<script setup lang="ts">
  const route = useRoute()
  const id = computed(() => route.params.id)
</script>

<template>
  <div class="artists">
    Художник {{ id }}
  </div>
</template>

<style lang="scss" scoped>

</style>
