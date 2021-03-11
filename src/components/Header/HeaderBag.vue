<template>
  <aside class="header-bag">
    <div class="header-bag__item header-bag__count">
      <div class="header-bag__price">£210</div>
      <BagIcon />
      <span class="bag__item-counter">10</span>
    </div>
    <div class="header-bag__item header-bag__wishlist-count">
      <StarIcon />
      <span class="bag__item-counter">5</span>
    </div>
  </aside>
</template>

<script lang="ts">
import BagIcon from './../Icon/BagIcon.vue'
import StarIcon from '../Icon/StarIcon.vue'

export default {
  name: 'HeaderBag',
  components: { BagIcon, StarIcon },
}
</script>
