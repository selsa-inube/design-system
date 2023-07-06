export interface IAction {
  id: string;
  actionName: string;
  content: (entry: any) => JSX.Element;
}
