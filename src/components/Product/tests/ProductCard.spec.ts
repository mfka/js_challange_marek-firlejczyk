import { shallowMount } from '@vue/test-utils'
import { mockedActivityOne, mockedActivityThree, mockedActivityTwo } from '../../../domain/Activity/Activity.mock'
import { useBagStore } from '../../../store/useBagStore'
import { useWishlistStore } from '../../../store/useWishlistStore'
import ProductCard from '../ProductCard.vue'

describe('ProductCard Component', () => {
  test('render product properties', () => {
    const wrapper = shallowMount(ProductCard, {
      props: {
        product: mockedActivityOne,
      },
    })

    expect(wrapper.find('h1').text()).toBe(mockedActivityOne.title)
    expect(wrapper.find('.product__subtitle').text()).toBe(mockedActivityOne.description)
    expect(wrapper.find('.product__price span').text()).toContain(mockedActivityOne.price)
  })

  test('add product to BagStore on click', async () => {
    const { totalItems } = useBagStore()
    const wrapper = shallowMount(ProductCard, {
      props: {
        product: mockedActivityThree,
      },
    })

    const addButton = wrapper.find('[data-testid="add-to-bag"]')

    expect(addButton.exists()).toBe(true)

    await addButton.trigger('click')

    expect(totalItems.value).toBe(1)
  })

  test('remove product from BagStore on click', async () => {
    const { totalItems, addItem, items } = useBagStore()

    addItem(mockedActivityTwo)
    addItem(mockedActivityThree)

    const wrapper = shallowMount(ProductCard, {
      props: {
        product: mockedActivityTwo,
      },
    })

    const removeButton = wrapper.find('[data-testid="remove-from-bag"]')

    expect(removeButton.exists()).toBe(true)

    await removeButton.trigger('click')

    expect(totalItems.value).toBe(1)
    expect(items.value.has(mockedActivityTwo)).toBe(false)
    expect(items.value.has(mockedActivityThree)).toBe(true)
  })

  test('toggle product in WishlistStore on click', async () => {
    const { addWishItem, totalWishItems } = useWishlistStore()

    addWishItem(mockedActivityThree)

    const wrapper = shallowMount(ProductCard, {
      props: {
        product: mockedActivityThree,
      },
    })

    const whishButton = wrapper.find('.button--wishlist')

    expect(whishButton.exists()).toBe(true)
    expect(totalWishItems.value).toBe(1)

    await whishButton.trigger('click')

    expect(totalWishItems.value).toBe(0)
  })
})
