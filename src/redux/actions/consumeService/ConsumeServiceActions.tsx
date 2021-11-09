import { AppState } from '../../store/types';
import { ActionBuilder } from '../types';

export enum ConsumeServiceActionTypes {
  getConsumeService = 'GET_CONSUMESERVICE',
}

export type SetConsumeServiceAction = ActionBuilder<
  ConsumeServiceActionTypes.getConsumeService,
  Object,
  AppState
>;

export type ConsumeServiceActions = SetConsumeServiceAction;