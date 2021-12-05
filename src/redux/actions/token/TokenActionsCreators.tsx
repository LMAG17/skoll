import { setToken } from '../../reducers/token';
 import { TokenActionTypes, SetTokenAction } from './TokenActions';
 
 
 
 export const setTokenCreator = (payload: string): SetTokenAction => ({
   type: TokenActionTypes.getToken,
   payload,
   reducer: setToken,
 });