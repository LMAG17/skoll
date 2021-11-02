import { ActionBuilder } from '../actions/types';
import { AppState, initialState } from '../store/types';

/**
 * Generic Reducer
 *
 * Get the function defined for action. This action is the reducer to generate a new state of application.
 *
 * @param {object} state Current state of application, if the value is undifined, it will get the initial state defined.
 * @param {ActionBuilder} action Reference of action creator that it would like to be excecute.
 * @returns {object} New state of application.
 */
export const reducer = (
  state: AppState = initialState,
  action: ActionBuilder<string, any, AppState>,
): AppState => (action.reducer ? action.reducer(state, action.payload) : state);
