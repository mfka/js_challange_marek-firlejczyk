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
