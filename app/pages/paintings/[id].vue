<script setup lang="ts">
  const route = useRoute()
  const id = route.params.id
</script>

<template>
  <div class="paintings">
    Картины {{ id }}
  </div>
</template>

<style lang="scss" scoped>

</style>
