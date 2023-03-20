import { AxiosHttpAdapter } from '@src/infra/http/axios-http-adapter'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { IHttpPostParams } from '@src/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedAxiosResult = {
  data: faker.random.words(),
  status: faker.internet.httpStatusCode()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpAdapter => {
  return new AxiosHttpAdapter()
}

const mockedPostRequest = (): IHttpPostParams<any> => {
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
    const request = mockedPostRequest()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockedPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
