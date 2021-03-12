import { computed, readonly, ref } from 'vue'
import { Activity } from '../domain/Activity/Activity.entity'
import { countTotalPrice } from '../domain/Activity/Activity.implementation'

const store = ref(new Set<Activity>())

export const useBagStore = () => ({
  totalPrice: computed(() => countTotalPrice([...store.value])),
  addItem: (item: Activity) => store.value.add(item),
  removeItem: (itemToRemove: Activity) => store.value.delete(itemToRemove),
  items: readonly(store),
  totalItems: computed(() => store.value.size),
  clear: () => store.value.clear(),
  isInBag: (item: Activity) => store.value.has(item),
})
