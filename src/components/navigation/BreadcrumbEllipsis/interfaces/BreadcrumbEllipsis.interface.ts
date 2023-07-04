import { Typos } from "../types/BreadcrumbEllipsis.Typos.type";
import { IRoute } from "./BreadcrumbEllipsis.Route.interface";

export interface IBreadcrumbEllipsisProps {
  typo?: Typos[number];
  routes: IRoute[];
}
