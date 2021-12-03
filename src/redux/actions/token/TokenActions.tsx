import { AppState } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum TokenActionTypes {
   getToken= 'GET_TOKEN',
 }
 
 export type SetTokenAction = ActionBuilder<
 TokenActionTypes.getToken,
 string,
   AppState
 >;
 
 export type TokenActions = SetTokenAction;