import { Dispatch } from 'react';
 import { setRegisterCreator } from '../../redux/actions/register/RegisterActionsCreators';
 

 export function setRegister(register: any) {
   
   return async function (dispatch: Dispatch<any>) {
    try {
      const response = await fetch(
        register.url,
        {
          method: register.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(register.body)
        }
      );
      const responseJson = await response.json();
      dispatch(setRegisterCreator(responseJson));
    } catch (error) {
      console.error(error);
      dispatch(setRegisterCreator({ error: "Hubo un error obteniendo la data" }));
    }
   };
 }