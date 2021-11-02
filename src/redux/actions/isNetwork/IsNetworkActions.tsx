import { AppState, boolean } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum IsNetworkActionTypes {
   getIsNetwork= 'GET_ISNETWORK',
 }
 
 export type SetIsNetworkAction = ActionBuilder<
 IsNetworkActionTypes.getIsNetwork,
 boolean,
   AppState
 >;
 
 export type IsNetworkActions = SetIsNetworkAction;