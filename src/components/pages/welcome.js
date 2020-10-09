import { inject, observer } from 'mobx-react'
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import handsColorReceiver from "../../assets/img/hands_orange.svg";
import { useConnect } from '@blockstack/connect';

import { authenticate } from '../../services/authentication';

import Button from "react-bootstrap/Button";

const Auth = ({ history, user }) => {
  const { doOpenAuth } = useConnect();

  return (
    <Link onClick={() =>
      authenticate({ history, user, doOpenAuth })
    }>
      Already have an account? Click here to sign in
    </Link>
  )
}

class Welcome extends React.Component {
  render() {
    const { history, user } = this.props

    return (
      <div className="wrapper">
        <section id="intro">
          <div>
            <img src={handsColorReceiver} className="hands" alt="hands" />
          </div>
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="text-box">
            <h3>Welcome to the digital voluntary app</h3>
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
  inject('user')(observer(Welcome))
)
