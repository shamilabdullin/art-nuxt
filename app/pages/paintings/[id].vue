<script setup lang="ts">
  const route = useRoute()
  const id = computed(() => route.params.id)

  const { data, status, error } = await useFetch<ApiSingleResponse<ArtworkDetails>>(() => `artworks/${id.value}`, { baseURL: API_BASE_URL, query: { fields: ARTWORK_DETAILS_FIELDS } })
</script>

<template>
  <div class="paintings">
    Картины {{ id }}
    {{ data?.data.title }}
  </div>
</template>

<style lang="scss" scoped>

</style>
