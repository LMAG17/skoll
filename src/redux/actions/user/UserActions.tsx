import { AppState, User } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum UserActionTypes {
   getUser= 'GET_USER',
 }
 
 export type SetUserAction = ActionBuilder<
 UserActionTypes.getUser,
 User,
   AppState
 >;
 
 export type UserActions = SetUserAction;