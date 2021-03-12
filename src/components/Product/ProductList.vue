<template>
  <main class="product-page">
    <div class="container">
      <ul class="product-list">
        <li v-for="(activity, index) in activities" :key="index" class="product-list__item">
          <ProductCard :product="activity" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { useActivityStore } from '../../store/useActivityStore'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: { ProductCard },
  setup: () => {
    const { load: loadActivities, activities } = useActivityStore()

    loadActivities()

    return {
      activities,
    }
  },
}
</script>

<style scoped>
.product-list {
  @apply grid;
  @apply grid-cols-1;
  @apply gap-4;

  @screen md {
    @apply grid-cols-2;
  }

  @screen lg {
    @apply grid-cols-3;
  }
}
</style>
