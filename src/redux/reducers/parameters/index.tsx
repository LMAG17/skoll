import produce from 'immer';
import { AppState } from '../../store/types';

export function setParameters(state: AppState, payload: Object): AppState {
  return produce(state, (draft) => {
    draft.parameters = payload;
  });
}