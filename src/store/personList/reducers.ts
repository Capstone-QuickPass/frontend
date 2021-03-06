import { PersonList, PersonActionTypes, UPDATE_PERSONLIST } from './types';

const initialPerson: PersonList = {
  list: [],
  size: 0,
};

export function personReducer(
  state = initialPerson,
  action: PersonActionTypes,
): PersonList {
  switch (action.type) {
    case UPDATE_PERSONLIST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
