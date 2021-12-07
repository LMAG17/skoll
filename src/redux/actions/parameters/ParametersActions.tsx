import { AppState } from '../../store/types';
import { ActionBuilder } from '../types';

export enum ParametersActionTypes {
  getParameters = 'GET_PARAMETERS',
}

export type SetParametersAction = ActionBuilder<
  ParametersActionTypes.getParameters,
  Object,
  AppState
>;

export type ParametersActions = SetParametersAction;