import produce from 'immer';
 import { AppState } from '../../store/types';
 
 export function setServiceOtp(state: AppState, payload: Object): AppState {
   return produce(state, (draft) => {
     draft.serviceOtp = payload;
   });
 }