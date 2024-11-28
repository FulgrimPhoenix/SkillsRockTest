
class Api {
  constructor(url) {
    this.url = url;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(options) {
    return fetch(this.url, options).then(this._checkResponse.bind(usersApi));
  }

  getUsers(){
    return this._request({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
  }
}

export const usersApi = new Api("https://randomuser.me/api/?results=10")