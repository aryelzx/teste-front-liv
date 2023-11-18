import { useState } from 'react'
import { GetDataHeaderOutputDTO } from './usecases/getDataHeader.dto'
import { useGetUserData } from './usecases/getDataHeader.service'
function useHeader() {
  const [movies, setMovies] = useState<GetDataHeaderOutputDTO>({} as GetDataHeaderOutputDTO)


  const getMovies = async () => {
    try {
      const response = await useGetUserData.execute()
      setMovies(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  return {
    getMovies,
    movies
  }
}

export default useHeader