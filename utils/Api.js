import {url,
        userAuthData} from './constants';
class Api {
  constructor(url, { userToken, cohortName }) {
    this._url = url;
    this._userToken = userToken;
    this._cohort = cohortName;
  }

  _processResponse(response, error) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(error);
  }

  _createSimpleRequest(extensionUrl, requestMethod, errorText) {
    this._completeUrl = `${this._url}/${this._cohort}`.concat(extensionUrl);
    return fetch(this._completeUrl, {
      method: requestMethod,
      headers: {
        'authorization': `${this._userToken}`
      }
    })
    .then(response => this._processResponse(response, errorText))
  }

  _createBodyRequest(extensionUrl, requestMethod, errorText, bodyData) {
    this._completeUrl = `${this._url}/${this._cohort}`.concat(extensionUrl);
    return fetch(this._completeUrl, {
      method: requestMethod,
      headers: {

        'authorization': `${this._userToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    })
    .then(response => this._processResponse(response, errorText))
  }

  getUserInfo() {
    return this._createSimpleRequest('/users/me', 'GET', 'Ошибка авторизации')
  }

  getCardsData() {
    return this._createSimpleRequest('/cards', 'GET', 'Ошибка обновления карточек')
  }

  deleteCardData(cardId) {
    return this._createSimpleRequest(`/cards/${cardId}`, 'DELETE', 'Ошибка удаления карточки')
  }

  updateAvatarData(formData) {
    return this._createBodyRequest('/users/me/avatar', 'PATCH', 'Ошибка обновления аватара', formData)
  }

  sendCardData(formData) {
    return this._createBodyRequest('/cards', 'POST', 'Ошибка добавления карточки', formData)
  }

  updateProfileData(formData) {
    return this._createBodyRequest('/users/me', 'PATCH', 'Ошибка обновления профиля', formData)
  }

  addLikeToCard(cardId) {
    return this._createSimpleRequest(`/cards/${cardId}/likes`, 'PUT', 'Ошибка добавления лайка')
  }

  delLikeToCard(cardId) {
    return this._createSimpleRequest(`/cards/${cardId}/likes`, 'DELETE', 'Ошибка удаления лайка')
  }
}

const api = new Api(url, userAuthData);

export {api};


