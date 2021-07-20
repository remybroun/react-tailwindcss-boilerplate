import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Login from "./pages/Login"; 
import ContactForm from "./pages/ContactForm"; 
import { connect } from "react-redux";


const PrivateR = ({ component: Component, auth, roles, path, ...rest }) => {
  return(
  <Route
    {...rest}
    render={ props => {
      if (!auth.isAuthenticated)
        return <Redirect to="/login" />

      if (props.location.pathname === '/')
        return <Redirect to={'/pay' } />

      return <Component {...props} />
    }}
  />
)};

const mapStateToProps = state => {
  console.log(state)
  return({auth: state})
}

const PrivateRoute = connect(mapStateToProps)(withRouter(PrivateR));


export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login"><Login/></Route>
        <PrivateRoute path="/pay" component={ContactForm} />
        <PrivateRoute path="/" component={Login} />
      </Switch>
    </Router>
  );
};
