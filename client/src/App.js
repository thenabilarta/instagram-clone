import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import Message from "./views/Message";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Register from "./views/Register";

import "./app.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <Navbar />
      <div className="mainWrapper">
        <Switch>
          
          <Route exact path="/message" component={Message} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div> */}
    </div>
  );
}

export default App;
