import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import routes from "./routes";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";
import userLeaveConfirmation from "./components/userLeaveConfirmation";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "Contact App";

  if (route.needsAuth && !isAuthenticated()) {
    history.push("/auth/login");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  const [confirmOpen, setConfirmOpen] = useState(true);
  return (
    <div className="app">
      <GlobalProvider>
        <Router
          getUserConfirmation={(message, callback) => {
            return userLeaveConfirmation(
              message,
              callback,
              confirmOpen,
              setConfirmOpen
            );
          }}
        >
          <Suspense fallback={<p>Loading</p>}>
            <Switch>
              {routes.map((route, index) => (
                <RenderRoute {...route} key={index} />
              ))}
            </Switch>
          </Suspense>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
