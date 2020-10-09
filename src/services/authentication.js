import {
  IS_BLOCKCHAIN_REGISTRATION_DISABLED,
  FIXED_REGISTRATION_USER_FOR_DEVELOPMENT
} from '../constants';

export const authenticate = async ({ history, user, doOpenAuth }) =>
{
  if( IS_BLOCKCHAIN_REGISTRATION_DISABLED )
  {
    user.data.id = FIXED_REGISTRATION_USER_FOR_DEVELOPMENT

    history.push( '/authenticating' )
  }
  else // invoke blockchain authentication
    doOpenAuth( true )
}
