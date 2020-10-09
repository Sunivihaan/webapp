import {inject, observer} from "mobx-react"
import React from "react";
import { Link } from "react-router-dom";

import RegistrationProcess from "./registrationProcess";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

class UserDetails extends React.Component {

    constructor(props) {
        super(props)
        this._onChange = this._onChange.bind(this)
    }

    _onChange(event) {
        const {user} = this.props.registration;
        const {name, value} = event.target;

        if (['street', 'postalCode', 'city'].includes(name)) {
            user.address[name] = value;
        } else {
            user[name] = value;
        }
    }

    render() {
        const {registration} = this.props;
        const {user} = registration;

        const {
            firstName, lastName, phone
        } = user;

        const current = 3;

        return (
            <div className="wrapper">
                <section id="registration_terms" className="flex-section column centered">
                    <RegistrationProcess current={current}/>
                    <div className="text-box">
                        <h1>Nice to meet you:)</h1>
                    </div>
                    <Form>
                        <Form.Group>
                            <Form.Label>What's your First name ?</Form.Label>
                            <Form.Control type="text" size="lg" name="firstName" placeholder="Jane"
                                  onChange={this._onChange}
                                  value={firstName}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What's your Last name ?</Form.Label>
                            <Form.Control type="text" size="lg" name="lastName" placeholder="Green"
                                  onChange={this._onChange}
                                  value={lastName}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What's your Phone number ?</Form.Label>
                            <Form.Control type="text" size="lg" name="phone" placeholder="656-656-5656"
                                  onChange={this._onChange}
                                  value={phone}
                            />
                        </Form.Group>
                    </Form>
                    <div className="mt-4">
                      <Link to="/registration/type">
                        <Button className="btn btn-block helper-btn"
                          disabled={false /* TODO: enable only when information is complete */}
                        >
                            I'm ready to start
                        </Button>
                      </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default inject('registration', 'user')(observer(UserDetails));
