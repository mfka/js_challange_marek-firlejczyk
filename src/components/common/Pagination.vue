<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          <ArrowLeftIcon />
        </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link"> 1 </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link"> 2 </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link"> 3 </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link"> ... </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link"> 10 </a>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link">
          <ArrowRightIcon />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import ArrowLeftIcon from '../Icon/ArrowLeftIcon.vue'
import ArrowRightIcon from '../Icon/ArrowRightIcon.vue'

export default {
  name: 'Pagination',
  components: { ArrowLeftIcon, ArrowRightIcon },
}
</script>

<style lang="scss" scoped>
.pagination {
  height: 45px;
  margin: 30px auto;
  text-align: center;

  &__list {
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }

  &__item {
    height: 100%;
    width: 45px;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 13px;
    letter-spacing: 1.39px;
    text-align: center;
  }

  &__link {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444a59;
    &:hover {
      text-decoration: underline;
    }
    & .icon {
      width: 8px;
      fill: #444a59;
    }
  }
}
</style>
