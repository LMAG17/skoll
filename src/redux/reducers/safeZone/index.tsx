import produce from 'immer';
 import { AppState } from '../../store/types';
 
 export function setSafeZone(state: AppState, payload: Boolean): AppState {
   return produce(state, (draft) => {
     draft.safeZone = payload;
   });
 }