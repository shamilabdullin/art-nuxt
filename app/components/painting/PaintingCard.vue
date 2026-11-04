<script setup lang="ts">
  const props = defineProps<{ artwork: ArtworkSummary }>()
  const imageUrl = computed(() => getArtworkImageUrl(props.artwork.image_id, 'card'))
</script>

<template>
  <NuxtLink class="card" :to="`/paintings/${artwork.id}`">
    <div class="imageWrapper">
      <img v-if="imageUrl" :src="imageUrl" :alt="artwork.title" class="image" loading="lazy" />
    </div>
    <div>
      <p class="title">{{ artwork.title }}</p>
      <p v-if="artwork.artist_title" class="artist">{{ artwork.artist_title }}</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: $radius-md;
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.9;
    }

    @include focus-ring;
  }

  .imageWrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background-color: var(--color-bg-elevated);
    border-radius: $radius-md;
  }

  .image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    .card:hover & {
      transform: scale(1.04);
    }
  }

  .title {
    @include line-clamp(2);

    font-size: 14px;
    font-weight: 500;
    color: var(--color-text);
  }

  .artist {
    @include line-clamp(1);

    font-size: 12px;
    color: var(--color-text-secondary);
  }
</style>
