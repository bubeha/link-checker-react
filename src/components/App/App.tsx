import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';
import NavBar from "../NavBar";
import LoginPage from "../../pages/auth/LoginPage";
import RegistrationPage from "../../pages/auth/RegistrationPage";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../stores/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  devToolsEnhancer({}),
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route component={WelcomePage} path="/" exact/>
            <Route component={LoginPage} path="/login"/>
            <Route component={RegistrationPage} path="/registration"/>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
