import {
  FacilityList,
  FacilityActionTypes,
  UPDATE_FACILITYLIST,
} from './types';

export function updateFacilityList(list: FacilityList): FacilityActionTypes {
  return {
    type: UPDATE_FACILITYLIST,
    payload: list,
  };
}
