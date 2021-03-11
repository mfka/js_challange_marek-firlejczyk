<template>
  <BaseIcon :icon-name="iconId" width="17px" height="18px" :view-box="[36, 8, 17, 18]">
    <path
      :id="iconId"
      d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z"
      stroke="none"
      fill-rule="evenodd"
    />
  </BaseIcon>
</template>

<script lang="ts">
import BaseIcon from './BaseIcon.vue'

export default {
  name: 'BagIcon',
  components: { BaseIcon },
  setup: () => ({
    iconId: 'Bag-Icon',
  }),
}
</script>
