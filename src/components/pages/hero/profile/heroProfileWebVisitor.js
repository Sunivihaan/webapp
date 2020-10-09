import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import HelpOptions from "../../../popups/HelpOptions";
import AvailabilityOptions from "../../../popups/AvailabilityOptions";

import pic from "../../../../assets/img/volunteer.png";
import pic2 from "../../../../assets/img/food2.png";
import pic3 from "../../../../assets/img/driving.png";
import pic4 from "../../../../assets/img/med2.png";
import pic5 from "../../../../assets/img/other2.png";
import pic7 from "../../../../assets/img/bell.png";
import pic8 from "../../../../assets/img/heart.png";
import pic9 from "../../../../assets/img/eheart.png";
import pic16 from "../../../../assets/img/live.png";
import pic17 from "../../../../assets/img/image.png";
import pic25 from "../../../../assets/img/editbutton.png";

class ProfileWeb extends React.Component {

    //function to handle times, days

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

    render() {

        const { heroProfile: profile, stats } = this.props;

        return (
            <>
                <section id="wrapper">
                    <article className="flex-wrapper">
                        <div id="right-panel">
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
                                    <div>
                                        <p id="username">{profile.userDetails.userName}</p>
                                    </div>
                                </div>
                            </div>
                            <div id="user-desc">
                                <div className="edit-wrapper">
                                    <h3>Who I am:</h3>
                                </div>
                                <p id="help-desc-white">{profile.userDetails.helpDesc}</p>
                            </div>
                            <div id="user-stats">
                                <p>#{stats.userStats.rank} Country Rank</p>
                                <div>
                                    <p>Past 30 days:</p>
                                    <p>{stats.userStats.tasksPeriod}</p>
                                </div>
                                <div>
                                    <p>Total Tasks:</p>
                                    <p>{stats.userStats.tasksTotal}</p>
                                </div>
                            </div>
                        </div>
                        <div id="left-panel">
                            <article id="left-wrapper">
                                <img src={pic17} id="hero-img" alt=""/>
                                <div id="button-wrapper">
                                    <Link to="/request/mytaskswebhero" >
                                        <button className="action-btn">Find a Task</button>
                                    </Link>
                                </div>
                            </article>
                            <article id="middle-panel-wrapper">
                                <div id="help-panel-wrapper">
                                    <div id="help-offers">
                                        <img alt="" src={pic2} className="offer"/>
                                        <img alt="" src={pic3} className="offer"/>
                                        <img alt="" src={pic4} className="offer"/>
                                        <img alt="" src={pic5} className="offer"/>
                                    </div>
                                    <div id={`middle-panel${profile.uiStates.popups[2] === false ? "" : "-focus"}`}>
                                        <div className="edit-wrapper">
                                            <h3>Why I am here:</h3>
                                        </div>
                                        <p id="help-desc">{profile.userDetails.userDesc}</p>
                                    </div>
                                </div>
                                <div className="notification-wrapper">
                                    <p>Notification Settings</p>
                                    <img src={pic7} id="bell-icon" alt="" />
                                    <div id="notification"></div>
                                </div>
                            </article>
                        </div>
                    </article>
                    <article id="bottom-wrapper">
                        <div id="left-bottom-wrapper">
                            <div id="availability">
                                <h2 className="black heading left">Available to Hero on:</h2>
                                <div id ="weekdays-wrapper" className="weekdays-available slim">
                                    { profile.uiStates.dayStates.map( (days, index ) =>
                                        days === true ? (
                                            <div className="date-available"><p>{ profile.availability.days[index] }</p></div>
                                        ) : null
                                    )}
                                </div>
                                <div className="weekdays-available slim">
                                    { profile.uiStates.timeStates.map( (highlighted, index ) =>
                                        highlighted === true ? (
                                            <div className="date-available"><p>{ profile.availability.timeslots[index] }</p></div>
                                        ) : null
                                    )}
                                </div>
                            </div>
                            <div id="request">
                                <img alt="" src={pic25}/>
                            </div>
                        </div>
                    </article>
                </section>
            </>
        );
    }
}

export default withRouter(
    inject('heroProfile','stats')( observer(ProfileWeb) )
)
