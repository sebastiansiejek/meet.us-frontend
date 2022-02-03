import axios from 'redaxios';

class GeocodeSearchApi {
  get(params: IGeocodeSearchApiGetParams) {
    return axios.get<IGeocodeSearchApiGetResponse>('/api/here/geocode-search', {
      params,
    });
  }
}
export default GeocodeSearchApi;

export interface IGeocodeSearchApiGetParams {
  q?: string;
  lang?: string;
}

export interface IGeocodeSearchApiGetResponse {
  items: IGeocodeSearchApiGetItem[];
}

export interface IGeocodeSearchApiGetItem {
  title: string;
  id: string;
  resultType: string;
  houseNumberType: string;
  address: Address;
  position: Position;
  access: Position[];
  mapView: MapView;
  scoring: Scoring;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface Address {
  label: string;
  countryCode: string;
  countryName: string;
  state: string;
  county: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
  houseNumber: string;
}

export interface MapView {
  west: number;
  south: number;
  east: number;
  north: number;
}

export interface Scoring {
  queryScore: number;
  fieldScore: FieldScore;
}

export interface FieldScore {
  city: number;
  streets: number[];
  houseNumber: number;
}
