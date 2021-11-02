import { Action } from 'redux';

/**
 * Contract to create a action creator
 *
 * @interface ActionBuilder
 *
 * @template T: Type of action
 * @template P: Payload object
 * @template S: App state - App state must be unique and global in the appliation
 *
 * @member {T} type is the type of action. This value is usually a string.
 * @member {object} payload is the necessary information for execute the reducer.
 * @member {function} reducer is a pure function that provide a new state of application.
 */
export interface ActionBuilder<T, P, S> extends Action {
  type: T;
  payload: P;
  reducer: (state: S, payload: P) => S;
}

/**
 * Template of payload that just requies a ID.
 */
export interface PayloadId {
  id: number;
}
