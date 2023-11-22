import { AxiosInstance } from 'axios';
import { http } from '../../api/http';
import { GetUpComingMoviesOutputInterface } from "../../interfaces/getMovies.interface";

class GetUpComingMovies {
  constructor(private readonly api: AxiosInstance) { }

  async execute(): Promise<GetUpComingMoviesOutputInterface> {
    const result = await this.api.get(`movie/upcoming?language=pt-BR&page=1`)

    return result.data
  }

}

const useGetUpComingMovies = new GetUpComingMovies(http)

export { GetUpComingMovies, useGetUpComingMovies };

