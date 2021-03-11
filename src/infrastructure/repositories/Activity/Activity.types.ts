import { CurrencyType } from '../../types/Currency.type'

export interface Price {
  value: number
  currency: CurrencyType
}

export interface ActivityResponseDTO {
  uuid: string
  title: string
  description: string
  coverImageUrl: string
  discount: number
  retailPrice: Price
  netPrice?: Price
}
