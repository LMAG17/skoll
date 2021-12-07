import { Dispatch } from 'react';
 import { setCityCreator } from '../../redux/actions/city/CityActionsCreators';

 export function setCity(city: string) {
   
   return function (dispatch: Dispatch<any>) {
     dispatch(
         setCityCreator(city),
     );
   };
 }