import { faker } from '@faker-js/faker'
import { IHttpPostParams } from '@src/data/protocols/http'

export const mockedPostRequest = (): IHttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: {
      email: faker.internet.email,
      password: faker.internet.password
    }
  }
}
