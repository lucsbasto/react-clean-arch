import { HttpResponse } from './http-response'

export type IHttpPostParams = {
  url: string
  body?: object
}

export interface IHttpPostClient {
  post: (params: IHttpPostParams) => Promise<HttpResponse>
}
