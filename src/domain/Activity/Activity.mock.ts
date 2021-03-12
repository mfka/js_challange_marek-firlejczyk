import { CurrencyType } from '../../infrastructure/types/Currency.type'
import { Activity } from './Activity.entity'

export const mockedActivityOne: Activity = {
  id: Math.floor(Math.random() * 100).toString(),
  currency: CurrencyType.EUR,
  price: 6.66,
  title: 'First Activity',
  description: 'some string',
  coverUrl: 'http://image.com/activity.png',
}
export const mockedActivityTwo: Activity = {
  id: Math.floor(Math.random() * 100).toString(),
  currency: CurrencyType.EUR,
  price: 7.77,
  title: 'Second Activity',
  description: 'some string',
  coverUrl: 'http://image.com/activity2.png',
}

export const mockedActivityThree: Activity = {
  id: Math.floor(Math.random() * 100).toString(),
  currency: CurrencyType.EUR,
  price: 8.88,
  title: 'Third Activity',
  description: 'some string',
  coverUrl: 'http://image.com/activity3.png',
}
