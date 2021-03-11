import { Activity } from '../../../domain/Activity/Activity.entity'
import { ActivityResponseDTO, Price } from './Activity.types'

const isDiscounted = (activity: ActivityResponseDTO): activity is ActivityResponseDTO & { netPrice: Price } =>
  activity.netPrice !== undefined && activity.discount > 0

export const mapActivityToEntity = (activity: ActivityResponseDTO): Activity => ({
  id: activity.uuid,
  title: activity.title,
  description: activity.description,
  coverUrl: activity.coverImageUrl,
  discountedPrice: isDiscounted(activity) ? activity.netPrice.value : undefined,
  price: isDiscounted(activity) ? activity.netPrice.value : activity.retailPrice.value,
  currency: activity.retailPrice.currency,
})
