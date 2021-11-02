import { AppState } from '../../store/types';
import { ActionBuilder } from '../types';

export enum SafeZoneActionTypes {
  getSafeZone = 'GET_SAFEZONE',
}

export type SetSafeZoneAction = ActionBuilder<
  SafeZoneActionTypes.getSafeZone,
  Boolean,
  AppState
>;

export type SafeZoneActions = SetSafeZoneAction;