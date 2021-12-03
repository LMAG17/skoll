import { AppState } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum SessionIdActionTypes {
   getSessionId= 'GET_SESSIONID',
 }
 
 export type SetSessionIdAction = ActionBuilder<
 SessionIdActionTypes.getSessionId,
 String,
   AppState
 >;
 
 export type SessionIdActions = SetSessionIdAction;