import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';
import NavBar from "../NavBar";
import LoginPage from "../../pages/auth/LoginPage";
import RegistrationPage from "../../pages/auth/RegistrationPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route component={WelcomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
          <Route component={RegistrationPage} path="/registration" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
