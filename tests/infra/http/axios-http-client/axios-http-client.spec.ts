import { AxiosHttpClient } from '@src/infra/http/axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { IHttpPostParams } from '@src/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): IHttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: {
      email: faker.internet.email,
      password: faker.internet.password
    }
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const sut = makeSut()
    const request = mockPostRequest()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
