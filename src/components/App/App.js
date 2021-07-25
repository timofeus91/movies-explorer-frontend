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

function App() {
  
  const history = useHistory();
  
  //хук по состоянию авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  //хук по состоянию переменной email
  const [email, setEmail] = React.useState('');

  //хук по состоянию переменной name
  const [name, setName] = React.useState('');

  //хук по состоянию InfoTooltip
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);

  //хук по состоянию прохождения регистрации
  const [isAuthReqSuccess, setIsAuthReqSuccess] = React.useState(false);


  //обработчик для открытия и закрытия InfoTooltip
  function handleInfoTooltip() {
    setIsInfoTooltip(!isInfoTooltip);
  }

  

   

   //эффект по проверке токена
   React.useEffect(() => { 
    const token = localStorage.getItem('jwt');
    if(token) {
      mainApi.checkToken(token)
            .then(res => {
                if(res) {
                    setLoggedIn(true);
                    setEmail(res.email);
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
                history.push('/movies');
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
                setEmail(data.email);
                setLoggedIn(true);
                history.push('/');
            })
            .catch((err) => {
                console.log(`Произошла ошибка - ${err}`);
                handleInfoTooltip();
                setIsAuthReqSuccess(false);
            })
    
  }



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
  </>
  );

}

export default App;
