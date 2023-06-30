import { Typos } from "../types/Typos.type";
import { IRoute } from "./Route.interface";

export interface IBreadcrumbEllipsisProps {
  typo?: Typos[number];
  routes: IRoute[];
}
