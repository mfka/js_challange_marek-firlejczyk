import { CurrencyType } from './Currency.type'

export interface ProductType {
  id: string
  title: string
  description: string
  coverUrl: string
  discountedPrice?: number
  price: number
  currency: CurrencyType
}
