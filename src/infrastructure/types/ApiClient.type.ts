import { AxiosInstance } from 'axios'
import { CurrencyType } from './Currency.type'
import { LanguageType } from './Language.type'

export type ApiClient = AxiosInstance

export const RequestLanguage = LanguageType.ITALIAN
export const RequestCurrency = CurrencyType.EUR
export const ApiVersion = '3.4.0'
