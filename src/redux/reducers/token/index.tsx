import produce from 'immer';
 import { AppState } from '../../store/types';
 
 export function setToken(state: AppState, payload: string): AppState {
   return produce(state, (draft) => {
     draft.token = payload;
   });
 }