import { setCity } from '../../reducers/city';
 import { CityActionTypes, SetCityAction } from './CityActions';
 
 
 export const setCityCreator = (payload: string): SetCityAction => ({
   type: CityActionTypes.getCity,
   payload,
   reducer: setCity,
 });