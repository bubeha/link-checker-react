import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';
import NavBar from "../NavBar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route component={WelcomePage} path="/" exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
