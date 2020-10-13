import React from "react";
import { Navbar } from "../ui/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { Cuentas } from "../Cuentas";
import { Clientes } from "../Clientes";
import { Parametro } from "../Parametro";
export const DashboardRouter = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/cuentas" component={Cuentas} />
          <Route exact path="/clientes" component={Clientes} />
          <Route exact path="/parametros/:id" component={Parametro} />
          <Redirect to="/cuentas" />
        </Switch>
      </div>
    </>
  );
};
