import { computed, readonly, ref } from 'vue'
import { Activity } from '../domain/Activity/Activity.entity'
import { countTotalPrice } from '../domain/Activity/Activity.implementation'

const store = ref<Activity[]>([])

export const useBagStore = () => {
  const isPresent = (item: Activity) => store.value.some(i => i.id === item.id)

  return {
    totalPrice: computed(() => countTotalPrice(store.value)),
    addItem: (item: Activity) => {
      if (!isPresent(item)) {
        store.value.push(item)
      }
    },
    removeItem: (item: Activity) => {
      store.value = store.value.filter(i => i.id !== item.id)
    },
    items: readonly(store),
    totalItems: computed(() => store.value.length),
    clear: () => (store.value = []),
    isInBag: (item: Activity) => isPresent(item),
  }
}
