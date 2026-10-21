<template>
  <NuxtLayout>
    <div class="container">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .container {
    @include container;
  }

  .title {
    color: var(--color-accent);
  }
</style>