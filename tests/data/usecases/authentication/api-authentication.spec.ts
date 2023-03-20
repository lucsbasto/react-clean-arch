import { HttpPostClientSpy } from '@/tests/mocks/mock-http-client'
import { ApiAuthentication } from '@/src/data/usecases/authentication/api-authentication'
import { faker } from '@faker-js/faker'
type SutTypes = {
  sut: ApiAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new ApiAuthentication(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('ApiAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
