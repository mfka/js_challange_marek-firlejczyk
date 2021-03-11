import { computed, ref } from 'vue'
import { Activity } from '../domain/Activity/Activity.entity'
import { activityRepository } from '../infrastructure/repositories'
import { mapActivityToEntity } from '../infrastructure/repositories/Activity/Activity.mapper'

export const useActivityStore = () => {
  const activities = ref<Activity[]>([])
  const offset = ref(0)
  const limit = ref(6)

  const setOffset = (number: number) => (offset.value = number)
  const setLimit = (number: number) => (limit.value = number)

  const load = () =>
    activityRepository
      .getAll({ offset: offset.value, limit: limit.value })
      .then(({ data }) => data.map(mapActivityToEntity))
      .then(data => (activities.value = data))

  return {
    activities: computed(() => activities.value),
    load,
    setOffset,
    setLimit,
  }
}
