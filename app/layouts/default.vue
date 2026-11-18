<template>
  <div class="layout">
    <AppHeader />
    <main class="container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
  // Футер прижат к низу экрана даже на коротких страницах (404, пустой поиск):
  // layout занимает всю высоту окна, main забирает свободное место.
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  .container {
    @include container;

    flex: 1;
  }
</style>
