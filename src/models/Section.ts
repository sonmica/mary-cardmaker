export default interface Section {
  id: string;
  name: string;
  order: number,
  parentId?: string;
  description?: string;
  contents?: any[];
  iconType?: string;
  usage?: string;
}
