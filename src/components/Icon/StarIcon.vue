<template>
  <BaseIcon :icon-name="iconId" width="20px" height="20px" :view-box="[0, 6, 20, 20]">
    <polygon
      :id="iconId"
      stroke="none"
      fill-rule="evenodd"
      points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
    />
  </BaseIcon>
</template>

<script lang="ts">
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'StarIcon',
  components: { BaseIcon },
  setup: () => ({
    iconId: 'Wishlist-Icon',
  }),
}
</script>
