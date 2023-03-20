import { AuthenticationParams } from '@/src/domain/usecases/authentication'
import { IHttpPostClient } from 'data/protocols/http/http-post-client'

export class ApiAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: params })
  }
}
