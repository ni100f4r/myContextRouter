import React from "react";

const Route = ({ path, exact, Component }) => {
  const shouldRender = exact
    ? window.location.pathname === path
    : window.location.pathname.startsWith(path);
  if (shouldRender) {
    return <Component></Component>;
  } else return null;
};

export default Route;
