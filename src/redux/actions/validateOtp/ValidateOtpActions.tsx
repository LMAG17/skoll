import { AppState } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum ValidateOtpActionTypes {
   getValidateOtp= 'GET_VALIDATEOTP',
 }
 
 export type SetValidateOtpAction = ActionBuilder<
 ValidateOtpActionTypes.getValidateOtp,
 Object,
   AppState
 >;
 
 export type ValidateOtpActions = SetValidateOtpAction;