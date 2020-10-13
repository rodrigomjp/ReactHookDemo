import React from "react";
import { Redirect, useParams } from "react-router-dom";

export const Parametro = ({ history }) => {
  const params = useParams();
  if (!params) {
    return <Redirect to="/"></Redirect>;
  }

  const handleReturn = () => {
    if (history.lenght <= 2) {
      //vuelve a principal si no hay historia, por ejemplo se llega a esta paginal al copiar la url
      history.push("/");
    } else {
      //si se navega de forma normal, vuelve a la pagina anterior
      history.goBack();
    }
  };

  return (
    <div>
      <button className="btn-primary" onClick={handleReturn}>
        Volver
      </button>
    </div>
  );
};
