import { inject, observer } from "mobx-react"

import React from "react";

import { withRouter } from 'react-router';

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import SplashScreen from "./splashScreen"


import Progress from "./progress";
import { saveProfile } from "../../../user-data";
import {
  appConfig,
  FIXED_REGISTRATION_USER_FOR_DEVELOPMENT,
  IS_BLOCKCHAIN_REGISTRATION_DISABLED
} from "../../../constants";

import { UserSession } from "blockstack";


const userSession = new UserSession({ appConfig });


class RegistrationInformation extends React.Component {



  constructor( props ) {

    super( props )



    this._onChange = this._onChange.bind( this )

  }



  _onChange(event) {

    const { user } = this.props.registration;
    const { name, value } = event.target;

    if( [ 'street', 'postalCode', 'city' ].includes(name) ){
      user.address[name] = value;
    }
    else{
      user[name] = value;
    }
  }



  async _registerUser(){

  const { registration, user } = this.props

  if( IS_BLOCKCHAIN_REGISTRATION_DISABLED ) {
    registration.user.id = FIXED_REGISTRATION_USER_FOR_DEVELOPMENT
  } else {
    registration.user.id = user.id // id saved to user persistent store during blockstack authentication

  	console.log("Register user data in the blockstack db");

    const profile = {}; /*Fill this with the user details from the form */
    saveProfile(userSession, profile)
  }

  const response = await registration.register()

  /*TODO: Redirect if saving userdata was successful */
  if( response.token ) {
    user.data = response

    this.props.history.push( '/registration/finish' );
  }
}



  render() {

    const { registration } = this.props;

    const { message, user } = registration;

    const {

      firstName, lastName, phone, email

    } = user;


    const current = 3;



    return (

      <div className="wrapper">

	  <SplashScreen/>


        <Progress current={current}/>

        <section id="registration_information">

          <div className="text-box">

            <h3>Nice to meet you  :)</h3>

          </div>



          <div className={ `alert alert-danger ${ message ? '' : 'd-none' }` }

            onClick={ () => registration.clearMessage() }

          >

            { message }

          </div>



          <Form>

            <Form.Group>

              <Form.Label>What's your First name ?</Form.Label>

              <Form.Control type="text" size="lg" name="firstName" placeholder="Jane"

                onChange={ this._onChange }

                value={ firstName }

              />

            </Form.Group>

            <Form.Group>

              <Form.Label>What's your Last name ?</Form.Label>

              <Form.Control type="text" size="lg" name="lastName" placeholder="Green"

                onChange={ this._onChange }

                value={ lastName }

              />

            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text"  size="lg" name="email" placeholder="Enter your Email"
               onChange={ this._onChange }

               value={ email }
               />
            </Form.Group>

            <Form.Group>

              <Form.Label>What's your Phone number ?</Form.Label>

              <Form.Control type="text" size="lg" name="phone" placeholder="656-656-5656"

                onChange={ this._onChange }

                value={ phone }

              />

            </Form.Group>

          </Form>



          <div className="mt-4">

            <Button className="btn btn-block helper-btn"

              disabled={ false /* TODO: enable only when information is complete */ }

              onClick={ () => this._registerUser() }

            >

              I'm ready to start

            </Button>

          </div>

        </section>

      </div>

    );

  }

}



export default withRouter(

  inject('registration', 'user')( observer(RegistrationInformation) )

);
