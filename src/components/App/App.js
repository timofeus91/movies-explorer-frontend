import React from 'react';
import {
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
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
import {
  CurrentUserContext
} from '../../contexts/CurrentUserContext';

function App() {

  const history = useHistory();

  //хук по состоянию авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  //хук по состоянию InfoTooltip
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);

  //хук по состоянию прелоадера
  const [isPreloader, setIsPreloader] = React.useState(false);

  //хук по состоянию прохождения регистрации
  const [isAuthReqSuccess, setIsAuthReqSuccess] = React.useState(false);

  //хук для хранения отфильтрованных результатов поиска во всех фильмах
  const [resultSearchFilm, setResultSearchFilm] = React.useState([]);

  //хук для хранения всех сохраненных фильмов
  const [localMovies, setLocalMovies] = React.useState([]);

  //хук по состоянию чекбокса короткометражного фильма
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  //хук по состоянию надписи 'Ничего не найдено'
  const [moviesError, setMoviesError] = React.useState(false);


  //берем из локального хранилища массивы всех фильмов и сохраненных пользователем фильмов. и истории поиска фильмов пользователем 
  const allMoviesStorage = JSON.parse(localStorage.getItem('movies'));
  const localMoviesStorage = JSON.parse(localStorage.getItem('saved-movies'));
  const searchResultSaved = JSON.parse(localStorage.getItem('search-result-movies'));

  
  //контекст
  const [currentUser, setCurrentUser] = React.useState({});

  //обработчик для открытия и закрытия InfoTooltip
  function handleInfoTooltip() {
    setIsInfoTooltip(!isInfoTooltip);
  }



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

  //обработчик авторизации. В нем проводим авторизацию через отправку данных, а потом через API методом checkTokenGetUser проверяем токен и выдаем данные пользователя 
  function handleLogin(data) {
    mainApi.login(data)
      .then(res => {
        localStorage.setItem('jwt', res.token);
      }).then(() => {
        const token = localStorage.getItem('jwt');
        mainApi.checkTokenGetUser(token)
          .then(res => {
            if (res) {
              setLoggedIn(true);
              setCurrentUser(res);
              history.push('/movies');
            }
          })
          .catch((err) => {
            console.log(`Произошла ошибка - ${err}`);
          })
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
    localStorage.removeItem('search-result-movies');
    history.push('/');
  }
    //эффект по загрузке всех фильмов пользователя и всех фильмов со стороннего API в случае авторизации. Проверяется через зависимость.  
    React.useEffect(() => {

      allMoviesSave();
      getLocalMovies();
    },[loggedIn])

  //эффект по проверке токена, получению всех сохранненых фильмов пользователя, его историю предыдущего поиска фильма, загрузке всех фильмов со стороннего апи в хук и локальное хранилище . Все это делается с использованием API запроса к данным пользователя через метод checkTokenGetUser.
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    mainApi.checkTokenGetUser(token)
      .then(res => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          getLocalMovies();
          setResultSearchFilm(searchResultSaved === null ? [] : searchResultSaved);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(`Произошла ошибка - ${err}`);
      })

  }, []);






  //обработчик для обновления информации о пользователе
  function handleUpdateUser(data) {
    const token = localStorage.getItem('jwt');
    mainApi.updateInfo(data, token)
      .then(data => {
        setCurrentUser(data)
        setIsAuthReqSuccess(true);
      })
      .catch((err) => {
        console.log(`Произошла ошибка - ${err}`);
      })
      .finally(() => {
        handleInfoTooltip();
      })
  }

  //функция для загрузки всех сохраненных фильмов пользователя и добавления их в стейт-переменную и локальное хранилище
  function getLocalMovies() {
    const token = localStorage.getItem('jwt');
    mainApi.getMovies(token)
      .then(movies => {
        localStorage.setItem('saved-movies', JSON.stringify(movies));
        setLocalMovies(movies);
      })
      .catch((err) => {
        console.log(`Произошла ошибка - ${err}`);
      })
  }


  //функция для изменения лайка после добавления фильма
  function addLike(movie) {
    console.log(searchResultSaved)
    console.log('down movie');
    console.log(movie);
    
    /*const something =() => searchResultSaved.map(item => {
      if(movie.movieId === item.id) {
        console.log('Есть совпадение!')
        item.owner = movie.owner;
        
      } else {
        
      }
    })
    setResultSearchFilm(something);*/
    
  }

  //обработчик для добавления фильма
  function handleAddMovie(movie) {

    const token = localStorage.getItem('jwt');
    mainApi.createMovie(movie, token)
      .then((movie) => {
        getLocalMovies();
        addLike(movie);
      })
      .catch((err) => {
        console.log(`Произошла ошибка - ${err}`);
      })
    
    
  }


  //обработчик для удаления фильма
  function handleDeleteMovie(movie) {
    const token = localStorage.getItem('jwt');
    mainApi.deleteMovie(movie._id, token)
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

  //функция по фильтру массива на совпадение данных из инпута
  function searchFilter(array, data, short) {
    if (short) {
      return array.filter(item => ((item.nameRU != null && item.nameRU.toLowerCase().includes(data.toLowerCase()) && item.duration < 40) || (item.nameEN != null && item.nameEN.toLowerCase().includes(data.toLowerCase()) && item.duration < 40)))
    } else {
      return array.filter(item => ((item.nameRU != null && item.nameRU.toLowerCase().includes(data.toLowerCase())) || (item.nameEN != null && item.nameEN.toLowerCase().includes(data.toLowerCase()))))
    }

  }


  //обработчик для поиска фильмов
  function handleSearchFilm(data) {
    //запускаем прелоадер пока функция выполняется 
    setIsPreloader(true);

    //добавляю setTimeout чтобы было видно что выполняется поиск. Так как если результат такой-же как и в предыдущую итерацию, то может быть непонятно что он выполнился
    setTimeout(() => {
      //создаем константу куда записываем результат фильтрации двух массивово что выше в коде
      const localMoviesResult = searchFilter(localMoviesStorage, data, isShortFilm);
      const allMoviesResult = searchFilter(allMoviesStorage, data, isShortFilm);

      //создаем константу куда записывем итоговый массив фильмов. Если есть совпадения объектов, то добавляется из сохраненных фильмов. Если нет совпадения , то из общих фильмов. 
      const finalResultSearch = allMoviesResult.map((am) => {
        const lm = localMoviesResult.find((m) => m.movieId === am.id)
        return lm ?? am;
      });

      

      //добавляем в массив для отрисовки 
      setResultSearchFilm(finalResultSearch);

      if (finalResultSearch.length === 0) {
        setMoviesError(true)
      } else {
        setMoviesError(false);
      }

      //сохраняем в локальное хранилище результат поиска
      localStorage.setItem('search-result-movies', JSON.stringify(finalResultSearch));

      //выключаем прелоадер по итогу выполнения функции 
      setIsPreloader(false);
    }, 1000)


  }



  //обработчик для поиска фильма среди сохраненных фильмов 
  function handleSearchSavedFilm(data) {
    setIsPreloader(true);
    //добавляю setTimeout чтобы было видно что выполняется поиск. Так как если результат такой-же как и в предыдущую итерацию, то может быть непонятно что он выполнился
    setTimeout(() => {
      const localMoviesResult = searchFilter(localMoviesStorage, data, isShortFilm);
      setLocalMovies(localMoviesResult);
      if (localMoviesResult.length === 0) {
        setMoviesError(true)
      } else {
        setMoviesError(false);
      }
      setIsPreloader(false);
    }, 1000)


  }


  //обработчик для изменения значения короткометражный фильм или нет
  function handleShortFilm() {
    setIsShortFilm(!isShortFilm);

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
      isPreloader={isPreloader}
      moviesError={moviesError}
      
      
    />

    <ProtectedRoute
      path="/saved-movies"
      loggedIn={loggedIn}
      component={SavedMovies}
      moviesCards={localMovies}
      onQuery={handleSearchSavedFilm}
      handleDelete={handleDeleteMovie}
      shortFilm={handleShortFilm}
      isPreloader={isPreloader}
      moviesError={moviesError}
      
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
