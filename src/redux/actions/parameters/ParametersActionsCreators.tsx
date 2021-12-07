import { setParameters } from '../../reducers/parameters';
import { ParametersActionTypes, SetParametersAction } from './ParametersActions';

export const setParametersCreator = (payload: Object): SetParametersAction => ({
  type: ParametersActionTypes.getParameters,
  payload,
  reducer: setParameters,
});