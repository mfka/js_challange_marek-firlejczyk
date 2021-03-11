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
