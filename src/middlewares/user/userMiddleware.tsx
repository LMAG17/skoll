import { Dispatch } from 'react';
 import { setUserCreator } from '../../redux/actions/user/UserActionsCreators';
 import { User } from '../../redux/store/types';

 export function setUser(user: User) {
   
   return function (dispatch: Dispatch<any>) {
     dispatch(
         setUserCreator(user),
     );
   };
 }