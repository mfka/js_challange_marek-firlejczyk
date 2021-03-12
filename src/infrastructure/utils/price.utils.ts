import { CurrencyType } from '../types/Currency.type'

export const formatPrice = (price: number, currency: CurrencyType, locale = 'it-IT') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(price)
