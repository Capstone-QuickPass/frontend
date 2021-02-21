import {
  FacilityList,
  FacilityActionTypes,
  UPDATE_FACILITYLIST,
} from './types';

const initialFacility: FacilityList = {
  capacity: undefined,
  currentPopulation: undefined,
};

export function facilityReducer(
  state = initialFacility,
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
