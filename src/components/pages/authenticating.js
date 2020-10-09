import {inject, observer} from "mobx-react";
import React, { useEffect } from 'react'

const authenticate = async ({ history, user }) =>
{
  if( !user.isLoggedIn() ) {
    const response = await user.login()

    if( !response.token )
      return;
  }

  // TODO: go to appropriate screens according to what's defined in PRD
  switch( user.data.role ) {
    case 'looper': history.push( '/looper/profile' ); break
    case 'hero': history.push( '/hero/profile' ); break
    default: user.message = `Invalid role: ${ user.data.role }` // TODO: handle this as a system error
  }
}

const Authenticating = ({ history, user }) => {
  useEffect( () => {
    user.clearMessage()

    authenticate({ history, user })
  })

  const message = user.message || 'Authenticating...' // TODO: handle authentication errors better

  return (
    <div className="flex-section centered wrapper">
      { message }
    </div>
  )
}

export default inject('user')(observer( Authenticating ));
