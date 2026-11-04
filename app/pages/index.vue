<script setup lang="ts">
  const { data } = await useFetch('/api/artworks', { query: { limit: 12 } })
</script>

<template>
  <div class="index">
    <HomeHero />
    <HomePopularTags />
    <section class="wrapper">
      <div class="sectionHeader">
        <h2 class="sectionTitle">Избранные картины</h2>
        <NuxtLink to="/paintings" class="sectionLink">Смотреть все</NuxtLink>
      </div>

      <PaintingGallery v-if="data" :artworks="data.artworks" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .sectionHeader {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  }

  .sectionTitle {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-text);
  }

  .sectionLink {
    font-size: 14px;
    color: var(--color-accent);
    white-space: nowrap;

    &:hover {
      color: var(--color-accent-hover);
    }
  }

  .wrapper {
    padding-bottom: 64px;
  }
</style>
