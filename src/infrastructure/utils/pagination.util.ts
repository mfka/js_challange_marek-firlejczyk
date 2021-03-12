import { PaginationParams } from '../types/PaginationParams.type'

export const getPageNumber = (limit: number, offset: number, total: number) => {
  if (offset >= total) {
    throw Error('PageNumber is out of range')
  }

  return offset / limit + 1
}

export const getPaginationParamsFromPage = (page: number, limit: number): PaginationParams => ({
  offset: (page - 1) * limit,
  limit,
})
