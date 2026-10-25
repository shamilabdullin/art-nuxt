<script setup lang="ts">
  useSeoMeta({
    title: 'Обо мне',
    description: 'Pet-проект Шамиля Абдуллина: каталог картин из коллекции Института искусств Чикаго',
    ogTitle: 'Обо мне',
    ogDescription: 'Pet-проект Шамиля Абдуллина: каталог картин из коллекции Института искусств Чикаго'
  })
</script>

<template>
  <div class="wrapper">
    <h1 class="title">Обо мне</h1>

    <div class="photoWrapper">
      <img src="/avatar.jpg" alt="avatar" class="photo" width="380" height="380"/>
    </div>

    <div class="content">
      <p>Привет! Меня зовут Абдуллин Шамиль, и этот сайт — мой проект.</p>
      <p>Я использую коллекцию из базы данных Института искусств Чикаго.</p>
      <p>Я создал его для художников и всех, кто интересуется искусством.</p>
      <p>Надеюсь, вам понравится.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 720px;
  padding-block: 40px 80px;
  margin-inline: auto;

  .title {
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 700;
    color: var(--color-text);

    @include tablet {
      font-size: 36px;
    }
  }

  .photoWrapper {
    .photo {
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 16px;
    line-height: 1.7;
    color: var(--color-text);
  }
}
</style>
