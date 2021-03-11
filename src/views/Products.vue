<template>
  <Header>
    <HeaderBag />
  </Header>
  <ProductList />
  <Footer />
</template>

<script lang="ts">
import Footer from '../components/common/Footer.vue'
import Header from '../components/common/Header.vue'
import HeaderBag from '../components/Header/HeaderBag.vue'
import ProductList from '../components/Product/ProductList.vue'

export default {
  name: 'Products',
  components: { Header, Footer, HeaderBag, ProductList },
}
</script>
