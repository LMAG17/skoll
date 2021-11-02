import { Dispatch } from 'react';
import { setSafeZoneCreator } from '../../redux/actions/safeZone/SafeZoneActionsCreators';

export function setSafeZone(safeZone: Boolean) {

  return function (dispatch: Dispatch<any>) {
    dispatch(
      setSafeZoneCreator(safeZone),
    );
  };
}