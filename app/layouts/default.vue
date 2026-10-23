<script setup lang="ts">

</script>

<template>
  <div>
    <AppHeader />
    <main class="container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    @include container;
  }
</style>
