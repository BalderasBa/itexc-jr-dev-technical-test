import React from "react";

function EmtyArea({bgcolor}) {
  const classs = `emty-area-${bgcolor}`;
  return <div className={classs}></div>;
}

export default EmtyArea;
