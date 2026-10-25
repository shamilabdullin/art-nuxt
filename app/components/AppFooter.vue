<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="inner">
      Footer
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
</style>
