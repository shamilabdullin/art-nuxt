<script setup lang="ts">
  interface INavigation {
    to: string;
    label: string; 
  }

  const navigation: INavigation[] = [
    { to: '/', label: 'Главная' },
    { to: '/paintings', label: 'Картины' },
    { to: '/artists', label: 'Авторы' },
    { to: '/about', label: 'Обо мне' },
    { to: '/mature', label: '18+' },        
  ]
</script>

<template>
  <header class="appheader">
    <nav aria-label="Основная навигация">
      <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped >
.appheader {
}
</style>
