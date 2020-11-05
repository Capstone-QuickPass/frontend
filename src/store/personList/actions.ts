import { PersonList, PersonActionTypes, GET_PERSONLIST } from './types';

export function fetchPerson(list: PersonList): PersonActionTypes {
  return {
    type: GET_PERSONLIST,
    payload: list,
  } as const;
}
