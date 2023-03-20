import { AxiosHttpAdapter } from '@src/infra/http/axios-http-adapter'
import { mockAxios, mockedPostRequest } from '@tests/mocks'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpAdapter
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpAdapter()
  const mockedAxios = mockAxios()
  return {
    sut, mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const { sut, mockedAxios } = makeSut()
    const request = mockedPostRequest()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('Should return the correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const mockedAxiosResolvedValue = mockedAxios.post.mock.results[0].value
    const promise = sut.post(mockedPostRequest())
    expect(promise).toEqual(mockedAxiosResolvedValue)
  })
})
