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

  const loggedIn= true;

  return (
    <>
  <Switch>

    <Route path="/" exact>
      <Header
      loggedIn={loggedIn}
      filmRoute={true}
       />
      <Main />
      <Footer />
    </Route>

    <Route path="/movies">
      <Header
      loggedIn={loggedIn}
      filmRoute={true} />
      <Movies />
      <Footer />
    </Route>

    <Route path="/saved-movies">
      <Header
      loggedIn={loggedIn}
      filmRoute={false} />
      <SavedMovies />
      <Footer />
    </Route>

    <Route path="/profile">
      <Header
      loggedIn={loggedIn}
      filmRoute={true} />
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
