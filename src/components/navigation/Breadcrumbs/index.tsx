import { IBreadcrumbsProps } from "./interfaces/Breadcrumbs.interface";
import { Sizes, sizes } from "./types/Breadcrumb.Size.type";

import { BreadcrumbLink } from "../BreadcrumbLink";
import { BreadcrumbEllipsis } from "../BreadcrumbEllipsis";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

import { StyledBreadcrumbs } from "./styles";

function capitalizeString(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Breadcrumbs = (props: IBreadcrumbsProps) => {
  const { crumbs } = props;

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const maxCrumbs = isDesktop ? 5 : 3;

  const transformedSize: Sizes = isDesktop ? "labelLarge" : "labelSmall";

  if (crumbs.length > maxCrumbs) {
    const transformedLastElement = crumbs[crumbs.length - 1];
    return (
      <StyledBreadcrumbs>
        <BreadcrumbLink
          key={crumbs[0].path}
          path={crumbs[0].path}
          id={crumbs[0].path}
          label={capitalizeString(crumbs[0].label)}
          isActive={crumbs[0].isActive}
        />
        <BreadcrumbEllipsis
          key={`breadcrumb-ellipsis`}
          typo={transformedSize}
          routes={crumbs.slice(1, -1)}
        />
        <BreadcrumbLink
          key={transformedLastElement.path}
          path={transformedLastElement.path}
          id={transformedLastElement.path}
          label={capitalizeString(transformedLastElement.label)}
          isActive={transformedLastElement.isActive}
        />
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs>
      {crumbs.map(({ path, label, isActive }) => (
        <BreadcrumbLink
          key={path}
          path={path}
          id={path}
          label={capitalizeString(label)}
          isActive={isActive}
        />
      ))}
    </StyledBreadcrumbs>
  );
};

export { Breadcrumbs };
