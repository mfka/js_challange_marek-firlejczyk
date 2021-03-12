import { Activity } from './Activity.entity'

export const countTotalPrice = (items: Activity[]) =>
  [...items].map(item => item.price).reduce((prev, next) => prev + next, 0)
