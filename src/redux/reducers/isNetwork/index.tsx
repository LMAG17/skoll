import produce from 'immer';
import { AppState } from '../../store/types';
 
 export function setIsNetwork(state: AppState, payload: boolean): AppState {
   return produce(state, (draft) => {
     draft.isNetwork = payload;
   });
 }