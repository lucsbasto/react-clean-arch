import { AuthenticationParams } from '@src/domain/usecases/authentication'
import { IHttpPostClient } from '@src/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@src/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@src/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@src/domain/errors/unexpected-error'

export class ApiAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const response = await this.httpPostClient.post({ url: this.url, body: params })
    switch (response.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
