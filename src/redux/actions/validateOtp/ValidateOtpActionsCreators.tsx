import { setValidateOtp } from '../../reducers/validateOtp';
 import { ValidateOtpActionTypes, SetValidateOtpAction } from './ValidateOtpActions';
 
 
 
 export const setValidateOtpCreator = (payload: Object): SetValidateOtpAction => ({
   type: ValidateOtpActionTypes.getValidateOtp,
   payload,
   reducer: setValidateOtp,
 });