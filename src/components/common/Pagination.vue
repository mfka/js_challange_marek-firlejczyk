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
