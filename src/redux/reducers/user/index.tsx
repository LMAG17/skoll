import produce from 'immer';
 import { AppState, User } from '../../store/types';
 
 export function setUser(state: AppState, payload: User): AppState {
   return produce(state, (draft) => {
     draft.user = payload;
   });
 }