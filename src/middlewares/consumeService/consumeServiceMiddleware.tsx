import { Dispatch } from 'react';
import { setConsumeServiceCreator } from '../../redux/actions/consumeService/ConsumeServiceActionsCreators';

export function setConsumeService(consumeService: any) {

  return async function (dispatch: Dispatch<any>) {
    try {
      const response = await fetch(
        consumeService.url,
        {
          method: consumeService.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(consumeService.body)
        }
      );
      const responseJson = await response.json();
      dispatch(setConsumeServiceCreator(responseJson));
    } catch (error) {
      console.error(error);
      dispatch(setConsumeServiceCreator({ error: "Hubo un error obteniendo la data" }));
    }
  };
}