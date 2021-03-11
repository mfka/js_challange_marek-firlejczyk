<template>
  <article class="product" itemscope itemtype="http://schema.org/Product">
    <figure class="product__image-wrapper">
      <button class="product__wishlist-button button button--round button--wishlist">
        <StarIcon />
      </button>
    </figure>
    <div class="product__details">
      <h1 class="product__title" itemprop="brand">Product Title</h1>
      <p class="product__subtitle" itemprop="description">Product Description</p>
      <div class="product__price" itemscope itemtype="http://schema.org/Offer">
        <span class="product__price--strike">£210</span
        ><span class="product__price--discounted" itemprop="price">£210</span>
      </div>
      <button class="product__add-to-cart button button--primary">Add to Cart</button>
    </div>
  </article>
</template>

<script lang="ts">
import StarIcon from '../Icon/StarIcon.vue'

export default {
  name: 'ProductCard',
  components: { StarIcon },
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
}

/* ==========================================================================
   Product Image
   ========================================================================== */

.product__image-wrapper {
  @apply p-5;
  @apply relative;
  @apply text-center;
}

.product__image {
  @apply max-w-full;
  @apply h-auto;
  @apply mx-auto;
}

/* ==========================================================================
   Product Details
   ========================================================================== */

.product__details {
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

.product__title {
  @apply uppercase;
  @apply pb-2;
  @apply text-sm;

  font-family: 'Lato-Bold', sans-serif;
  letter-spacing: 1.37px;
}

.product__subtitle {
  @apply pb-2;
  @apply text-xs;

  line-height: 19px;
  letter-spacing: 0.43px;
  color: var(--grey);
}

/* ==========================================================================
   Product Prices
   ========================================================================== */

.product__price {
  @apply pb-5;
  @apply text-sm;

  font-family: 'Lato-Bold', sans-serif;
  letter-spacing: 2.33px;
}

.product__price--strike {
  @apply mr-4;
  @apply line-through;
}

.product__price--discounted {
  color: var(--red);
}

/* ==========================================================================
   Product actions
   ========================================================================== */

.product__wishlist-button {
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

.product__add-to-cart {
  @apply w-full;

  margin-top: 10px;
  margin-top: auto;

  &:focus {
    @apply outline-none;

    border: 1px solid var(--primary-color);
  }
}

.product__add-to-cart--remove {
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
}
</style>
