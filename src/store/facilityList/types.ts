export interface FacilityList {
  capacity: number;
  currentPopulation: number;
}

export const UPDATE_FACILITYLIST = 'facility/UPDATE_FACILITYLIST';

interface UpdateFacilityList {
  type: typeof UPDATE_FACILITYLIST;
  payload: FacilityList;
}

export type FacilityActionTypes = UpdateFacilityList;
