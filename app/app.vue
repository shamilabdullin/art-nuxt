<script setup lang="ts">
  const appConfig = useAppConfig()
  useHead({
    titleTemplate: (title) => (title ? `${title} · ${appConfig.site.name}` : appConfig.site.name),
  })
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
