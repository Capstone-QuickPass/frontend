export interface person {
  _id: number;
  photo: Int16Array;
  time: string;
  score: number;
  mask_status: string;
}

export interface PersonList {
  list: person[];
  size: number;
}

export const UPDATE_PERSONLIST = 'person/UPDATE_PERSONLIST';

interface UpdatePersonList {
  type: typeof UPDATE_PERSONLIST;
  payload: PersonList;
}

export type PersonActionTypes = UpdatePersonList;
