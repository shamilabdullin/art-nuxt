<script setup lang="ts">
  const year = new Date().getFullYear()
  const appConfig = useAppConfig()
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <span>
        © {{ year }} {{ appConfig.site.name }}. Данные предоставлены
        <NuxtLink to="https://api.artic.edu/docs/" target="_blank" class="link"
          >Art Institute of Chicago API</NuxtLink
        >.
      </span>
      <NuxtLink to="/about" class="link">Обо мне</NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    margin-top: 32px;
    border-top: 1px solid var(--color-border);

    .inner {
      @include container;

      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-block: 14px;
      color: var(--color-text-secondary);
      font-size: 12.5px;

      @include tablet {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  // Как навигация в шапке: неоновое свечение при наведении.
  .link {
    color: var(--color-text-secondary);
    transition:
      color 0.2s ease,
      text-shadow 0.2s ease;

    &:hover {
      color: var(--color-accent);
      text-shadow: var(--glow-text);
    }

    @include focus-ring;
  }
</style>
