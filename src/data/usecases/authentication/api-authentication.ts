import { AuthenticationParams, IAuthentication } from '@src/domain/usecases/authentication'
import { IHttpPostClient } from '@src/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@src/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@src/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@src/domain/errors/unexpected-error'
import { AccountModel } from '@src/domain/models/account-model'

export class ApiAuthentication implements IAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const response = await this.httpPostClient.post({ url: this.url, body: params })
    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
