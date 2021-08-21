import OriginInfoModel from "./originInfo.mode";

export default class PackageModel {
  id: string;
  tracking_number: string;
  status?: string;
  track_update?: boolean;
  original_country?: string;
  destination_country?: string;
  itemTimeLength?: number;
  stayTimeLength?: number;
  origin_info?: OriginInfoModel;
  lastEvent?: string;
  lastUpdateTime?: string;
  title?: string;
}
