import { inject, observer } from 'mobx-react'
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png";
import { useConnect } from '@blockstack/connect';
import { authenticate } from '../../../services/authentication';

import Button from "react-bootstrap/Button";

const Auth = ({ history, user }) => {
  const { doOpenAuth } = useConnect();

  return (
    <Link onClick={() =>
      authenticate({ history, user, doOpenAuth })
    }>
      Already have an account?<br/>Click here to sign in
    </Link>
  )
}

class RegistrationOrLogin extends React.Component {
  render() {
    const { history, user } = this.props

    return (
      <div className="wrapper">
        <section id="intro">
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="text-box">
            <h4 className="font-weight-bold">Be a Hero. Make a Hero.<br/> Keep the loop going.</h4>
          </div>

          <div>
            <Link to="/registration/terms">
              <Button className="btn btn-block helper-btn">
                Join The Loop
              </Button>
            </Link>
          </div>

          <Auth history={ history } user={ user }/>
        </section>
      </div>
    );
  }
}

export default withRouter(
  inject('user')(observer(RegistrationOrLogin))
)
