import { Activity } from '../Activity.entity'
import { countTotalPrice } from '../Activity.implementation'
import { mockedActivityOne, mockedActivityThree, mockedActivityTwo } from '../Activity.mock'

describe('#countTotalPrice', () => {
  test('return total price of all items', () => {
    const items: Activity[] = [mockedActivityOne, mockedActivityThree, mockedActivityTwo]
    const total = mockedActivityOne.price + mockedActivityTwo.price + mockedActivityThree.price

    expect(countTotalPrice(items)).toBe(total)
  })

  test('return total price with duplicates', () => {
    const items: Activity[] = [
      mockedActivityOne,
      mockedActivityThree,
      mockedActivityTwo,
      mockedActivityOne,
      mockedActivityThree,
      mockedActivityTwo,
      mockedActivityOne,
      mockedActivityThree,
      mockedActivityTwo,
    ]
    const total = (mockedActivityOne.price + mockedActivityTwo.price + mockedActivityThree.price) * 3

    expect(countTotalPrice(items)).toBe(total)
  })
})
