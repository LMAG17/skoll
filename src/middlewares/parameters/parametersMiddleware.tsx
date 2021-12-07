import { Dispatch } from 'react';
import { setParametersCreator } from '../../redux/actions/parameters/ParametersActionsCreators';

export function setParameters(parameters: Object) {

  return function (dispatch: Dispatch<any>) {
    dispatch(
      setParametersCreator(parameters),
    );
  };
}