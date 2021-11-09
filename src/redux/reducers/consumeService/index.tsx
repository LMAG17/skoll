import produce from 'immer';
import { AppState } from '../../store/types';

export function setConsumeService(state: AppState, payload: Object): AppState {
  return produce(state, (draft) => {
    draft.serviceResponse = payload;
  });
}