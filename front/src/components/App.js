import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import FindRide from "../pages/FindRide";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import BookRidePage from "../pages/DrivingSimulationMap";
import Raiting from "../pages/Raiting";
import MyRates from "../pages/MyRates";
import MyRides from "../pages/MyRides";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* TODO change to private */}
          <PrivateRoute path="/find-ride" component={FindRide} />
          <PrivateRoute path="/book-ride" component={BookRidePage} />
          <PrivateRoute path="/raiting" component={Raiting} />
          <PrivateRoute path="/my-rates" component={MyRates} />
          <PrivateRoute path="/my-rides" component={MyRides} />
          <PrivateRoute path="/dashboard" component={UserDashboard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
