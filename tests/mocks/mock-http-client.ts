import { IHttpPostClient, IHttpPostParams } from '@src/data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@src/data/protocols/http/http-response'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: IHttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
