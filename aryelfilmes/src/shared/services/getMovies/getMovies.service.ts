import { AxiosInstance } from 'axios';
import { http } from '../../../shared/api/http';
import { GetMoviesOutputDto } from './getMovies.dto';

class GetUserData {
  constructor(private readonly api: AxiosInstance) { }

  async execute(): Promise<GetMoviesOutputDto> {
    const result = await this.api.get(`/popular?language=pt-BR&page=1`)

    return result.data
  }

}

const useGetUserData = new GetUserData(http)

export { GetUserData, useGetUserData };

