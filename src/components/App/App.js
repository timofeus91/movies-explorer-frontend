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
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {
  
  const history = useHistory();
  
  //хук по состоянию авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  //хук по состоянию InfoTooltip
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);

  //хук по состоянию прохождения регистрации
  const [isAuthReqSuccess, setIsAuthReqSuccess] = React.useState(false);

  //контекст
  const [currentUser, setCurrentUser] = React.useState({});

  //обработчик для открытия и закрытия InfoTooltip
  function handleInfoTooltip() {
    setIsInfoTooltip(!isInfoTooltip);
  }

  
   

   //эффект по проверке токена
   React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.checkToken(token)
            .then(res => {
                if(res) {
                    setLoggedIn(true);
                    history.push('/movies');
                }
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
            })
    }
  }, []);

  //обработчик регистрации
  function handleRegister(data) {
    mainApi.createUser(data)
            .then(() => {
                setIsAuthReqSuccess(true);
                handleLogin(data);
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
                setIsAuthReqSuccess(false);
            })
            .finally(() => {
                handleInfoTooltip();
            })
  }

  //обработчик авторизации
  function handleLogin(data) {
    mainApi.login(data)
            .then(res => {
                localStorage.setItem('jwt', res.token);
                setLoggedIn(true);
                history.push('/movies');
  
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
                handleInfoTooltip();
                setIsAuthReqSuccess(false);
            })
    
  }

  //обработчик по выходу из аккаунта
  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/');
    }

  //эффект для получения информации о пользователе
  React.useEffect(() => {
    if(loggedIn) {
      mainApi.getUserMe()
        .then(userInfo => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(`Произошла ошибка - ${err}`);
        })
    }
  }, [loggedIn]);


  return (
  <CurrentUserContext.Provider value={ currentUser }>
    
  <Switch>

    <Route exact path="/">
      <Header
      loggedIn={loggedIn}
      filmRoute={true}
       />
      <Main />
      <Footer />
    </Route>

    <ProtectedRoute
      path="/movies"
      loggedIn={loggedIn}
      component={Movies}
    />

    <ProtectedRoute
      path="/saved-movies"
      loggedIn={loggedIn}
      component={SavedMovies}
    />

    <ProtectedRoute
      path="/profile"
      loggedIn={loggedIn}
      component={Profile}
      logOut={handleLogOut}
    />

    <Route path="/signin">
      <Login onLogin={handleLogin} />
    </Route>

    <Route path="/signup">
      <Register onRegister={handleRegister} />
    </Route>

    <Route path="*">
      <PageNotFound />
    </Route>

  </Switch>

  <InfoTooltip
  onClose={handleInfoTooltip}
  isOpen={isInfoTooltip}
  isAuthReqSuccess={isAuthReqSuccess} />

  </CurrentUserContext.Provider>
  );

}

export default App;
