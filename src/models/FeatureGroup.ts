import type Feature from "./Feature";
import type { FeatureTypeEnum } from "./FeatureTypeEnum";

export interface FeatureGroup {
  id: string;
  featureType: FeatureTypeEnum;
  name: string;
  size?: string;
  speed?: number;
  featuresByLevel?: FeatureByLevel[];
  features?: Feature[];
  subRaces?: FeatureGroup[];
  // TODO: Add subclassFeatures
}

export interface FeatureByLevel {
  parentId: string;
  level: number;
  features: Feature[],
  subFeatures: Feature[]
}