import produce from 'immer';
 import { AppState } from '../../store/types';
 
 export function setValidateOtp(state: AppState, payload: Object): AppState {
   return produce(state, (draft) => {
     draft.validateOtp = payload;
   });
 }