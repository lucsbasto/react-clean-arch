import { IHttpPostClient, IHttpPostParams, IHttpResponse } from '@src/data/protocols/http'
import axios from 'axios'

export class AxiosHttpAdapter implements IHttpPostClient<any, any> {
  async post (params: IHttpPostParams<any>): Promise<IHttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
