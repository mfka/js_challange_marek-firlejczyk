<template>
  <header class="header container">
    <h1 class="page-title">
      <slot name="title">Brand</slot>
    </h1>
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  @apply flex;
  @apply flex-row;
  @apply h-16;
  @apply items-center;
  @apply justify-between;
  @apply uppercase;
  @apply sticky;
  @apply top-0;
  @apply z-10;

  background-color: var(--primary-bg-color);
}

.page-title {
  @apply text-lg;
}
</style>
