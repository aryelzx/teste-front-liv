import { AxiosInstance } from 'axios';
import { assert, beforeEach, describe, expect, test, vi } from "vitest";
import { GetMoviesOutputInterface } from '../../interfaces/getMovies.interface';
import { GetFamousMovies } from './getFamousMovies.service';

describe('getFamousMovies', () => {
    let sut: GetFamousMovies;
    let mockApi: AxiosInstance;

    beforeEach(() => {
        mockApi = {
            get: vi.fn().mockImplementation(() => Promise.resolve({data: expectedResponse, status: 200})),
        } as unknown as AxiosInstance;
        sut = new GetFamousMovies(mockApi);
    });

    const expectedResponse:GetMoviesOutputInterface = {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: 'teste',
                genre_ids: [1,2,3],
                id: 123,
                original_language: 'teste',
                original_title: 'teste',
                overview: 'teste',
                popularity: 123,
                poster_path: 'teste',
                release_date: 123,
                title: 'teste',
                video: false,
                vote_average: 123,
                vote_count: 123
            }
        ],
    }

    test('should be instance was created correctly', () => {
		assert(sut instanceof GetFamousMovies);
	});


    test('should return a list of rating movies', async () => {
        const response = await sut.execute();
        expect(response).toEqual(expectedResponse);
    });

})