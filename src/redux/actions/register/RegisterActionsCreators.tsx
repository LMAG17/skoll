import { setRegister } from '../../reducers/register';
 import { RegisterActionTypes, SetRegisterAction } from './RegisterActions';
 
 
 
 export const setRegisterCreator = (payload: Object): SetRegisterAction => ({
   type: RegisterActionTypes.getRegister,
   payload,
   reducer: setRegister,
 });