import { AxiosInstance } from 'axios';
import { http } from '../../api/http';
import { GetMoviesOutputInterface } from "../../interfaces/getMovies.interface";

class GetFamousMovies {
  constructor(private readonly api: AxiosInstance) { }

  async execute(): Promise<GetMoviesOutputInterface> {
    const result = await this.api.get(`movie/popular?language=pt-BR&page=1`)

    return result.data
  }

}

const useGetFamousMovies = new GetFamousMovies(http)

export { GetFamousMovies, useGetFamousMovies };

