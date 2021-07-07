import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import './App.css';

function App() {
  return (
    <>
  <Switch>

    <Route path="/" exact>
      <Header />
      <Main />
      <Footer />
    </Route>

    <Route path="/movies">
      <Header />
      <Movies />
      <Footer />
    </Route>

    <Route path="/saved-movies">
      <Header />
      <SavedMovies />
      <Footer />
    </Route>

    <Route path="/profile">
      <Header />
      <Profile />
    </Route>

    <Route path="/signin">
      <Login />
    </Route>

    <Route path="/signup">
      <Register />
    </Route>

    <Route path="*">
      <PageNotFound />
    </Route>

  </Switch>
  </>
  );
}

export default App;
