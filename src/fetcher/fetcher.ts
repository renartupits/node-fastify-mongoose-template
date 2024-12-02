import axios, {AxiosResponse} from 'axios'

export type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE'

export const fetchWithoutAuthorization = async <T> (url: string, method: HttpMethod, body?: string): Promise<T> => {
  return axios.request({
    url,
    headers: {
      ...body && {'content-type': 'application/json'}
    },
    method,
    data: body
  })
    .then(data => handleAxiosResponse<T>(data))
}

export const handleAxiosResponse = <T>(response: AxiosResponse) => {
  return response.data as T
}
