import { AxiosInstance } from 'axios';
import { assert, beforeEach, describe, expect, test, vi } from "vitest";
import { GetUserDataOutput } from '../../interfaces/getUserData.interface';
import { GetUserDataService } from './getUserData.service';

describe('getUserData', () => {
  let sut: GetUserDataService;
  let mockApi: AxiosInstance;

  beforeEach(() => {
    mockApi = {
      get: vi.fn().mockImplementation(() => Promise.resolve({ data: expectedResponse, status: 200 })),
    } as unknown as AxiosInstance;
    sut = new GetUserDataService(mockApi);
  });

  const expectedResponse: GetUserDataOutput = {
    avatar: {
      gravatar: {
        hash: "123"
      },
      tmdb: {
        avatar_path: "test.jpg"
      }
    },
    id: 123,
    iso_639_1: "pt",
    iso_3166_1: "BR",
    name: "ARYEL CORDEIRO RAMOS GONÇALVES",
    include_adult: false,
    username: "aryelzx"
  }

  test('should be instance was created correctly', () => {
    assert(sut instanceof GetUserDataService);
  });


  test('should return a data of user', async () => {
    const id = 15380135;
    const response = await sut.execute(id);
    expect(response).toEqual(expectedResponse);
  });

})