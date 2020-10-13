import React from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { LoginApp } from "../login/LoginApp";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          {/* exact para rutas */}
          {/* <Route exact path="/login" component={LoginApp} /> */}
          <PublicRouter
            isAuthenticated={user.logged}
            exact
            path="/login"
            component={LoginApp}
          />
          {/* no colocar exact dashboard */}
          {/* <Route path="/" component={DashboardRouter} /> */}
          <PrivateRouter
            isAuthenticated={user.logged}
            path="/"
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
};
