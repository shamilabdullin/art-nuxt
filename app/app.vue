<template>
  <div class="container">
    <NuxtRouteAnnouncer />
    <h1 class="title">Art — галерея мирового искусства</h1>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    @include container;
  }

  .title {
    color: var(--color-accent);
  }
</style>