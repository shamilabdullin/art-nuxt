<script setup lang="ts">
  interface INavigation {
    to: string
    label: string
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
  <header class="header">
    <div class="inner">
      <div class="left">
        <NuxtLink to="/" class="logo" aria-label="Art — на главную">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            class="mark"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="26"
              height="26"
              rx="7"
              stroke="currentColor"
              stroke-width="2.5"
            />
            <circle cx="20.5" cy="11" r="2.5" fill="currentColor" />
            <path d="M6 23L13 14.5L17.5 19.5L21.5 15L26 23H6Z" fill="currentColor" />
          </svg>
        </NuxtLink>

        <nav aria-label="Основная навигация" class="nav">
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{
            item.label
          }}</NuxtLink>
        </nav>
      </div>
      <div class="actions"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: $z-header;
    // Полупрозрачная шапка: при прокрутке сквозь неё видна размытая дымка и картины.
    background-color: color-mix(in srgb, var(--color-bg) 80%, transparent);
    backdrop-filter: blur(12px);
    // Неоновая линия: розовый → фиолетовый → голубой.
    border-bottom: 1px solid transparent;
    border-image: var(--gradient-neon) 1;

    .inner {
      @include container;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      height: 64px;

      .left {
        display: flex;
        align-items: center;
        gap: 32px;

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--color-text);
          white-space: nowrap;

          .mark {
            flex-shrink: 0;
            color: var(--color-accent);
            filter: var(--glow-filter);
          }
        }

        .nav {
          display: none;

          @include desktop {
            display: flex;
            align-items: center;
            gap: 24px;
          }

          a {
            color: var(--color-text-secondary);
            transition:
              color 0.2s ease,
              text-shadow 0.2s ease;

            &:hover {
              color: var(--color-accent);
              text-shadow: var(--glow-text);
            }
          }
        }
      }

      .actions {
        display: none;
        align-items: center;
        gap: 8px;

        @include desktop {
          display: flex;
        }
      }
    }
  }
</style>
