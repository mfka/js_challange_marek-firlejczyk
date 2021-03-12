import { computed, ref } from 'vue'
import { Activity } from '../domain/Activity/Activity.entity'

const store = ref<Activity[]>([])

export const useWishlistStore = () => {
  const isPresent = (item: Activity) => store.value.some(i => i.id === item.id)

  return {
    addWishItem: (item: Activity) => {
      if (!isPresent(item)) {
        store.value.push(item)
      }
    },
    removeWishItem: (item: Activity) => {
      store.value = store.value.filter(i => i.id !== item.id)
    },
    totalWishItems: computed(() => store.value.length),
    isInWishlist: (item: Activity) => isPresent(item),
  }
}
