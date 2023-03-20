import { HttpResponse } from './http-response'

export type IHttpPostParams<T> = {
  url: string
  body?: T
}

export interface IHttpPostClient<T, R> {
  post: (params: IHttpPostParams<T>) => Promise<HttpResponse<R>>
}
