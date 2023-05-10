import React, { useState } from "react";
import { NavLink } from "../NavLink";

const NavUI = (props) => {
  const { routes } = props;

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return routes.map((route) => (
    <NavLink
      key={route.id}
      id={route.id}
      label={route.label}
      icon={route.icon}
      path={route.path}
      isSelected={route.id === selectedId}
      handleClick={() => handleClick(route.id)}
    />
  ));
};

export { NavUI };
