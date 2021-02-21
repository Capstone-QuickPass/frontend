import {
  FacilityList,
  FacilityActionTypes,
  UPDATE_FACILITYLIST,
} from './types';

const initialPerson: FacilityList = {
  maxCap: 0,
  currCap: 0,
};

export function facilityReducer(
  state = initialPerson,
  action: FacilityActionTypes,
): FacilityList {
  switch (action.type) {
    case UPDATE_FACILITYLIST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
