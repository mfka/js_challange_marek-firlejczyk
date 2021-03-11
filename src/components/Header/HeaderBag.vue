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

<style scoped>
.header-bag {
  @apply flex;
  @apply flex-row;
  @apply items-end;
}

.header-bag__item {
  @apply h-6;
  @apply flex;
  @apply items-end;
}

.header-bag__item .icon {
  @apply h-auto;

  fill: var(--primary-color);
}

.header-bag__price {
  @apply mr-1;
  @apply text-sm;
  @apply leading-3;
}

.header-bag__count {
  @apply ml-2;
}

.header-bag__count .icon {
  @apply w-4;
}

.header-bag__wishlist-count {
  @apply ml-2;
}

.bag__item-counter {
  @apply flex;
  @apply w-3;
  @apply h-3;
  @apply self-start;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply rounded-lg;

  margin-left: -1px;
  font-family: 'Lato-Bold', sans-serif;
  font-size: 8px;
  color: var(--primary-bg-color);
  background-color: var(--blue);
}
</style>
