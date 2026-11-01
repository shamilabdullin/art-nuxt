<script setup lang="ts">
  const popularTags: string[] = ['Cats', 'Dogs', 'Van Gogh', 'Forest', 'Sunset', 'Sea']
</script>

<template>
  <nav aria-label="Поиск по тегам" class="wrapper">
    <ul class="list">
      <li v-for="tag in popularTags" :key="tag">
        <NuxtLink :to="{ path: '/search', query: { q: tag } }" class="tag">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .wrapper {
    padding-bottom: 32px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    // Margin-based spacing instead of `gap` on purpose: some in-app/embedded
    // mobile browsers (Telegram, Instagram, older WebViews) don't support gap
    // on flex containers and render wrapped rows with zero space between them,
    // which reads as the bottom row overlapping the top one.
    margin: -4px;
  }

  .tag {
    display: inline-block;
    margin: 4px;
    padding: 6px 14px;
    font-size: 14px;
    color: var(--color-text-secondary);
    background-color: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    white-space: nowrap;
    transition:
      color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      color: var(--color-accent);
      border-color: var(--color-accent);
      box-shadow: var(--glow-accent);
    }
  }
</style>
