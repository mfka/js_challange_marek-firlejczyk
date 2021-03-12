import { computed, ref } from 'vue'
import { Activity } from '../domain/Activity/Activity.entity'

const store = ref(new Set<Activity>())

export const useWishlistStore = () => ({
  addWishItem: (item: Activity) => store.value.add(item),
  removeWishItem: (itemToRemove: Activity) => store.value.delete(itemToRemove),
  totalWishItems: computed(() => store.value.size),
  isInWishlist: (item: Activity) => store.value.has(item),
})
