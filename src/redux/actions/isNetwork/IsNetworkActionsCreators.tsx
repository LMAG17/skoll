import { setIsNetwork } from '../../reducers/isNetwork';
 import { IsNetworkActionTypes, SetIsNetworkAction } from './IsNetworkActions';
 import { boolean } from '../../store/types';
 
 
 export const setIsNetworkCreator = (payload: boolean): SetIsNetworkAction => ({
   type: IsNetworkActionTypes.getIsNetwork,
   payload,
   reducer: setIsNetwork,
 });