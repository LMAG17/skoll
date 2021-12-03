import { AppState } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum ServiceOtpActionTypes {
   getServiceOtp= 'GET_SERVICEOTP',
 }
 
 export type SetServiceOtpAction = ActionBuilder<
 ServiceOtpActionTypes.getServiceOtp,
 Object,
   AppState
 >;
 
 export type ServiceOtpActions = SetServiceOtpAction;