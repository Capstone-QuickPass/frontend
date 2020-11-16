import { PersonList, PersonActionTypes, UPDATE_PERSONLIST } from './types';

export function updatePersonList(list: PersonList): PersonActionTypes {
  return {
    type: UPDATE_PERSONLIST,
    payload: list,
  } as const;
}
