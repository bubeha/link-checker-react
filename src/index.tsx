import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import NavBar from "./components/NavBar";
import {BrowserRouter, Switch} from "react-router-dom";

import {createStore} from 'redux';
import rootReducer from 'stores/reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  devToolsEnhancer({}),
);

let rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <NavBar/>
      <div className="container">
        <Switch>
          <App/>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>, rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
