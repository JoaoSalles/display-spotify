import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from 'components/home';
import Login from 'components/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"
          component={Login}
        />
        <Route path="/"
        component={Home}
        />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
