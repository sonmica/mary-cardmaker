import type { ActionTypeEnum } from "./ActionTypeEnum";
import type { FeatureTypeEnum } from "./FeatureTypeEnum";

export default interface Feature {
  id: string;
  actionType: ActionTypeEnum,
  name: string,
  order?: number,
  level?: number,
  parentId?: string;
  featureType?: FeatureTypeEnum
  description?: string;
  contents?: any[];
  iconType?: string;
  usage?: string;
  duration?: string;
  components?: string;
  range?: string;
  conditions?: string[];
}