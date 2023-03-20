import { AuthenticationParams, IAuthentication } from '@src/domain/usecases'
import { IHttpPostClient, HttpStatusCode } from '@src/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@src/domain/errors'
import { AccountModel } from '@src/domain/models'

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
