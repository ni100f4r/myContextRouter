import React from 'react'

const Route = ({ path, Component }) => {
  if (window.location.pathname.match(path)) {
    return <Component></Component>;
  } else return null;
};

export default Route;