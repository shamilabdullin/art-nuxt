<script setup lang="ts">
  const props = defineProps<{ currentPage: number; totalPages: number }>()
  const route = useRoute()

  const pages = computed(() => getPageNumbers(props.currentPage, props.totalPages, 1))

  function pageLink(page: number) {
    return { query: { ...route.query, page } }
  }

  watch(
    () => props.currentPage,
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  )
</script>

<template>
  <nav v-if="totalPages > 1" aria-label="Пагинация" class="nav">
    <NuxtLink
      v-if="currentPage !== 1"
      :aria-current="undefined"
      :to="pageLink(currentPage - 1)"
      class="navLink"
      >Назад</NuxtLink
    >
    <span v-else class="navLink navLinkDisabled">Назад</span>

    <template v-for="(item, index) in pages" :key="item === 'gap' ? `gap-${index}` : item">
      <span v-if="item === 'gap'" class="gap">…</span>
      <NuxtLink
        v-else
        :to="pageLink(item)"
        :aria-current="item === currentPage ? 'page' : undefined"
        :class="['pageLink', { pageLinkActive: item === currentPage }]"
        >{{ item }}</NuxtLink
      >
    </template>

    <NuxtLink
      v-if="currentPage !== totalPages"
      :aria-current="undefined"
      :to="pageLink(currentPage + 1)"
      class="navLink"
      >Вперёд</NuxtLink
    >
    <span v-else class="navLink navLinkDisabled">Вперёд</span>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding-block: 32px;
  }

  .gap {
    padding-inline: 8px;
    color: var(--color-text-secondary);
    user-select: none;
  }

  .navLink {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding-inline: 12px;
    font-size: 14px;
    color: var(--color-text-secondary);
    border-radius: $radius-sm;

    &:hover {
      background-color: var(--color-bg-hover);
    }
  }

  .navLinkDisabled {
    color: var(--color-border);
  }

  .pageLink {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    min-width: 36px;
    padding-inline: 8px;
    font-size: 14px;
    color: var(--color-text-secondary);
    border-radius: $radius-sm;

    &:hover {
      background-color: var(--color-bg-hover);
    }
  }

  .pageLinkActive {
    color: var(--color-accent-contrast);
    background-color: var(--color-accent);

    &:hover {
      background-color: var(--color-accent);
    }
  }
</style>
