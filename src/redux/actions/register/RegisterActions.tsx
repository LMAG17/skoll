import { AppState } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum RegisterActionTypes {
   getRegister= 'GET_REGISTER',
 }
 
 export type SetRegisterAction = ActionBuilder<
 RegisterActionTypes.getRegister,
 Object,
   AppState
 >;
 
 export type RegisterActions = SetRegisterAction;