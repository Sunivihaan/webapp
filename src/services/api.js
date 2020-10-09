const apiServer = process.env.REACT_APP_API_SERVER

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export default class ApiService {
  async _invoke(method, operation, payload, token) {
    const endpoint = `${apiServer}/${operation}`
    const headers = { ...DEFAULT_HEADERS }

    if (token) headers['X-Auth-Token'] = token

    const options = { method, headers }

    if (payload) options.body = JSON.stringify(payload)

    const response = await fetch(endpoint, options)

    // TODO: handle HTTP error status

    return response.json()
  }

  _get(operation, token) {
    return this._invoke('GET', operation, null, token)
  }

  _post(operation, payload, token) {
    return this._invoke('POST', operation, payload, token)
  }

  _put(operation, payload, token) {
    return this._invoke('PUT', operation, payload, token)
  }

  _delete(operation, payload, token) {
    return this._invoke('DELETE', operation, payload, token)
  }

  //////////////////////////////////////////////////////////////////////////
  // Ratings API

  listPendingRatings(userId, token) {
    return this._get(`users/${userId}/ratings/pending`, token)
  }

  addRating(rating, token) {
    return this._post('ratings', rating, token)
  }

  //////////////////////////////////////////////////////////////////////////
  // User API

  addUser(user) {
    return this._post('users', user)
  }

  authenticateUser(user) {
    return this._post('users/auth', user)
  }

  updateUser({ id, ...user }, token) {
    return this._put(`users/${id}`, user, token)
  }

  logoutUser(userId, token) {
    return this._post(`users/${userId}/logout`, {}, token)
  }

  //Availability of user in days and timeslots
  // TODO: extend api service for new endpoint
  updateAvailability(userId, token, availability) {
    return this._post(`users/${userId}/availability`, {availability}, token)
  }

  getAvailability(userId, token) {
    return this._get(`users/${userId}/availability`, token)
  }

  //User description, personal text and user stats

  updateUserDetails(userId, token, userDetails) {
    return this._put(`users/${userId}/details`, {userDetails}, token)
  }

  getUserDetails(userId, token) {
    return this._get(`users/${userId}/details`, token)
  }

  //User stats including total and periodic number of assignments done

  getUserStats(userId, token) {
    return this._get(`users/${userId}/stats`, token)
  }
}
