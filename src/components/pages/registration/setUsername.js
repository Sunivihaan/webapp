import { inject, observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import RegistrationProcess from "./registrationProcess";

import * as CONSTANTS from "../../../constants/index";

class SetUsername extends React.Component {

    constructor(props){
        super();
        this.state = {
            validUserName: false
        }
    }

    validate(value) {
        this.setState({
            validUserName: CONSTANTS.USERNAME_EXPRESSION_VALIDATION.test(String(value).toLowerCase())
        });
    }

    render() {
        const current = 2;
        return (
            <div className="wrapper">
                <section id="registration_terms" className="flex-section column centered wrapper">
                    <RegistrationProcess current={current} />
                    <div className="text-box">
                        <h1>Set a username</h1>
                    </div>
                    <p>
                        This will be your account name,  it’s best to go with your name or a combination of name and numbers.
                    </p>
                    <p className="font-weight-bold">You’ll use your username for  1-click login</p>
                    <div id="username-wrapper">
                        <p>Username:</p>
                        <textarea id="key-textarea" onChange={event => this.validate(event.target.value)} placeholder={"lower-case letters and numbers only"}/>
                    </div>
                    <div className="mt-4">
                        <Link to="/registration/details">
                            <Button className="btn btn-block helper-btn" disabled={!this.state.validUserName}>
                                Create my username
                            </Button>
                        </Link>
                    </div>
                </section>
                <div className="flex-section column centered">
                    <Button id="back-btn" className="btn btn-block">
                        Back to my secret key
                    </Button>
                    <div id="hint-text-wrapper">
                        <p className="black wrapper text-center">
                            You cannot access your key again after creating a username
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('registration')(observer(SetUsername));
