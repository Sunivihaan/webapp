import { inject, observer } from 'mobx-react'
import React from 'react'
import { withRouter } from 'react-router'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/img/logo.png'
import { Box } from '@blockstack/ui';
import { useConnect } from '@blockstack/connect';
import { Person } from 'blockstack';

const Login = ({ history }) => {

  return(
    <span className='nav-link' onClick={() =>
      history.push( '/login' )
    }>Login</span>
  )
}

const Auth = ({ history, user }) => {

  const { authOptions } = useConnect();
  const { userSession } = authOptions;

  if (!userSession.isUserSignedIn()) {
    return <Login history={ history }/>;
  }

  const userData = userSession.loadUserData();

  const Avatar = () => {
    const person = new Person(userData.profile);
    if (person.avatarUrl()) {
      return (
        <Box
          borderRadius="50%"
          width="24px"
          height="24px"
          display="inline-block"
          overflow="hidden"
          mr={2}
          style={{ position: 'relative', top: '6px' }}
        >
          <Box as="img" src={person.avatarUrl()} maxWidth="100%" minHeight="24px" minWidth="24px" />
        </Box>
      );
    }
    return null;
  };

  return (
    <Box>
      <Avatar />
      <span className='nav-link'
      onClick={() => this.navigate('')}>{userData.username}</span>
      <span className='nav-link'
      onClick={() => {
        userSession.signUserOut();
        window.sessionStorage.token = ''

        history.push( '/' );
      }}>Sign out</span>

    </Box>
  );
};

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  /* TODO: properly close navbar on navigation and logout */
  navigate(view) {
    const { history } = this.props
    view && history.push(view)
  }

  toggleNavbar() {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const { history, user } = this.props

    // eslint-disable-next-line
    const { data } = user // quirk, for some reason user is not hydrated unless the data field is extracted; this does not work for token.

    return (
      <header id='nav-wrapper'>
        <Navbar id='nav' bg='light' expand='xl' collapseOnSelect>
          <Navbar.Toggle onClick={this.toggleNavbar} />
          <Navbar.Brand href='./'>
            <img src={logo} id='logo' alt='The digital volunteer' onClick={() => this.navigate('/')} />
          </Navbar.Brand>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>

              {!user.isLoggedIn() && (
                <div>
                  <span className='nav-link' onClick={() => this.navigate('/#video-section')}>
                    About
                  </span>
                  <span className='nav-link' onClick={() => this.navigate('/#home-info')}>
                    How it works
                  </span>
                  <span className='nav-link' onClick={() => this.navigate('/#contact')}>
                    Contact
                  </span>

                </div>
              )}
              <Auth history={ history } user={ user }/>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default withRouter(
    inject('navigation', 'user')(observer(Navigation)))
