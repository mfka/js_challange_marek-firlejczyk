<template>
  <aside class="header-bag">
    <div class="header-bag__item header-bag__count">
      <div class="header-bag__price">{{ totalPrice }}</div>
      <BagIcon />
      <span class="bag__item-counter">{{ totalItems }}</span>
    </div>
    <div class="header-bag__item header-bag__wishlist-count">
      <StarIcon />
      <span class="bag__item-counter">{{ totalWishItems }}</span>
    </div>
  </aside>
</template>

<script lang="ts">
import { computed } from 'vue'

import BagIcon from './../Icon/BagIcon.vue'
import StarIcon from '../Icon/StarIcon.vue'
import { useBagStore } from '../../store/useBagStore'
import { formatPrice } from '../../infrastructure/utils/price.utils'
import { CurrencyType } from '../../infrastructure/types/Currency.type'
import { useWishlistStore } from '../../store/useWishlistStore'

export default {
  name: 'HeaderBag',
  components: { BagIcon, StarIcon },
  setup: () => {
    const { totalItems, totalPrice } = useBagStore()
    const { totalWishItems } = useWishlistStore()

    return {
      totalItems,
      totalPrice: computed(() => formatPrice(totalPrice.value, CurrencyType.EUR)),
      totalWishItems,
    }
  },
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
  @apply fill-primary;
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
  @apply text-xxs;
  @apply text-white;
  @apply bg-blue;

  font-family: 'Lato-Bold', sans-serif;
}
</style>
