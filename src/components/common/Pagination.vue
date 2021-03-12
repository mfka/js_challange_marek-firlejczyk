<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li v-if="hasPrev" class="pagination__item">
        <a class="pagination__link" @click="changePage(prevPage)">
          <ArrowLeftIcon />
        </a>
      </li>
      <li v-for="page in pages" :key="page" class="pagination__item">
        <a class="pagination__link" @click="changePage(page)"> {{ page }} </a>
      </li>
      <li class="pagination__item">
        <span class="pagination__link"> ... </span>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" @click="changePage(lastPage)"> {{ lastPage }} </a>
      </li>
      <li v-if="hasNext" class="pagination__item">
        <a class="pagination__link" @click="changePage(nextPage)">
          <ArrowRightIcon />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import ArrowLeftIcon from '../Icon/ArrowLeftIcon.vue'
import ArrowRightIcon from '../Icon/ArrowRightIcon.vue'

export default {
  name: 'Pagination',
  components: { ArrowLeftIcon, ArrowRightIcon },
  props: {
    current: {
      required: true,
      type: Number,
    },
    lastPage: {
      type: Number,
      default: 10,
    },
    pageRange: {
      type: Number,
      default: 3,
    },
  },
  emits: ['update:current'],
  setup: (props, { emit }) => {
    const currentPage = ref(props.current)

    const changePage = (page: number) => {
      currentPage.value = page
      emit('update:current', page)
    }

    return {
      changePage,
      pages: computed(() => Array.from({ length: props.pageRange }, (_, i) => ++i)),
      hasPrev: computed(() => currentPage.value > 1),
      hasNext: computed(() => currentPage.value < props.lastPage),
      prevPage: computed(() => currentPage.value - 1),
      nextPage: computed(() => currentPage.value + 1),
    }
  },
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
    @apply text-primary;

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
