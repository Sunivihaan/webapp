import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import Arrow from "../../assets/img/arrow.svg";


class AvailabilityOptionsMobile extends React.Component {


    handleChangesToTimesAndDays(index, end, all, days){
        const { heroProfile: profile } = this.props;
        let elems;
        let elem;

        if(days)
            elems = profile.uiStates.dayStates;
        else
            elems = profile.uiStates.timeStates;

        if(all)
            elems.fill(true, index, end)

        else
            elem = elems[index];
        elems[index] = !elem;
        this.setState({});
    }

    //function to handle popups and checkboxes

    handlePopupOrCheckboxAction(index, checkbox){
        const { heroProfile: profile } = this.props;
        let elems;
        let elem;

        if(checkbox)
            elems = profile.uiStates.checkboxes;
        else
            elems = profile.uiStates.popups;

        elem = elems[index];
        elems[index] = !elem;
        this.setState({});
    }

    closePopup() {
        const { heroProfile: profile } = this.props;
        let elems = profile.uiStates.popups;
        let elem = elems[1];
        elems[1] = !elem;
        this.setState({});
    }

    render(){

        const { heroProfile: profile } = this.props;

        return(
            <div>
                {
                    profile.uiStates.popups[1] === true &&
                    (
                        <Modal.Dialog className="popup" id="availability-popup">
                            <Modal.Header>
                                <div id="back-arrow">
                                    <img alt="" id="arrow" src={Arrow} onClick={(param) => this.closePopup()}/>
                                </div>
                                <Modal.Title className="black left heading">You can select multiple options</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h2 className="black left heading">You can select multiple options</h2>
                                <div className="flex-section modal-section-alt">
                                    <div className="detail-wrapper weekdays-available slim">
                                        <div className="date-available mobile-date-available" onClick={(params) => this.handleChangesToTimesAndDays(0,5,true, true)}><p className="black no-space">Weekdays</p></div>
                                        <div className="date-available mobile-date-available" onClick={(params) => this.handleChangesToTimesAndDays(5,7,true, true)}><p className="black no-space">Weekends</p></div>
                                        { profile.availability.days.map( (days, index ) =>
                                            <div className={`date-available${profile.uiStates.dayStates[index] === false ? "" : "-highlighted"}`} onClick={(params) => this.handleChangesToTimesAndDays(index, null, null, true)}><p>{ profile.availability.days[index] }</p></div>
                                        )}
                                    </div>
                                </div>
                                <div id="time-details-wrapper">
                                    <div id="anytime-available" onClick={(params) => this.handleChangesToTimesAndDays(0,12, true, false)}>
                                        <h3 className="black">Anytime</h3>
                                    </div>
                                    <div id="days-details-wrapper">
                                        <div className="weekdays-available slim">
                                            { profile.availability.timeslots.map( (timeslots, index ) =>
                                                <div className={`date-available${profile.uiStates.timeStates[index] === false ? "" : "-highlighted"}`} onClick={(params) => this.handleChangesToTimesAndDays(index)}><p>{ profile.availability.timeslots[index] }</p></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal.Dialog>
                    )
                }
            </div>
        )
    }
}

export default withRouter(
    inject('heroProfile')( observer(AvailabilityOptionsMobile) )
)
