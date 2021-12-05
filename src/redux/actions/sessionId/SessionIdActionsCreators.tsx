import { setSessionId } from '../../reducers/sessionId';
 import { SessionIdActionTypes, SetSessionIdAction } from './SessionIdActions';
 
 
 
 export const setSessionIdCreator = (payload: String): SetSessionIdAction => ({
   type: SessionIdActionTypes.getSessionId,
   payload,
   reducer: setSessionId,
 });