import { setUser } from '../../reducers/user';
 import { UserActionTypes, SetUserAction } from './UserActions';
 import { User } from '../../store/types';
 
 
 export const setUserCreator = (payload: User): SetUserAction => ({
   type: UserActionTypes.getUser,
   payload,
   reducer: setUser,
 });