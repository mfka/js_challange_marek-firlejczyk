import { mockedActivityOne, mockedActivityThree, mockedActivityTwo } from '../../domain/Activity/Activity.mock'
import { useBagStore } from '../useBagStore'

describe('#useBagStore', () => {
  const { clear, totalPrice, items, removeItem, addItem, totalItems, isInBag } = useBagStore()

  afterEach(clear)

  describe('should have empty bag ', () => {
    test('when clear method was called', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)
      addItem(mockedActivityThree)

      expect(items.value.size).toBe(3)

      clear()

      expect(items.value.size).toBe(0)
    })

    test('when all items were removed manually', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)
      addItem(mockedActivityThree)

      expect(items.value.size).toBe(3)

      removeItem(mockedActivityOne)
      removeItem(mockedActivityTwo)
      removeItem(mockedActivityThree)

      expect(items.value.size).toBe(0)
    })
  })

  describe('should contains only unique list of values', () => {
    test('when same item was added', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityOne)

      expect(items.value.size).toBe(1)
      expect(items.value.has(mockedActivityOne)).toBe(true)
    })
  })

  describe('should remove item', () => {
    test(' when exists', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)

      removeItem(mockedActivityThree)

      expect(items.value.size).toBe(2)

      removeItem(mockedActivityOne)

      expect(items.value.size).toBe(1)
      expect(items.value.has(mockedActivityTwo)).toBe(true)
    })
  })

  describe('should recalculate totalPrice', () => {
    it('when item was added', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)

      expect(totalPrice.value).toBe(mockedActivityOne.price + mockedActivityTwo.price)
    })

    it('when item was removed', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)

      removeItem(mockedActivityOne)

      expect(totalPrice.value).toBe(mockedActivityTwo.price)
    })
  })

  describe('should recalculate totalItems', () => {
    it('when item was added', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)

      expect(totalItems.value).toBe(2)
    })

    it('when item was removed', () => {
      addItem(mockedActivityOne)
      addItem(mockedActivityTwo)

      removeItem(mockedActivityOne)

      expect(totalItems.value).toBe(1)
    })
  })

  describe('should check if item isInBag', () => {
    it('when item exists return true', () => {
      addItem(mockedActivityOne)

      expect(isInBag(mockedActivityOne)).toBe(true)
    })

    it('when item not exists return false', () => {
      expect(isInBag(mockedActivityThree)).toBe(false)
    })
  })
})
