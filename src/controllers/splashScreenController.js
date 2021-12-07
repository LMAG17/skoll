import PARAMETERS from '../constants/generalParams.json';
import { setParameters } from '../middlewares/parameters/parametersMiddleware';

export const getParameters = ({ dispatch }) => {
    dispatch(setParameters(PARAMETERS));
}