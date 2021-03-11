<template>
  <main class="product-page">
    <div class="container">
      <ul class="product-list">
        <li v-for="i in new Array(6)" :key="i" class="product-list__item">
          <ProductCard></ProductCard>
        </li>
      </ul>
      <Pagination />
    </div>
  </main>
</template>

<script lang="ts">
import Pagination from '../common/Pagination.vue'
import ProductCard from './ProductCard.vue'

export default {
  name: 'PageList',
  components: { ProductCard, Pagination },
}
</script>
