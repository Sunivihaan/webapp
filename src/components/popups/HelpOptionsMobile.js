import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import Modal from "react-bootstrap/Modal";
import Checkmark from "../../assets/img/checkmark.png";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import Arrow from "../../assets/img/arrow.svg";
import pic2 from "../../assets/img/food2.png";
import pic3 from "../../assets/img/driving.png";
import pic4 from "../../assets/img/med2.png";
import pic5 from "../../assets/img/other2.png";

class HelpOptionsMobile extends React.Component {

    //function to handle popups and checkboxes

    handlePopupOrCheckboxAction(index){
        const { heroProfile: profile } = this.props;
        let elems = profile.uiStates.checkboxes;
        let elem = elems[index];
        elems[index] = !elem;
        this.setState({});
    }

    closePopup() {
        const { heroProfile: profile } = this.props;
        let elems = profile.uiStates.popups;
        let elem = elems[0];
        elems[0] = !elem;
        this.setState({});
    }

    /*
    closePopupNew(){
        const { heroProfile: profile } = this.props;
        profile.popups.helpOptions = false;
        this.setState({});
    }

    handleCheckboxAction(index){
        const { heroProfile: profile } = this.props;
        let checkboxes = profile.checkboxes.helpOptions;
        let checkbox = checkboxes[index];
        checkboxes[index] = !checkbox;
        this.setState({});
    }
     */

    render(){

        const { heroProfile: profile } = this.props;

        return(
            <div>
                {
                    profile.uiStates.popups[0] === true &&
                    (
                        <div className="popup">
                            <Modal.Header>
                                <div id="back-arrow">
                                    <img alt="" id="arrow" src={Arrow} onClick={(param) => this.closePopup(0)}/>
                                </div>
                                <Modal.Title className="black left heading">How would you like to
                                    help?
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <div className="flex-section">
                                    <div className="form-item">
                                        <div
                                            className={`checkbox${profile.uiStates.checkboxes[0] === false ? "" : "-disabled"}`}>
                                            <img alt="" src={Checkmark} onClick={(param) => this.handlePopupOrCheckboxAction(0, true)}/>
                                        </div>
                                        <FormCheckLabel>I can go shopping for someone</FormCheckLabel>
                                    </div>
                                    <div className="form-item">
                                        <div
                                            className={`checkbox${profile.uiStates.checkboxes[1] === false ? "" : "-disabled"}`}>
                                            <img alt="" src={Checkmark} onClick={(param) => this.handlePopupOrCheckboxAction(1, true)}/>
                                        </div>
                                        <FormCheckLabel>I can pick something up and deliver</FormCheckLabel>
                                    </div>
                                    <div className="form-item">
                                        <div
                                            className={`checkbox${profile.uiStates.checkboxes[2] === false ? "" : "-disabled"}`}>
                                            <img alt="" src={Checkmark} onClick={(param) => this.handlePopupOrCheckboxAction(2, true)}/>
                                        </div>
                                        <FormCheckLabel>I have a car and can drive</FormCheckLabel>
                                    </div>
                                    <div className="form-item">
                                        <div
                                            className={`checkbox${profile.uiStates.checkboxes[3] === false ? "" : "-disabled"}`}>
                                            <img alt="" src={Checkmark} onClick={(param) => this.handlePopupOrCheckboxAction(3, true)}/>
                                        </div>
                                        <FormCheckLabel>I can travel by bycicle / walk</FormCheckLabel>
                                    </div>
                                    <div className="form-item">
                                        <div
                                            className={`checkbox${profile.uiStates.checkboxes[4] === false ? "" : "-disabled"}`}>
                                            <img alt="" src={Checkmark} onClick={(param) => this.handlePopupOrCheckboxAction(4, true)}/>
                                        </div>
                                        <FormCheckLabel>I can help you with tasks at home, like moving furniture
                                            or changing a lightbulb</FormCheckLabel>
                                    </div>
                                    <div className="form-item">
                                        <div
                                            className={`checkbox${profile.uiStates.checkboxes[5] === false ? "" : "-disabled"}`}>
                                            <img alt="" src={Checkmark} onClick={(param) => this.handlePopupOrCheckboxAction(5, true)}/>
                                        </div>
                                        <FormCheckLabel>I tested positive for COVID-19
                                            antibodies</FormCheckLabel>
                                    </div>
                                </div>
                                <button className="action-btn" onClick={(param) => this.closePopup(0)}>Update</button>
                                <div>
                                    <img alt="" src={pic2} className="offer"/>
                                    <img alt="" src={pic3} className="offer"/>
                                    <img alt="" src={pic4} className="offer"/>
                                    <img alt="" src={pic5} className="offer"/>
                                </div>
                            </Modal.Body>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default withRouter(
    inject('heroProfile')( observer(HelpOptionsMobile) )
)
