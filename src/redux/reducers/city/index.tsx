import produce from 'immer';
 import { AppState} from '../../store/types';
 
 export function setCity(state: AppState, payload: string): AppState {
   return produce(state, (draft) => {
     draft.city = payload;
   });
 }