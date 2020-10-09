import {inject, observer} from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import heroChoice from "../../../assets/img/hero-choice.png";
import looperChoice from "../../../assets/img/looper-choice.png";
import {
  IS_BLOCKCHAIN_REGISTRATION_DISABLED, FIXED_REGISTRATION_USER_FOR_DEVELOPMENT
} from '../../../constants';

class AccountType extends React.Component {

    async _choose({ role, nextPage }) {
      const { user, registration } = this.props;

      registration.user.role = role;

      if (IS_BLOCKCHAIN_REGISTRATION_DISABLED)
        registration.user.id = FIXED_REGISTRATION_USER_FOR_DEVELOPMENT
      else {
        registration.user.id = user.data.id // id saved to user persistent store during blockstack authentication

        // console.log("Register user data in the blockstack db");

        // const profile = {}; /*Fill this with the user details from the previous form */
        // saveProfile(userSession, profile)
      }

      const response = await registration.register()

      // TODO: show error if no token was returned
      if (response.token) {
        window.sessionStorage.in_registry_process = ''
        window.sessionStorage.token = response.token // persistence is not working after blockchain reload, so we are using session storage so we can recreate the session as a workaround until we find why

        user.token = response.token
        user.data = { ...response }

        this.props.history.push( nextPage );
      }
    }

    _chooseLooper() {
      return this._choose({ role: 'looper', nextPage: '/looper/profile' })
    }

    _chooseHero() {
      return this._choose({ role: 'hero', nextPage: '/registration/skills' })
    }

    render() {
        return (
            <div className="flex-section sp-btw column centered wrapper">
                <img className="account-choice" alt="" src={ looperChoice }
                  onClick={ () => this._chooseLooper() }
                />
                <img className="account-choice" alt="" src={ heroChoice }
                  onClick={ () => this._chooseHero() }
                />
            </div>
        );
    }
}

export default withRouter(
    inject('registration', 'user')( observer(AccountType) )
)
