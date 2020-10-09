import React, { useEffect } from 'react'

import { useConnect } from '@blockstack/connect';

import LoginExpGif from '../../../assets/img/login-exp.gif'
import {
  EXPLANATION_TIMEOUT, IS_BLOCKCHAIN_REGISTRATION_DISABLED
} from '../../../constants';

const ExplanationScreen = ({ history }) => {
    const { doOpenAuth } = useConnect();

    useEffect(() => {
        const timer = setTimeout(() => {
          if( IS_BLOCKCHAIN_REGISTRATION_DISABLED )
            history.push( '/registration/details' );
          else
            doOpenAuth(true);
        }, EXPLANATION_TIMEOUT )

        return () => {
            clearTimeout(timer)
        }
    })

    return (
            <div className="flex-section centered wrapper">
                <img
                    id='splash-screen'
                    src={LoginExpGif}
                    alt='login-exp'
                    className='centered'
                />
            </div>
    )
}

export default ExplanationScreen
