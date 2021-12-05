import { Dispatch } from 'react';
 import { setValidateOtpCreator } from '../../redux/actions/validateOtp/ValidateOtpActionsCreators';
 

 export function setValidateOtp(validateOtp: any) {
   
  return async function (dispatch: Dispatch<any>) {
    try {
      const response = await fetch(
        validateOtp.url,
        {
          method: validateOtp.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(validateOtp.body)
        }
      );
      const responseJson = await response.json();
      dispatch(setValidateOtpCreator(responseJson));
      validateOtp.props
    } catch (error) {
      console.error(error);
      dispatch(setValidateOtpCreator({ error: "Hubo un error obteniendo la data" }));
    }
   };
 }