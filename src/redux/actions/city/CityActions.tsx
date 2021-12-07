import { AppState } from '../../store/types';
 import { ActionBuilder } from '../types';
 
 export enum CityActionTypes {
   getCity= 'GET_CITY',
 }
 
 export type SetCityAction = ActionBuilder<
 CityActionTypes.getCity,
 string,
   AppState
 >;
 
 export type CityActions = SetCityAction;