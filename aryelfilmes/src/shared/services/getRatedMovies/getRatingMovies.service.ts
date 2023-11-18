import { AxiosInstance } from 'axios';
import { http } from '../../api/http';
import { GetMoviesOutputInterface } from "../../interfaces/getMovies.interface";

class GetRatingMovies {
  constructor(private readonly api: AxiosInstance) { }

  async execute(): Promise<GetMoviesOutputInterface> {
    const result = await this.api.get(`/top_rated?language=pt-BR&page=1`)

    return result.data
  }

}

const useGetRatingMovies = new GetRatingMovies(http)

export { GetRatingMovies, useGetRatingMovies };

