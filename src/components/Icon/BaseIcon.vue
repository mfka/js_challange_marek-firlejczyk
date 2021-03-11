<template>
  <svg
    class="icon"
    :width="width"
    :height="height"
    :viewBox="viewBoxString"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <slot />
  </svg>
</template>

<script lang="ts">
import { computed, PropType } from '@vue/runtime-core'
export default {
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    viewBox: {
      type: Object as PropType<[number, number, number, number]>,
      default: [18, 18, 8, 10],
    },
    width: {
      type: [Number, String],
      default: 8,
    },
    height: {
      type: [Number, String],
      default: 10,
    },
  },
  setup: props => ({
    iconId: computed(() => props.iconName.replace(/\s/g, '-')),
    viewBoxString: computed(() => props.viewBox.join(' ')),
  }),
}
</script>
