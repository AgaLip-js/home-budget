import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./scss/main.css";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Register from "./views/Register";
import Aos from "aos";
import "aos/dist/aos.css";
import Summary from "./views/Summary";
import Analysis from "./views/Analysis";
import Planning from "./views/Planning";

function App({ hideLoader, showLoader }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  useEffect(() => Aos.init({ duration: 1500, once: true }), []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard/summary" />
            )
          }
        />
        <Route
          exact
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route exact path="/dashboard/summary" render={() => <Summary />} />
        <Route exact path="/dashboard/analysis" render={() => <Analysis />} />
        <Route exact path="/dashboard/planning" render={() => <Planning />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
