import { Typos } from "../types/BreadcrumbEllipsis.Typos.type";
import { IRoute } from "./BreadcrumbEllipsis.Route.interface";

export interface IBreadcrumbEllipsisProps {
  size?: Typos;
  routes: IRoute[];
}
