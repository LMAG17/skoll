import { Dispatch } from 'react';
 import { setSessionIdCreator } from '../../redux/actions/sessionId/SessionIdActionsCreators';
 

 export function setSessionId(sessionId: String) {
   
   return function (dispatch: Dispatch<any>) {
     dispatch(
         setSessionIdCreator(sessionId),
     );
   };
 }