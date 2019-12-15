import React from 'react';
import {Route} from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';
import LoginPage from "../../pages/auth/LoginPage";
import RegistrationPage from "../../pages/auth/RegistrationPage";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route component={WelcomePage} path="/" exact/>
      <Route component={LoginPage} path="/login"/>
      <Route component={RegistrationPage} path="/registration"/>
    </React.Fragment>
  );
};

export default App;
