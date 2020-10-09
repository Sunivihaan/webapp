import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

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
            <>
                {
                    looperProfile.uiStates.popups[0] === true &&
                    (
                        <Modal.Dialog id="availability-wrapper" className="alt-modal-body">
                            <Modal.Header closeButton>
                                <div className="confirmation flex-section">
                                    <div className="confirm-btn" onClick={(param) => this.closePopup()}>
                                        <p>Cancel</p>
                                    </div>
                                    <div id="save-btn" className="confirm-btn" onClick={(param) => this.saveAccountDetails()}>
                                        <p>Save</p>
                                    </div>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <h2 className="black left heading">Account Details</h2>
                                <Form id="looper-options" className="flex-section modal-section-alt">
                                    <div className="form-row">
                                        <div className="form-column flex-section">
                                            <h2 className="heading black">First name:</h2>
                                            <Form.Control type="text" placeholder="Agda" />
                                        </div>
                                        <div className="form-column flex-section">
                                            <h2 className="heading black">Last name:</h2>
                                            <Form.Control type="text" placeholder="Karlsson" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-column flex-section">
                                            <h2 className="heading black">Phone:</h2>
                                            <Form.Control type="text" placeholder="123-456-789" />
                                        </div>
                                        <div className="form-column flex-section">
                                            <h2 className="heading black">Email:</h2>
                                            <Form.Control type="email" placeholder="agda.karlsson@gmail.com" />
                                        </div>
                                    </div>
                                </Form>
                            </Modal.Body>
                        </Modal.Dialog>
                    )
                }
            </>
        )
    }
}

export default withRouter(
    inject('looperProfile')( observer(LooperProfileOptions) )
)
