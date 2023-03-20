import { IHttpPostParams } from '@src/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: IHttpPostParams<any>): Promise<void> {
    await axios(params.url)
  }
}
