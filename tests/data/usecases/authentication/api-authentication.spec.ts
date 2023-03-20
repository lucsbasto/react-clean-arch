import { HttpPostClientSpy } from '@/tests/mocks/mock-http-client'
import { ApiAuthentication } from '@/src/data/usecases/authentication/api-authentication'

describe('ApiAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new ApiAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
