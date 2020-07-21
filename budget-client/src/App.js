import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./scss/main.css";
import { ToastContainer } from "react-toastify";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Register from "./views/Register";
import Aos from "aos";
import "aos/dist/aos.css";
import Summary from "./views/Summary";
import Analysis from "./views/Analysis";
import Planning from "./views/Planning";
import history from "./templates/history";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { token: localStorage.token },
      });
      console.log(res.data);
      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  useEffect(() => {
    checkAuthenticated();
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Router history={history}>
          <Route
            exact
            path="/"
            render={() =>
              !isAuthenticated ? (
                <LandingPage />
              ) : (
                <Redirect to="/dashboard/summary" />
              )
            }
          />
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
            component={Register}
            render={() => <Redirect to="/login" />}
          />
          <Route
            exact
            path="/dashboard/summary"
            render={(props) =>
              isAuthenticated ? (
                <Summary {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/dashboard/analysis"
            render={() =>
              isAuthenticated ? <Analysis /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/dashboard/planning"
            render={() =>
              isAuthenticated ? <Planning /> : <Redirect to="/login" />
            }
          />
        </Router>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
