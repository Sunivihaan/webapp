import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Arrow from "../../assets/img/arrow.svg";

class LooperProfileOptions extends React.Component {

    constructor() {
        super()

        this.states = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: 123456
        }
    }

    handleChangesToTimesAndDays(index, end, all, days){
        const { looperProfile } = this.props;
        let elems;
        let elem;

        if(days)
            elems = looperProfile.uiStates.dayStates;
        else
            elems = looperProfile.uiStates.timeStates;

        if(all)
            elems.fill(true, index, end)
        else
            elem = elems[index];
        elems[index] = !elem;
        this.setState({});
    }

    closePopup() {
        const { looperProfile } = this.props;
        let elems = looperProfile.uiStates.popups;
        let elem = elems[0];
        elems[0] = !elem;
    }

    saveAccountDetails() {
        // const { looperProfile } = this.props;
        // let elems = looperProfile.userDetails;

    }


    render(){

        const { looperProfile } = this.props;

        return(
            <div>
                {
                    looperProfile.uiStates.popups[0] === true &&
                    (
                        <Modal.Dialog className="popup" id="availability-popup">
                            <Modal.Header>
                                <div id="back-arrow">
                                    <img alt="" id="arrow" src={Arrow} onClick={(param) => this.closePopup()}/>
                                </div>
                                <Modal.Title className="black left heading">Account Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h2 className="black left heading">Account Details</h2>
                                <Form id="looper-options" className="flex-section">
                                    <div className="form-column flex-section">
                                        <div className="flex-section flex-row">
                                            <h2 className="heading black">First name:</h2>
                                            <Form.Control type="text" placeholder="Agda" />
                                        </div>
                                        <div className="flex-section flex-row">
                                            <h2 className="heading black">Last name:</h2>
                                            <Form.Control type="text" placeholder="Karlsson" />
                                        </div>
                                        <div className="flex-section flex-row">
                                            <h2 className="heading black">Phone:</h2>
                                            <Form.Control type="text" placeholder="123-456-789" />
                                        </div>
                                        <div className="flex-section flex-row">
                                            <h2 className="heading black">Email:</h2>
                                            <Form.Control type="email" placeholder="agda.karlsson@gmail.com" />
                                        </div>
                                    </div>
                                    <div id="save-btn" className="confirm-btn" onClick={(param) => this.saveAccountDetails()}>
                                        <p>Save</p>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal.Dialog>
                    )
                }
            </div>
        )
    }
}

export default withRouter(
    inject('looperProfile')( observer(LooperProfileOptions) )
)
