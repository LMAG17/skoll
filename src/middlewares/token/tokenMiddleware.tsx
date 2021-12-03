import { Dispatch } from 'react';
 import { setTokenCreator } from '../../redux/actions/token/TokenActionsCreators';
 

 export function setToken(token: string) {
   
   return function (dispatch: Dispatch<any>) {
     dispatch(
         setTokenCreator(token),
     );
   };
 }