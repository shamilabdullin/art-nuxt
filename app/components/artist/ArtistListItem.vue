<script setup lang="ts">
  const { artist } = defineProps<{ artist: ArtistSummary }>()
  const years = computed(() => formatArtistYears(artist.birth_date, artist.death_date, 'н.в.'))
</script>

<template>
  <NuxtLink :to="`/artists/${artist.id}`" class="item">
    <span class="name">{{ artist.title }}</span>
    <span v-if="years" class="years">{{ years }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 16px;
    border: 1px solid var(--color-border);
    border-radius: $radius-md;
    transition:
      border-color 0.15s ease,
      background-color 0.15s ease;

    &:hover {
      background-color: var(--color-bg-elevated);
      border-color: var(--color-text-secondary);
    }

    @include focus-ring;
  }

  .name {
    font-weight: 500;
    color: var(--color-text);
  }

  .years {
    font-size: 13px;
    color: var(--color-text-secondary);
    white-space: nowrap;
  }
</style>
