//класс для подключения api

class MainApi {
    //конструктор принимает адрес куда обращаться за данными (или куда их отправлять) и настройки.
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }


    //приватный метод с повтряющимся кодом у всех запросов (то что идет после 1 return)

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
    }

    // метод по созданию пользователя
    createUser(data) {
        return fetch(`${this._url}signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password
            }),
        })
        .then(this._checkResponse);
    }

    //метод по авторизации пользователя
    login(data) {
        return fetch(`${this._url}signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password
            }),
        })
        .then(this._checkResponse);
    }

    //метод по изменению данных пользователя
    updateInfo(data, jwt) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${jwt}`,
              },
            body: JSON.stringify({
                email: data.email,
                name: data.name,
            }),
        })
        .then(this._checkResponse);
    }


    //метод по проверке токена при авторизации
    checkTokenGetUser(jwt)  {
        return fetch(`${this._url}users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${jwt}`,
          },
        })
        .then(this._checkResponse);
      }


      //метод по получению списка фильмов
      getMovies(jwt) {
          return fetch(`${this._url}movies`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${jwt}`,
              },
          })
          .then(this._checkResponse);
      }



      //метод по добавлению фильма
      createMovie(data, jwt) {
          return fetch(`${this._url}movies`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${jwt}`,
              },
              body: JSON.stringify({
                  country: data.country,
                  director: data.director,
                  duration: data.duration,
                  year: data.year,
                  description: data.description,
                  image: 'https://api.nomoreparties.co' + data.image.url,
                  trailer: data.trailerLink,
                  thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
                  movieId: data.id,
                  nameRU: data.nameRU,
                  nameEN: data.nameEN,
              }),
          })
          .then(this._checkResponse);
      }

      //метод по удалению фильма
      deleteMovie(movieId, jwt) {
          return fetch(`${this._url}movies/${movieId}/`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${jwt}`,
              },
          })
          .then(this._checkResponse);
      }


}


const mainApi = new MainApi({
    url: "http://localhost:3005/",
    headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,

    }
});

export default mainApi;
