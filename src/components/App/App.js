import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js';

function App() {
  return (
  <Switch>

    <Route path="/">
      <Main />
    </Route>

  </Switch>
  );
}

export default App;
