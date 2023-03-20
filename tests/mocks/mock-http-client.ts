import { IHttpPostClient, IHttpPostParams } from '@src/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string
  body?: object
  async post (params: IHttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
