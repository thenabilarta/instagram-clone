/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Message from "./views/Message";
import Create from "./views/Create";
import Profile from "./views/Profile";
import OtherProfile from "./views/OtherProfile";
import Login from "./views/Login";
import Register from "./views/Register";

import Auth from "./hoc/auth";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/message" component={Auth(Message, null)} />
        <Route exact path="/create" component={Auth(Create, null)} />
        <Route exact path="/profile/:id" component={Auth(OtherProfile, null)} />
        <Route exact path="/profile" component={Auth(Profile, null)} />
        <Route exact path="/" component={Auth(Dashboard, null)} />
        <Route exact path="/login" component={Auth(Login, null)} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
