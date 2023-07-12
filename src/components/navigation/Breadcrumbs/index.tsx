import { BreadcrumbLink } from "../BreadcrumbLink";
import { BreadcrumbEllipsis } from "../BreadcrumbEllipsis";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

import { StyledBreadcrumbs } from "./styles";
import { IBreadcrumbItem } from "./interfaces/Breadcrumbs.Item.interface";
import { IBreadcrumbsProps } from "./interfaces/Breadcrumbs.interface";
import { Sizes, sizes } from "./types/Breadcrumb.Size.type";

function getBreadcrumbItems(crumbs: string[]): IBreadcrumbItem[] {
  const breadcrumbItems = [
    { id: "Home", path: "/", label: "Home", isActive: false },
    ...crumbs.map((label, index) => ({
      path: `/${crumbs
        .slice(0, index + 1)
        .join("/")
        .toLowerCase()}`,
      label: `${capitalizeString(label)}`,
      id: `/${crumbs.slice(0, index + 1).join("/")}`,
      isActive: index === crumbs.length - 1,
    })),
  ];

  return breadcrumbItems;
}

function capitalizeString(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Breadcrumbs = (props: IBreadcrumbsProps) => {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const maxCrumbs = isDesktop ? 5 : 3;
  const breadcrumbItems = getBreadcrumbItems(crumbs);
  const transformedSize: Sizes = isDesktop ? sizes[0] : sizes[1];

  if (breadcrumbItems.length > maxCrumbs) {
    const routesForEllipsis = breadcrumbItems.slice(1, -1);
    const transformedLastElement = breadcrumbItems[breadcrumbItems.length - 1];
    return (
      <StyledBreadcrumbs>
        <BreadcrumbLink
          key={breadcrumbItems[0].path}
          path={breadcrumbItems[0].path}
          id={breadcrumbItems[0].path}
          label={breadcrumbItems[0].label}
          isActive={breadcrumbItems[0].isActive}
        />
        <BreadcrumbEllipsis
          key={`breadcrumb-ellipsis`}
          typo={transformedSize}
          routes={routesForEllipsis}
        />
        <BreadcrumbLink
          key={transformedLastElement.path}
          path={transformedLastElement.path}
          id={transformedLastElement.path}
          label={transformedLastElement.label}
          isActive={transformedLastElement.isActive}
        />
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs>
      {breadcrumbItems.map(({ path, label, isActive }) => (
        <BreadcrumbLink
          key={path}
          path={path}
          id={path}
          label={label}
          isActive={isActive}
        />
      ))}
    </StyledBreadcrumbs>
  );
};

export { Breadcrumbs };
