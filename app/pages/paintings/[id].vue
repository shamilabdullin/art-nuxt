<script setup lang="ts">
  const route = useRoute()
  const id = computed(() => route.params.id)

  const { data } = await useFetch<ApiSingleResponse<ArtworkDetails>>(() => `artworks/${id.value}`, {
    baseURL: API_BASE_URL,
    query: { fields: ARTWORK_DETAILS_FIELDS },
  })

  const artwork = computed(() => data.value?.data)

  const metaRows = computed(() => {
    if (artwork.value) return buildMetaRows(artwork.value)
    return []
  })
</script>

<template>
  <div class="wrapper">
    <div class="imageColumn">
      <div class="imageWrapper">
        <!-- <img class="image" /> -->
      </div>
    </div>

    <div class="infoColumn">
      <div>
        <h1 class="title">{{ artwork?.title }}</h1>

        <p v-if="artwork?.artist_title" class="subtitle">
          <NuxtLink
            v-if="artwork?.artist_id"
            :to="`/artists/${artwork?.artist_id}`"
            class="artistLink"
            >{{ artwork?.artist_title }}</NuxtLink
          >
          <template v-else>{{ artwork?.artist_title }}</template>
          <template v-if="artwork?.date_display">, {{ artwork?.date_display }}</template>
        </p>
      </div>

      <div v-if="artwork?.description">
        <p class="sectionTitle">Об этой картине</p>
        <div class="description" v-html="artwork?.description"></div>
      </div>

      <div v-if="metaRows.length > 0">
        <p class="sectionTitle">Детали</p>

        <PaintingMeta :rows="metaRows" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-block: 32px 64px;

    @include desktop {
      flex-direction: row;
      align-items: flex-start;
      gap: 48px;
    }

    .imageColumn {
      flex-shrink: 0;
      width: 100%;

      @include desktop {
        position: sticky;
        top: 88px;
        width: 55%;
      }

      .imageWrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 4 / 5;
        overflow: hidden;
        background-color: var(--color-bg-elevated);
        border-radius: $radius-lg;

        .image {
          object-fit: contain;
        }
      }
    }

    .infoColumn {
      display: flex;
      flex-direction: column;
      gap: 24px;
      min-width: 0;

      @include desktop {
        flex: 1;
      }

      .title {
        font-size: 26px;
        font-weight: 700;
        line-height: 1.2;
        color: var(--color-text);

        @include tablet {
          font-size: 32px;
        }
      }

      .subtitle {
        font-size: 15px;
        color: var(--color-text-secondary);

        .artistLink {
          &:hover {
            color: var(--color-text);
            text-decoration: underline;
          }
        }
      }

      .sectionTitle {
        font-size: 15px;
        font-weight: 600;
        color: var(--color-text);
      }

      .description {
        display: flex;
        flex-direction: column;
        gap: 12px;
        font-size: 15px;
        line-height: 1.6;
        color: var(--color-text);

        :deep(p) {
          margin: 0 0 12px;
        }
      }
    }
  }
</style>
