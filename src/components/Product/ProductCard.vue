<template>
  <article class="product" itemscope itemtype="http://schema.org/Product">
    <figure class="product__image-wrapper">
      <img :src="coverUrl" class="product__image" alt="Product" itemprop="image" />
      <button class="product__wishlist-button button button--round button--wishlist" @click="toggleInWishlist">
        <StarIcon :class="{ 'icon--active': isInWishlist }" />
      </button>
    </figure>
    <div class="product__details">
      <h1 class="product__title" itemprop="brand">{{ product.title }}</h1>
      <p class="product__subtitle" itemprop="description">{{ product.description }}</p>
      <div class="product__price" itemscope itemtype="http://schema.org/Offer">
        <span v-if="discountedPrice" class="product__price--strike">{{ discountedPrice }}</span>
        <span :class="{ 'product__price--discounted': discountedPrice }" itemprop="price">
          {{ price }}
        </span>
      </div>
      <button
        v-if="!isInBag"
        data-testid="add-to-bag"
        class="product__add-to-cart button button--primary"
        @click="addToBag"
      >
        Add to Cart
      </button>
      <button
        v-else
        data-testid="remove-from-bag"
        class="product__add-to-cart button button--primary product__add-to-cart--remove"
        @click="removeFromBag"
      >
        Remove from Cart
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, PropType } from 'vue'
import { ProductType } from '../../infrastructure/types/ProductType'
import StarIcon from '../Icon/StarIcon.vue'
import { useBagStore } from '../../store/useBagStore'
import { formatPrice } from '../../infrastructure/utils/price.utils'
import { useWishlistStore } from '../../store/useWishlistStore'

export default {
  name: 'ProductCard',
  components: { StarIcon },
  props: {
    product: {
      required: true,
      type: Object as PropType<ProductType>,
    },
  },
  setup: props => {
    const { isInBag, addItem, removeItem } = useBagStore()
    const { isInWishlist, addWishItem, removeWishItem } = useWishlistStore()

    // eslint-disable-next-line prettier/prettier
    const discountedPrice = computed(() =>
      props.product.discountedPrice ? formatPrice(props.product.discountedPrice, props.product.currency) : undefined,
    )

    const price = computed(() => formatPrice(props.product.price, props.product.currency))

    return {
      toggleInWishlist: () => {
        isInWishlist(props.product) ? removeWishItem(props.product) : addWishItem(props.product)
      },
      addToBag: () => addItem(props.product),
      removeFromBag: () => removeItem(props.product),
      coverUrl: computed(() => `${props.product.coverUrl}?q=60&fit=crop&w=340&h=200`),
      discountedPrice,
      price,
      isInBag: computed(() => isInBag(props.product)),
      isInWishlist: computed(() => isInWishlist(props.product)),
    }
  },
}
</script>

<style lang="scss" scoped>
/* ==========================================================================
   Product
   ========================================================================== */
.product {
  @apply flex;
  @apply flex-col;
  @apply h-full;

  background-color: var(--primary-bg-color);

  /* ==========================================================================
   Product Image
   ========================================================================== */
  &__image {
    @apply max-w-full;
    @apply h-auto;
    @apply mx-auto;

    &-wrapper {
      @apply p-5;
      @apply relative;
      @apply text-center;
    }
  }

  /* ==========================================================================
   Product Details
   ========================================================================== */
  &__details {
    @apply flex;
    @apply flex-col;
    @apply text-center;
    @apply px-5;
    @apply pb-5;
    @apply pt-3;

    flex: 1 0 auto;
  }

  /* ==========================================================================
   Product Titles
   ========================================================================== */

  &__title {
    @apply uppercase;
    @apply pb-2;
    @apply text-sm;

    font-family: 'Lato-Bold', sans-serif;
    letter-spacing: 1.37px;
  }

  &__subtitle {
    @apply pb-2;
    @apply text-xs;

    line-height: 19px;
    letter-spacing: 0.43px;
    color: var(--grey);
  }

  /* ==========================================================================
   Product Prices
   ========================================================================== */

  &__price {
    @apply pb-5;
    @apply text-sm;

    font-family: 'Lato-Bold', sans-serif;
    letter-spacing: 2.33px;

    &--strike {
      @apply mr-4;
      @apply line-through;
    }

    &--discounted {
      color: var(--red);
    }
  }

  /* ==========================================================================
   Product actions
   ========================================================================== */

  &__wishlist-button {
    @apply w-10;
    @apply h-10;
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply rounded-full;
    @apply absolute;

    top: 10px;
    right: 10px;

    &:hover {
      border: 1px solid var(--primary-color);

      .icon {
        fill: var(--primary-color);
      }
    }

    &:focus {
      @apply outline-none;

      border: 1px solid var(--primary-color);
    }
  }

  &__add-to-cart {
    @apply w-full;

    margin-top: 10px;
    margin-top: auto;

    &:focus {
      @apply outline-none;

      border: 1px solid var(--primary-color);
    }

    &--remove {
      color: var(--primary-bg-color);
      background-color: var(--primary-color);
    }
  }
}
</style>
