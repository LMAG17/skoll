import { setConsumeService } from '../../reducers/consumeService';
import { ConsumeServiceActionTypes, SetConsumeServiceAction } from './ConsumeServiceActions';

export const setConsumeServiceCreator = (payload: Object): SetConsumeServiceAction => ({
  type: ConsumeServiceActionTypes.getConsumeService,
  payload,
  reducer: setConsumeService,
});