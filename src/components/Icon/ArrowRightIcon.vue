<template>
  <BaseIcon :icon-name="iconId">
    <polygon
      :id="iconId"
      stroke="none"
      fill-rule="evenodd"
      points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
    />
  </BaseIcon>
</template>

<script lang="ts">
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'ArrowRightIcon',
  components: { BaseIcon },
  setup: () => ({
    iconId: 'Arrow-Right-Icon',
  }),
}
</script>
