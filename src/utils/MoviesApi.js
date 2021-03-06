//класс для подключения api

class MoviesApi {
    //конструктор принимает адрес куда обращаться за данными (или куда их отправлять) и настройки.
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }


    //публичный метод по получению данных фильмов

    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._headers
        }).then(this._checkResponse)
    }


    //приватный метод с повтряющимся кодом у всех запросов (то что идет после 1 return)

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Сервер недоступен. Ошибка: ${res.status}.`);
    }

}

const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co/beatfilm-movies/",
    headers: {
        "content-type": "application/json"

    }
});

export default moviesApi;
