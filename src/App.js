import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { Main } from "./component/Main";

const init = () => {
  //si existe user en localstorege lo retorno, caso contrario crea el objeto en false
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <Main />
    </AuthContext.Provider>
  );
}

export default App;
