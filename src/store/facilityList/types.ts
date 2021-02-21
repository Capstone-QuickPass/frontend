export interface facility {
  capacity: number;
  currentCapacity: number;
}

export interface FacilityList {
  currCap: number;
  maxCap: number;
}

export const UPDATE_FACILITYLIST = 'facility/UPDATE_FACILITYLIST';

interface UpdateFacilityList {
  type: typeof UPDATE_FACILITYLIST;
  payload: FacilityList;
}

export type FacilityActionTypes = UpdateFacilityList;
