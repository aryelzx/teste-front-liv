import { AxiosInstance } from 'axios';
import { http } from '../../api/http';
import { GetUserDataOutput } from '../../interfaces/getUserData.interface';

class GetUserDataService {
  constructor(private readonly api: AxiosInstance) { }

  async execute(params: number): Promise<GetUserDataOutput> {
    const result = await this.api.get(`/account/${params}`)

    return result.data
  }

}

const useGetUserDataService = new GetUserDataService(http)

export { GetUserDataService, useGetUserDataService };

