import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import pic from "../../../../assets/img/volunteer.png";
import pic2 from "../../../../assets/img/food2.png";
import pic3 from "../../../../assets/img/driving.png";
import pic4 from "../../../../assets/img/med2.png";
import pic5 from "../../../../assets/img/other2.png";
import bell from "../../../../assets/img/bell.png";
import clock from "../../../../assets/img/clock.png";
import pic8 from "../../../../assets/img/heart.png";
import pic9 from "../../../../assets/img/eheart.png";
import pic16 from "../../../../assets/img/live.png";

import Arrow from "../../../../assets/img/arrow.svg";
import Editicon from "../../../../assets/img/editicon.svg";
import EditiconWhite from "../../../../assets/img/editicon-white.svg";
import Modal from "react-bootstrap/Modal";
import Checkmark from "../../../../assets/img/checkmark.png";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";

class ProfileWeb extends React.Component {

    //function to handle times, days

    setStates(index, end, all, days){
        const { profile } = this.props;
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

    setActions(index, checkbox){
        const { profile } = this.props;
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

    render() {

        const { profile } = this.props;

        return (
            <>
                <section id="wrapper">
                    <article className="flex-wrapper">
                        <div id="snapshot">
                            <div id="profile-img-wrapper">
                                <img alt="" id="hero-profile-img" src={pic} />
                                <img alt="" id="online-status" src={pic16} />
                            </div>
                            <div id="user-details-wrapper">
                                <div id="rating-wrapper">
                                    <img alt="" className="rating-filled" src={pic8} />
                                    <img alt="" className="rating-filled" src={pic8} />
                                    <img alt="" className="rating-filled" src={pic8} />
                                    <img alt="" className="rating-filled" src={pic8} />
                                    <img alt="" className="rating-missing" src={pic9} />
                                </div>
                                <p>#{profile.userStats.rank} Country Rank</p>
                                <div>
                                    {
                                        profile.uiStates.popups[4] === false &&
                                        (
                                            <p id="username">{profile.userDetails.userName}</p>
                                        )
                                    }
                                    {
                                        profile.uiStates.popups[4] === true &&
                                        (
                                            <textarea id="username-edit" defaultValue={profile.userDetails.userName} />
                                        )
                                    }
                                    <img className="edit-icon" onClick={(params) => this.setActions(4, false)} src={EditiconWhite} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div id="main" className="flex-wrapper">
                            <div id="help-offers" onClick={(params) => this.setActions(0, false)}>
                                <img alt="" src={pic2} className="offer"/>
                                <img alt="" src={pic3} className="offer"/>
                                <img alt="" src={pic4} className="offer"/>
                                <img alt="" src={pic5} className="offer"/>
                            </div>
                            {
                                profile.uiStates.popups[3] === false &&
                                (
                                    <div id="user-desc">
                                        <div className="edit-wrapper">
                                            <h3>Who I am:</h3>
                                            <img src={Editicon} alt="" onClick={(params) => this.setActions(3, false)}/>
                                        </div>
                                        <p id="help-desc-white">{profile.userDetails.userDesc}</p>
                                    </div>
                                )
                            }
                            {
                                profile.uiStates.popups[3] === true &&
                                (
                                    <div id="user-desc-focus">
                                        <div className="edit-wrapper">
                                            <h3>Who I am:</h3>
                                            <img src={Editicon} alt="" onClick={(params) => this.setActions(3, false)}/>
                                        </div>
                                        <textarea id="help-desc-white" defaultValue={profile.userDetails.userDesc}/>
                                    </div>
                                )
                            }

                            <div id={`middle-panel${profile.uiStates.popups[2] === false ? "" : "-focus"}`}>
                                <div className="edit-wrapper">
                                    <h3 className="left">Why I am here:</h3>
                                    <img src={Editicon} alt="" onClick={(params) => this.setActions(2, false)}/>
                                </div>
                                {
                                    profile.uiStates.popups[2] === true &&
                                    (
                                        <textarea id="help-desc" defaultValue={profile.userDetails.userDesc}/>
                                    )
                                }
                                {
                                    profile.uiStates.popups[2] === false &&
                                    (
                                        <p id="help-desc">{profile.userDetails.userDesc}</p>
                                    )
                                }
                            </div>
                            <div id="notification-panel">
                                <div className="notification-wrapper" onClick={(param) => this.setActions(1, false)}>
                                    <p className="thin-text">Edit Availability</p>
                                    <img src={clock} alt="" />
                                </div>
                                <div className="notification-wrapper">
                                    <p className="thin-text">Notification Settings</p>
                                    <img src={bell} alt="" />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="popup-wrapper">

                        {
                            profile.uiStates.popups[0] === true &&
                            (
                                <div className="popup">
                                    <Modal.Header>
                                        <div id="back-arrow">
                                            <img alt="" id="arrow" src={Arrow} onClick={(param) => this.setActions(0, false)}/>
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
                                                    <img alt="" src={Checkmark} onClick={(param) => this.setActions(0, true)}/>
                                                </div>
                                                <FormCheckLabel>I can go shopping for someone</FormCheckLabel>
                                            </div>
                                            <div className="form-item">
                                                <div
                                                    className={`checkbox${profile.uiStates.checkboxes[1] === false ? "" : "-disabled"}`}>
                                                    <img alt="" src={Checkmark} onClick={(param) => this.setActions(1, true)}/>
                                                </div>
                                                <FormCheckLabel>I can pick something up and deliver</FormCheckLabel>
                                            </div>
                                            <div className="form-item">
                                                <div
                                                    className={`checkbox${profile.uiStates.checkboxes[2] === false ? "" : "-disabled"}`}>
                                                    <img alt="" src={Checkmark} onClick={(param) => this.setActions(2, true)}/>
                                                </div>
                                                <FormCheckLabel>I have a car and can drive</FormCheckLabel>
                                            </div>
                                            <div className="form-item">
                                                <div
                                                    className={`checkbox${profile.uiStates.checkboxes[3] === false ? "" : "-disabled"}`}>
                                                    <img alt="" src={Checkmark} onClick={(param) => this.setActions(3, true)}/>
                                                </div>
                                                <FormCheckLabel>I can travel by bycicle / walk</FormCheckLabel>
                                            </div>
                                            <div className="form-item">
                                                <div
                                                    className={`checkbox${profile.uiStates.checkboxes[4] === false ? "" : "-disabled"}`}>
                                                    <img alt="" src={Checkmark} onClick={(param) => this.setActions(4, true)}/>
                                                </div>
                                                <FormCheckLabel>I can help you with tasks at home, like moving furniture
                                                    or changing a lightbulb</FormCheckLabel>
                                            </div>
                                            <div className="form-item">
                                                <div
                                                    className={`checkbox${profile.uiStates.checkboxes[5] === false ? "" : "-disabled"}`}>
                                                    <img alt="" src={Checkmark} onClick={(param) => this.setActions(5, true)}/>
                                                </div>
                                                <FormCheckLabel>I tested positive for COVID-19
                                                    antibodies</FormCheckLabel>
                                            </div>
                                        </div>
                                        <button className="action-btn" onClick={(param) => this.setActions(0, false)}>Update</button>
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

                        {
                            profile.uiStates.popups[1] === true &&
                            (
                                <Modal.Dialog className="popup" id="availability-popup">
                                    <Modal.Header>
                                        <div id="back-arrow">
                                            <img alt="" id="arrow" src={Arrow} onClick={(param) => this.setActions(1)}/>
                                        </div>
                                        <Modal.Title className="black left heading">You can select multiple options</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h2 className="black left heading">You can select multiple options</h2>
                                        <div className="flex-section">
                                            <div className="detail-wrapper weekdays-available slim">
                                                <div className="date-available" onClick={(params) => this.setStates(0,5,true, true)}><p className="black no-space">Weekdays</p></div>
                                                <div className="date-available" onClick={(params) => this.setStates(5,7,true, true)}><p className="black no-space">Weekends</p></div>
                                                { profile.availability.days.map( (days, index ) =>
                                                    <div className={`date-available${profile.uiStates.dayStates[index] === false ? "" : "-highlighted"}`} onClick={(params) => this.setStates(index, null, null, true)}><p>{ profile.availability.days[index] }</p></div>
                                                )}
                                            </div>
                                        </div>
                                        <div id="time-details-wrapper">
                                            <div id="anytime-available" onClick={(params) => this.setStates(null,null, true, null)}>
                                                <h3 className="black">Anytime</h3>
                                            </div>
                                            <div id="days-details-wrapper">
                                                <div className="weekdays-available slim">
                                                    { profile.availability.timeslots.map( (timeslots, index ) =>
                                                        <div className={`date-available${profile.uiStates.timeStates[index] === false ? "" : "-highlighted"}`} onClick={(params) => this.setStates(index)}><p>{ profile.availability.timeslots[index] }</p></div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal.Dialog>
                            )
                        }
                    </article>
                    <article id="bottom-wrapper">
                        <div className="flex-section">
                            <div>
                                <p>Past 30 days:</p>
                                <p>{profile.userStats.tasksPeriod}</p>
                            </div>
                            <div>
                                <p>Total Tasks:</p>
                                <p>{profile.userStats.tasksTotal}</p>
                            </div>
                        </div>
                    </article>
                </section>
            </>
        );
    }
}

export default withRouter(
    inject('profile')( observer(ProfileWeb) )
)
