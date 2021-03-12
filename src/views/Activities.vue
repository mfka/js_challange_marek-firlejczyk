<template>
  <Header>
    <HeaderBag />
  </Header>
  <ProductList />
  <Pagination v-model:current="currentPage" />
  <Footer />
</template>

<script lang="ts">
import Footer from '../components/common/Footer.vue'
import Header from '../components/common/Header.vue'
import HeaderBag from '../components/Header/HeaderBag.vue'
import ProductList from '../components/Product/ProductList.vue'
import Pagination from '../components/common/Pagination.vue'
import { useActivityStore } from '../store/useActivityStore'

export default {
  name: 'Activities',
  components: { Header, Footer, HeaderBag, ProductList, Pagination },
  setup: () => {
    const { currentPage } = useActivityStore()
    return {
      currentPage,
    }
  },
}
</script>
