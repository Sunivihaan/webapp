import { inject, observer } from "mobx-react";
import React from "react";
import Button from "react-bootstrap/Button";

import RegistrationProcess from "./registrationProcess";
import SplashScreen from "./splashScreen" ;

import passwordManager from "../../../assets/img/password-manager.png";
import makeScreenshot from "../../../assets/img/make-screenshot.png";
import writeOnPaper from "../../../assets/img/write-on-paper.png";

import { UserSession } from 'blockstack';
import { useConnect } from '@blockstack/connect';
import { appConfig } from '../../../constants';

// eslint-disable-next-line no-unused-vars
const userSession = new UserSession({ appConfig });
const BlockstackRegistration = (disabled) => {
    //Consider using disable
    const { doOpenAuth } = useConnect();
    return (
        <Button className="btn btn-block helper-btn"
                onClick={() => {
                    doOpenAuth(true)
                    disabled={disabled}
                }}
        >
            Save my personal key
        </Button>
    )
}

class KeyGeneration extends React.Component {
    pageId;

    state = {
        showGif: false,
        termsAndConditionsAccepted: false
    }

    constructor(props) {
        super(props)

        this.pageId = 1;    this.changeTermsOfServiceFlag = this.changeTermsOfServiceFlag.bind(this)
    }

    changeTermsOfServiceFlag(event) {
        const { registration } = this.props;
        registration.termsOfServiceAccepted = event.target.checked
        this.setState({
            showGif: !this.state.showGif,
            termsAndConditionsAccepted: !this.state.termsAndConditionsAccepted
        })
    }

    render() {
        const { registration } = this.props;
        const current = 1;
        return (
            <div className="wrapper">
                {this.state.showGif && <SplashScreen />}
                <section id="registration_terms" className="flex-section column centered wrapper">
                    <RegistrationProcess current={current} />
                    <div className="text-box">
                        <h1>Your secret key</h1>
                    </div>
                    <p>
                        These words will be used to identify yourself on another device.
                        You won't need them again for this device.
                    </p>
                    <p className="warning-text">
                        WE CANNOT RETRIEVE YOUR KEY IF IT WAS LOST
                    </p>
                    <textarea id="key-textarea" defaultValue={"bread butter also go cucumber orange tide house giva ground floor purple"}/>
                    <div className="mt-4">
                        <BlockstackRegistration disabled={!registration.termsOfServiceAccepted} />
                    </div>
                </section>
                <div className="divider"></div>
                <div id="key-information" className="flex-section column centered">
                    <h2 className="black">Take a moment:</h2>
                    <h6 className="black">Where should you save your key?</h6>
                    <div id="details-wrapper" className="flex-section sp-evn">
                        <div className="flex-section centered column">
                            <img alt="" src={passwordManager}/>
                            <p className="black">Password manager</p>
                        </div>
                        <div className="flex-section centered column">
                            <img alt="" src={makeScreenshot}/>
                            <p className="black">Screenshot</p>
                        </div>
                        <div className="flex-section centered column">
                            <img alt="" src={writeOnPaper}/>
                            <p className="black">Write it on paper</p>
                        </div>
                    </div>
                    <div id="hint-text-wrapper">
                        <p className="black font-italic wrapper text-center">
                            Anybody with your secret key can have access to your account.<strong> Keep it safe.</strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('registration')(observer(KeyGeneration));
