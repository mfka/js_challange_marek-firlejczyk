import { computed, ref, watch } from 'vue'
import { Activity } from '../domain/Activity/Activity.entity'
import { activityRepository } from '../infrastructure/repositories'
import { mapActivityToEntity } from '../infrastructure/repositories/Activity/Activity.mapper'
import { PaginationParams } from '../infrastructure/types/PaginationParams.type'
import { getPageNumber, getPaginationParamsFromPage } from '../infrastructure/utils/pagination.util'

const activities = ref<Activity[]>([])
const offset = ref(0)
const limit = ref(6)

export const useActivityStore = () => {
  const total = 60

  const page = ref(getPageNumber(limit.value, offset.value, total))

  const load = () =>
    activityRepository
      .getAll({ offset: offset.value, limit: limit.value })
      .then(({ data }) => data.map(mapActivityToEntity))
      .then(data => {
        activities.value = data
      })

  const setPagination = (paginationParams: PaginationParams) => {
    offset.value = paginationParams.offset
    limit.value = paginationParams.limit

    load()
  }

  return {
    activities: computed(() => activities.value),
    load,
    setPagination,
    currentPage: computed({
      get: () => page.value,
      set: page => {
        setPagination(getPaginationParamsFromPage(page, limit.value))
      },
    }),
  }
}
