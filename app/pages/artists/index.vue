<script setup lang="ts">
  const route = useRoute()
  const page = computed(() => Number(route.query.page) || 1)
  const { data } = await useFetch('/api/artists', { query: { page, limit: 24 } })
</script>

<template>
  <div class="wrapper">
    <h1 class="title">Авторы</h1>

    <div v-if="data" class="grid">
      <ArtistListItem v-for="artist in data.artists" :key="artist.id" :artist="artist" />
    </div>

    <UiPagination v-if="data" :current-page="page" :total-pages="data.totalPages" />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    padding-block: 32px 64px;
  }

  .title {
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 700;
    color: var(--color-text);

    @include tablet {
      font-size: 32px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
