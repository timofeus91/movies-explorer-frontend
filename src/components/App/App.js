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

  //хук по сохранению всех фильмов в локальное хранилище
  /*const [localAllMovies, setLocalAllMovies] = React.useState([]); */

  //хук по состоянию чекбокса короткометражного фильма
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  //контекст
  const [currentUser, setCurrentUser] = React.useState({});

  //обработчик для открытия и закрытия InfoTooltip
  function handleInfoTooltip() {
    setIsInfoTooltip(!isInfoTooltip);
  }

  React.useEffect(() => {
    console.log(isShortFilm);
  }, []
  );
  
   

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

  //обработчик для обновления информации о пользователе
  function handleUpdateUser(data) {
      mainApi.updateInfo(data)
          .then(data => {
            setCurrentUser(data)
            history.push('/movies');
          })
          .catch((err) => {
            console.log(`Произошла ошибка - ${err}`);
          })
  }
/*
  //эффект по загрузке всех фильмов и сохранении их в локальное хранилище
  React.useEffect(() => {
      moviesApi.getMovies()
        .then(movies => {
          localStorage.setItem('movies', JSON.stringify(movies));
          const allMovies = JSON.parse(localStorage.getItem('movies'));
          console.log(allMovies);
          setLocalAllMovies(allMovies);
        })
        .then(() => {
          console.log(localAllMovies);
        }) 
        .catch((err) => console.log(err));
    }, []);
    
*/

    //базовая функция по фильтрации фильмов и их поиску по значения из input
    function searchAnyFilm(data, query) {

    }
    //обработчик для поиска фильмов
    function handleSearchFilm(data) {
      console.log('пока просто клик');
      console.log(`А вот это данные: ${data}`);
    }

    //обработчик для поиска фильма среди сохраненных фильмов 
    function handleSearchSavedFilm() {
      console.log('пока просто клик');
    }
    
    //обработчик для изменения значения короткометражный фильм или нет
    function handleShortFilm() {
      setIsShortFilm(!isShortFilm);
      console.log(isShortFilm);
    }





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
      onQuery = {handleSearchFilm}
      shortFilm={handleShortFilm}
    />

    <ProtectedRoute
      path="/saved-movies"
      loggedIn={loggedIn}
      component={handleSearchSavedFilm}
      shortFilm={handleShortFilm}
    />

    <ProtectedRoute
      path="/profile"
      loggedIn={loggedIn}
      component={Profile}
      logOut={handleLogOut}
      onChangeProfile={handleUpdateUser}
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
