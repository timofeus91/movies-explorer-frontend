import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  
  const history = useHistory();
  
  //хук по состоянию авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  //хук по состоянию переменной email
  const [email, setEmail] = React.useState('');

   //хук по состоянию переменной name
   const [name, setName] = React.useState('');

   //эффект по проверке токена
   React.useEffect(() => { 
    const token = localStorage.getItem('jwt');
    if(token) {
      mainApi.checkToken(token)
            .then(res => {
                if(res) {
                    setLoggedIn(true);
                    setEmail(res.email);
                    history.push('/');
                }
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
            })
    }

}, []);

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
