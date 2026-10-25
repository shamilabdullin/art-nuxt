<script setup lang="ts">
  useHead({ titleTemplate: (title) => (title ? `${title} . Art` : 'Art') })
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>