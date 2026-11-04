<script setup lang="ts">
  defineProps<{ artworks: ArtworkSummary[] }>()
</script>

<template>
  <div class="grid">
    <PaintingCard v-for="artwork in artworks" :key="artwork.id" :artwork="artwork" />
  </div>
</template>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 12px;

    @include tablet {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px 16px;
    }

    @include desktop {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
