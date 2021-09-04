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

  //хук для хранения отфильтрованных результатов поиска во всех фильмах
  const [resultSearchFilm, setResultSearchFilm] = React.useState([]);


  //хук для хранения всех сохраненных фильмов
  const [localMovies, setLocalMovies] = React.useState([]); 

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
                    allMoviesSave();
                    getLocalMovies();
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
                allMoviesSave();
                getLocalMovies();
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
    localStorage.removeItem('movies');
    localStorage.removeItem('saved-movies');
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

  //функция для загрузки всех сохраненных фильмов пользователя и добавления их в стейт-переменную и локальное хранилище
  function getLocalMovies() {
    mainApi.getMovies()
        .then(movies => {
          localStorage.setItem('saved-movies', JSON.stringify(movies));
          setLocalMovies(movies);
        })
        .catch((err) => {
          console.log(`Произошла ошибка - ${err}`);
        })
  }


  //обработчик для добавления фильма
  function handleAddMovie(movie) {
    mainApi.createMovie(movie)
        .then(() => {
          getLocalMovies();
          console.log(localMovies);
        })
        .catch((err) => {
          console.log(`Произошла ошибка - ${err}`);
        })
  }


  //обработчик для удаления фильма
  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId)
        .then(() => {
          getLocalMovies();
        })
        .catch((err) => {
          console.log(`Произошла ошибка - ${err}`);
        })

  }


    //функция для записи всех фильмов со стороннего апи в хук состояния и локальное хранилище. Используется при проверке токена и при авторизации
    function allMoviesSave() {
      moviesApi.getMovies()
        .then(movies => {
          localStorage.setItem('movies', JSON.stringify(movies));

        })
        
        .catch((err) => console.log(err));
    }

  
    //обработчик для поиска фильмов
    function handleSearchFilm(data) {
      const allMovies = JSON.parse(localStorage.getItem('movies'));
      const finalResultSearch = [];


      const resultSearch = allMovies.filter(item => ((item.nameRU != null && item.nameRU.toLowerCase().includes(data.toLowerCase())) || (item.nameEN != null && item.nameEN.toLowerCase().includes(data.toLowerCase()))))
      
      resultSearch.forEach((item) => {
        const movie = item;
        if(localMovies.some(item => item.movieId === movie.id )) {
          movie.owner = currentUser._id;
          movie['movieId'] = movie['id'];
          delete movie.id;
          finalResultSearch.push(movie);
          console.log('Лайку быть!');

        }
        else {
          finalResultSearch.push(movie);
          console.log('Лайку не быть!');
        }
      })

      console.log(localMovies);
      console.log(finalResultSearch);
      
      setResultSearchFilm(finalResultSearch);


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
      moviesCards={resultSearchFilm}
      handleLikeMovie={handleAddMovie}
      handleDelete={handleDeleteMovie}
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
