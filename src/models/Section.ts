export default interface Section {
  id: string;
  sectionName: string;
  order: number,
  parentId?: string;
  description?: string;
  contents?: any[];
  iconType?: string;
  usage?: string;
}
