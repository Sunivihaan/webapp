import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import {Switch, Route, withRouter} from "react-router-dom";

import Home from "./components/pages/home";
import RegistrationOrLogin from "./components/pages/registration/registrationOrLogin";
import Authenticating from "./components/pages/authenticating";

import FoodRequest from "./components/pages/looper/request/foodRequest"
import TransRequest from "./components/pages/looper/request/transRequest"
import MedRequest from "./components/pages/looper/request/medRequest"
import OthersRequest from "./components/pages/looper/request/othersRequest"
import RequestDrivingTime from "./components/pages/looper/requestDrivingPickupTime"
import DeliveryPayment from "./components/pages/looper/deliveryPayment"
import Availability from "./components/pages/looper/availability"
import RequestSplashScreen from "./components/pages/looper/reqSplashScreen"
import RequestFinish from "./components/pages/looper/requestFinish"
import RatingFinish from "./components/pages/ratings/ratingsFinish"

import MyTasks from "./components/pages/hero/request/mytasks"
import MyTasks2 from "./components/pages/hero/request/mytasks2"
import MyTasksWeb from "./components/pages/hero/request/mytasksweb"
import MyTasksWebHero from "./components/pages/hero/request/mytaskswebhero"

import LooperProfile from "./components/pages/looper/profile/looperProfile"
import HeroProfile from "./components/pages/hero/profile/heroProfile"

import RequestConfirmation from "./components/pages/request/confirmation"
import RequestMap from "./components/pages/request/map"

import HelperMap from "./components/pages/helper/map"
import MarkerInfoWindow from "./components/pages/helper/markerInfoWindow"

import Rate from "./components/pages/ratings/rate"

import MyHeroApp from "./components/pages/ratings/myheroapp"
import RateHero from "./components/pages/ratings/ratehero"
import RateLooper from "./components/pages/ratings/ratelooper"
import AcceptHero from "./components/pages/hero/acceptHero"

import TermsAndConditions from './components/pages/registration/termsAndConditions'
import VerifyEmail from './components/pages/registration/emailVerification'
import Explanation from './components/pages/registration/explanation'
import KeyGeneration from './components/pages/registration/keyGeneration'
import SetUsername from './components/pages/registration/setUsername'
import UserDetails from './components/pages/registration/userDetails'
import HeroSkills from './components/pages/registration/heroSkills'
import AccountType from './components/pages/registration/accountType'
import RegistrationFinishHero from "./components/pages/registration/finishRegistrationHero"
//eslint-disable-next-line
import Watson from "./components/pages/Watson"

/* Design Files */

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import './assets/css/Landingpage.css';
import "./assets/css/Registration.css";
import "./assets/css/Request.css";
import "./assets/css/Map.css";
import "./assets/css/Ratings.css";
import "./assets/css/Profile.css";
import "./assets/css/Users.css";
import "./assets/css/Chat.css";
import "./assets/css/Notifications.css";
import "./assets/css/media-queries.css";

/* End Design Files */

import {UserSession} from 'blockstack';
import {appConfig} from './constants';
import {Connect} from '@blockstack/connect';
// import {fetchProfile} from './user-data'
import LandingLayout from './components/layout/landingLayout';

const userSession = new UserSession({appConfig});

/* TODO: Put the navigation function to a separate module, like utils*/

class App extends Component {
    handleSignOut(e) {
        e.preventDefault();
        this.setState({ userData: null });
        userSession.signUserOut(window.location.origin);
    }

    render() {

        const authOptions = {
            appDetails: {
                name: "The Hero Loop",
                icon: window.location.origin + '/logo.png',
            },
            userSession,
            finished: ({ userSession }) => {

                const doFetchProfile = async () => {
                    // const response = await fetchProfile(userSession);

                    if ( window.sessionStorage.in_registry_process ) {
                        this.props.history.push( "/registration/details" );
                        window.location.reload();
                    }
                    else {
                        // TODO: record response profile

                        this.props.history.push( "/authenticating" ); // select view depending on user role
                        window.location.reload();
                    }
                }

                doFetchProfile();
            },
        };

        return (
            <Connect className="App" authOptions={authOptions}>
                  <Switch>
                      <Route path="/looper/request/foodRequest" component={FoodRequest}/>
                      <Route path="/looper/request/transRequest" component={TransRequest}/>
                      <Route path="/looper/request/medRequest" component={MedRequest}/>
                      <Route path="/looper/request/othersRequest" component={OthersRequest}/>
                      <Route path="/looper/requestDrivingPickupTime" component={RequestDrivingTime}/>
                      <Route path="/looper/deliveryPayment" component={DeliveryPayment}/>
                      <Route path="/looper/availability" component={Availability}/>
                      <Route path="/looper/reqSplashScreen" component={RequestSplashScreen}/>
                      <Route path="/looper/requestFinish" component={RequestFinish}/>

                      <Route path="/request/confirmation" component={RequestConfirmation}/>
                      <Route path="/hero/request/mytasks" component={MyTasks}/>
                      <Route path="/hero/request/mytasks2" component={MyTasks2}/>
                      <Route path="/hero/request/mytasksweb" component={MyTasksWeb}/>
                      <Route path="/hero/request/mytaskswebhero" component={MyTasksWebHero}/>
                      <Route path="/hero/acceptHero" component={AcceptHero}/>

                      <Route path="/hero/profile" component={HeroProfile}/>
                      <Route path="/looper/profile" component={LooperProfile}/>

                      <Route path="/helper/map" component={HelperMap}/>
                      <Route path="/request/map" component={RequestMap}/>
                      <Route path="/helper/markerInfoWindow" component={MarkerInfoWindow}/>

                      <Route path="/ratings/myheroapp" component={MyHeroApp}/>
                      <Route path="/ratings/rate" component={Rate}/>
                      <Route path="/ratings/ratehero" component={RateHero}/>
                      <Route path="/ratings/ratelooper" component={RateLooper}/>
                      <Route path="/ratings/ratingsFinish" component={RatingFinish}/>

                      <LandingLayout>
                          <Route exact path="/" component={Home}/>

                          <Route path="/login" component={RegistrationOrLogin}/>
                          <Route path="/authenticating" component={Authenticating}/>
                          <Route path="/registration/terms" component={TermsAndConditions}/>
                          <Route path="/registration/verify" component={VerifyEmail}/>
                          <Route path="/registration/explanation" component={Explanation}/>
                          <Route path="/registration/key" component={KeyGeneration}/>
                          <Route path="/registration/username" component={SetUsername}/>
                          <Route path="/registration/details" component={UserDetails}/>
                          <Route path="/registration/skills" component={HeroSkills}/>
                          <Route path="/registration/type" component={AccountType}/>
                          <Route path="/registration/finish" component={RegistrationFinishHero}/>

                      </LandingLayout>
                  </Switch>
            </Connect>

        );
    }

    componentDidMount() {

        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then(userData => {
                window.history.replaceState({}, document.title, '/');
            });
        } else if (userSession.isUserSignedIn()) {
            const userData = userSession.loadUserData()

            console.log( `retrieving blockstack username: ${ userData.username }` )

            this.props.user.data.id = userData.username
            this.props.user.token = window.sessionStorage.token

            // TODO: register private keys and tokens
        }
    }
}


export default withRouter(
    inject('user')( observer(App) )
)
