import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

//history, para manejar de donde viene
//history.push("/") manda a pagina principal
//history.replace("/") manda a pagina principal, ya no hay historia
//

export const LoginApp = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({ type: types.login, payload: { name: "Rodrigo J.P." } });
    history.replace(lastPath);
  };

  return (
    <div className="containermt-5">
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
