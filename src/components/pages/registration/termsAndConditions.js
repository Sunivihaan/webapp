import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Checkmark from "../../../assets/img/checkmark.png";

import TermsAndConditionsText from "./termsAndConditionsText";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";

class RegistrationTerms extends React.Component {

    state = {
        termsAndConditionsAccepted: false
    }

    changeTermsOfServiceFlag() {
      const termsAndConditionsAccepted = !this.state.termsAndConditionsAccepted

      this.setState({ termsAndConditionsAccepted })

      window.sessionStorage.in_registry_process =
        termsAndConditionsAccepted ? 'true' : ''
    }

    render() {
        return (
            <div className="wrapper">
                <section id="registration_terms">
                    <div className="text-box">
                        <h1>First, Let's align on the legal stuff</h1>
                    </div>

                    <h2 className="black">Terms and Conditions</h2>
                    <p className="font-weight-bold">What will we collect?</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                        venenatis vitae, justo.
                    </p>
                    <p className="font-weight-bold">Do you want to know more?</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Please read our service agreement below before you proceed.
                    </p>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Read the license agreement
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <TermsAndConditionsText />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Form>
                        <Form.Group>
                            <div id="registration-checkbox-wrapper" className="form-item">
                                <div className={`checkbox${this.state.termsAndConditionsAccepted === true ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark}
                                      onClick={ () => this.changeTermsOfServiceFlag() }
                                    />
                                </div>
                                <FormCheckLabel>I agree to the terms and conditions</FormCheckLabel>
                            </div>
                        </Form.Group>
                    </Form>
                    <div className="mt-4">
                      <Link to="/registration/verify">
                        <Button className="btn btn-block helper-btn"
                          disabled={ !this.state.termsAndConditionsAccepted }
                        >
                          Create My Account
                        </Button>
                      </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default RegistrationTerms;
