import React from "react";

const Prueba = () => {
  console.log("version", process.env.REACT_APP_VERSION);

  const version = process.env.REACT_APP_VERSION;
  return <div>Prueba: {version}</div>;
};

export default Prueba;
