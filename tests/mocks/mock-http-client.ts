import { IHttpPostClient, IHttpPostParams, HttpResponse, HttpStatusCode } from '@src/data/protocols/http'

export class HttpPostClientSpy<T, R> implements IHttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: IHttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
