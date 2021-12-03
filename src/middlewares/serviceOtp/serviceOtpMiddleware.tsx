import { Dispatch } from 'react';
 import { setServiceOtpCreator } from '../../redux/actions/serviceOtp/ServiceOtpActionsCreators';
 

 export  function setServiceOtp(consumeserviceOtp: any) {
   
   return async function (dispatch: Dispatch<any>) {
    try {
      const response = await fetch(
        consumeserviceOtp.url,
        {
          method: consumeserviceOtp.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(consumeserviceOtp.body)
        }
      );
      const responseJson = await response.json();
      dispatch(setServiceOtpCreator(responseJson));
    } catch (error) {
      console.error(error);
      dispatch(setServiceOtpCreator({ error: "Hubo un error obteniendo la data" }));
    }
   };
 }