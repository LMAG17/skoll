import produce from 'immer';
 import { AppState } from '../../store/types';
 
 export function setRegister(state: AppState, payload: Object): AppState {
   return produce(state, (draft) => {
     draft.register = payload;
   });
 }