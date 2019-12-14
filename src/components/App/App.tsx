import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route component={WelcomePage} path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
