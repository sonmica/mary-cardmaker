export default interface CardContent {
  id?: string;
  title: string;
  body: string; // TODO: update this to description ?
  actionCondition?: string;
  range?: string;
  iconType: string;
}
