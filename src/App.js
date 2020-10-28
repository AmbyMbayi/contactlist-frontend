import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { GlobalProvider } from "./context/Provider";
function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                render={(props) => <route.component {...props} />}
              ></Route>
            ))}
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
