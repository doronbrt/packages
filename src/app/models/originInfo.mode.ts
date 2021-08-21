import TrackInfoModel from "./trackInfo.model";

export default class OriginInfoModel {
  itemReceived?: string;
  departfromAirport?: string;
  trackinfo?: TrackInfoModel[];
  carrier_code?: string;
}
