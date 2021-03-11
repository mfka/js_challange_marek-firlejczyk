import { ApiClient, ApiVersion, RequestCurrency, RequestLanguage } from '../../types/ApiClient.type'
import { PaginationParams } from '../../types/PaginationParams.type'
import { ActivityResponseDTO } from './Activity.types'

const getAll = (client: ApiClient) => (paginationParams: PaginationParams) =>
  client.get<ActivityResponseDTO[]>('/v3/venues/164/activities', {
    params: paginationParams,
    headers: {
      'accept-language': RequestLanguage,
      'x-musement-currency': RequestCurrency,
      'x-musement-version': ApiVersion,
    },
  })

export default (client: ApiClient) => ({
  getAll: getAll(client),
})
