import { getPaginationParamsFromPage } from '../pagination.util'

describe('#getPaginationParamsFromPage', () => {
  test('return limit and offset for page', () => {
    const limit = 6
    expect(getPaginationParamsFromPage(1, limit)).toStrictEqual({ limit, offset: 0 })
    expect(getPaginationParamsFromPage(2, limit)).toStrictEqual({ limit, offset: 6 })
    expect(getPaginationParamsFromPage(3, limit)).toStrictEqual({ limit, offset: 12 })
  })
})
