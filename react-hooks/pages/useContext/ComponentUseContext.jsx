import React, { useContext } from "react";
import { NombreContext } from "./contextExample/ContextAppProvider";

const ComponentUseContext = () => {
  const { nombre, llamadaConsole } = useContext(NombreContext);
  llamadaConsole();

  return (
    <>
      <div>Ejemplo de uso del context por parte de un componente.</div>
      <br></br>
      <p>Nombre sacado del context: <b>{nombre}</b></p>
      <p>Se ha ejecutado una funcion definida en el context por consola.</p>
    </>
  );
};

export default ComponentUseContext;
