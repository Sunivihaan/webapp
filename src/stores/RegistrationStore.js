import { decorate, observable } from 'mobx'

import ApiService from '../services/api'

const EMPTY_USER_DATA = {
  id: '',
  firstName: '',
  lastName: '',
  bankId: '',
  email: '',
  password: '', // TODO: will still be needed with new auth ?
  phone: '',
  address: {
    street: '',
    postalCode: '',
    city: '',
  },
  location: {
    latitude: '',
    longitude: '',
  },
  status: 0,
  role: '',
  about: ''
}

class RegistrationStore {
  api = new ApiService()

  message = ''
  termsOfServiceAccepted = false
  user = {}

  static emptyUserData() {
    return JSON.parse( JSON.stringify(EMPTY_USER_DATA) )
  }

  constructor() {
    this.clearUser()
  }

  clearMessage() {
    this.message = ''
  }

  clearUser() {
    this.user = RegistrationStore.emptyUserData()
  }

  async register() {
    let response = {}

    try {
      const apiUser = {
        id: this.user.id,
        password: 'secret', // TODO: change with blockstack token or dev token
        role: this.user.role
      }

      response = await this.api.addUser( apiUser )

      this.message = response.token ? '' :
        response.msg || 'An error occurred.'
    } catch (error) {
      response = { error }

      this.message = 'Request failed. Please try again later.'
    }

    return response
  }
}

decorate( RegistrationStore, {
  message: observable,
  termsOfServiceAccepted: observable,
  user: observable
})

export default RegistrationStore
