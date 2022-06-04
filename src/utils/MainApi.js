class MainApi {
  constructor({address, headers}) {
    this._address = address;
    this._headers = headers;
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._checkResponseStatus)
  }

  setUserInfo({name, email}) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      
      body: JSON.stringify({
        name: name, 
        email: email})
    })
    .then(this._checkResponseStatus);
  }

  getMovies() {
    return fetch(`${this._address}/movies`, {
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponseStatus);
  }

  addMovie(movie) {
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country || 'Нет данных',
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: (`https://api.nomoreparties.co/${movie.image.url}`),
        trailerLink: movie.trailerLink || 'https://www.youtube.com',
        thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
        movieId: movie.id,
        nameRU: movie.nameRU || 'Нет данных',
        nameEN: movie.nameEN || 'Нет данных'})
    })
    .then(this._checkResponseStatus);
  }

  deleteMovie(movieId) {
    return fetch(`${this._address}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers, 
    })
    .then(this._checkResponseStatus);
  }
}

const mainApi = new MainApi({
  address: 'https://api.movies-explorer.nsh.nomoredomains.work',
  // для локальной отладки
  // address: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default mainApi