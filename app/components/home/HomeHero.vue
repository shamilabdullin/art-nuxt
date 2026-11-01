<template>
  <section class="hero">
    <h1 class="title">Art — галерея мирового искусства</h1>
    <p class="description">
      Онлайн-галерея произведений искусства на основе коллекции Art Institute of Chicago. Более
      130&nbsp;000 произведений в общественном достоянии.
    </p>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-block: 40px 32px;

    @include tablet {
      padding-block: 64px 40px;
    }
  }

  .title {
    max-width: 720px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    // Неоновый градиент по буквам: фон обрезается по тексту, сам текст прозрачный.
    color: transparent;
    background-image: var(--gradient-neon);
    background-clip: text;
    filter: var(--glow-filter);

    @include tablet {
      font-size: 44px;
    }
  }

  .description {
    max-width: 560px;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text-secondary);
  }
</style>
