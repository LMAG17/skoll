import produce from 'immer';
 import { AppState } from '../../store/types';
 
 export function setSessionId(state: AppState, payload: String): AppState {
   return produce(state, (draft) => {
     draft.sessionId = payload;
   });
 }