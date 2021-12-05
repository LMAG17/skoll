import { setServiceOtp } from '../../reducers/serviceOtp';
 import { ServiceOtpActionTypes, SetServiceOtpAction } from './ServiceOtpActions';
 
 
 
 export const setServiceOtpCreator = (payload: Object): SetServiceOtpAction => ({
   type: ServiceOtpActionTypes.getServiceOtp,
   payload,
   reducer: setServiceOtp,
 });