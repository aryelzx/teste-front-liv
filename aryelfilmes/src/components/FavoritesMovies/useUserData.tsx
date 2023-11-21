import { useState } from 'react';
import { GetUserDataOutput } from '../../shared/interfaces/getUserData.interface';
import { useGetUserDataService } from '../../shared/services/getUserData/getUserData.service';

function UseUserData() {
  const [userData, setUserData] = useState({} as GetUserDataOutput)

  async function GetDataUser() {
    try {
      const id = 15380135;
      const response = await useGetUserDataService.execute(id)
      setUserData(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  return {
    GetDataUser,
    userData
  }
}

export { UseUserData };

