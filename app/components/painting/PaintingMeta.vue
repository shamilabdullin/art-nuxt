<script setup lang="ts">
  defineProps<{ rows: MetaRow[] }>()
</script>

<template>
  <dl class="list">
    <div v-for="row in rows" :key="row.label" class="row">
      <dt class="label">{{ row.label }}</dt>
      <dd class="value">{{ row.value }}</dd>
    </div>
  </dl>
</template>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
  }

  .label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text-secondary);
  }

  .value {
    font-size: 14px;
    color: var(--color-text);
  }
</style>
