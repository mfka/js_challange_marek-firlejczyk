<template>
  <footer class="footer container">
    <slot name="sidenote">
      <p class="footer__sidenote">Footer</p>
    </slot>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  @apply flex;
  @apply flex-row;
  @apply h-14;
  @apply items-center;
  @apply uppercase;
  @apply bg-white;

  &__sidenote {
    font-family: 'Lato-Bold', sans-serif;
    letter-spacing: 1.37px;
  }
}
</style>
