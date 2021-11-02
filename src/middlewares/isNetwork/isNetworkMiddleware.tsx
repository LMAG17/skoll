import { Dispatch } from 'react';
 import { setIsNetworkCreator } from '../../redux/actions/isNetwork/IsNetworkActionsCreators';

 export function setIsNetwork(isNetwork: boolean) {
   
   return function (dispatch: Dispatch<any>) {
     dispatch(
         setIsNetworkCreator(isNetwork),
     );
   };
 }