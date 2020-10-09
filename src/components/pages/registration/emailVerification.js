import { inject, observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import * as CONSTANTS from "../../../constants/index";

import emailIcon from "../../../assets/img/email-icon.PNG";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";

class RegistrationTerms extends React.Component {

    constructor(props){
        super();
        this.state = {
            validEmail: false
        }
    }

    validate(value) {
        this.setState({
            validEmail: CONSTANTS.EMAIL_EXPRESSION_VALIDATION.test(String(value).toLowerCase())
        });
    }

    render() {
        return (
            <div className="wrapper">
                <section id="registration_terms" className="flex-section column centered">
                    <div className="text-box">
                        <h1>Verify your email</h1>
                    </div>
                    <p>
                        In order to keep us all safe, we’ll send you a code to verify your email.
                        We do not store any of your private information, it will only be used to verify you’re a human.
                    </p>
                    <img id="email-icon" alt="" src={emailIcon} />
                    <Form className="width-section flex-section centered">
                        <Form.Group>
                            <FormCheckLabel>Enter your email</FormCheckLabel>
                            <Form.Control type="email" placeholder="Your email address" onChange={event => this.validate(event.target.value)}/>
                        </Form.Group>
                    </Form>
                    <div className="mt-4">
                        <Link to="/registration/explanation">
                            <Button className="btn btn-block helper-btn" disabled={!this.state.validEmail}>
                                Send me a verification email
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default inject('registration')(observer(RegistrationTerms));
