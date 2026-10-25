<script setup lang="ts">
  import type { NuxtError } from '#app';

  const props = defineProps<{ error: NuxtError }>()
  const isNotFoundError = computed(() => props.error.status === 404)

  const returnToMain = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="error">
      <p v-if="isNotFoundError">404 Ошибка</p>

      <p v-else>Произошла непредвиденная ошибка. Попробуйте обновить страницу.</p>

      <button type="button" @click="returnToMain">Вернуться на главную</button>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error {
}
</style>
