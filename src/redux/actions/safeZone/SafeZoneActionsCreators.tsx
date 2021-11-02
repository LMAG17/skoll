import { setSafeZone } from '../../reducers/safeZone';
import { SafeZoneActionTypes, SetSafeZoneAction } from './SafeZoneActions';


export const setSafeZoneCreator = (payload: Boolean): SetSafeZoneAction => ({
  type: SafeZoneActionTypes.getSafeZone,
  payload,
  reducer: setSafeZone,
});