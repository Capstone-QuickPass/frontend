export interface PersonList {
  list: [];
  size: number;
}

export const GET_PERSONLIST = 'person/GET_PERSONLIST';

interface FetchPersonList {
  type: typeof GET_PERSONLIST;
  payload: PersonList;
}

export type PersonActionTypes = FetchPersonList;
