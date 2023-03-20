import { IHttpPostClient, IHttpPostParams, IHttpResponse, HttpStatusCode } from '@src/data/protocols/http'

export class HttpPostClientSpy<T, R> implements IHttpPostClient<T, R> {
  url?: string
  body?: T
  response: IHttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: IHttpPostParams<T>): Promise<IHttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
