import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import HelpOptionsMobile from "../../../popups/HelpOptionsMobile";
import AvailabilityOptionsMobile from "../../../popups/AvailabilityOptionsMobile";

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

import Editicon from "../../../../assets/img/editicon.svg";
import EditiconWhite from "../../../../assets/img/editicon-white.svg";

class ProfileWeb extends React.Component {

    //function to handle popups

    handlePopupAction(index){
        const { heroProfile: profile } = this.props;
        let elems = profile.uiStates.popups;
        let elem = elems[index];
        elems[index] = !elem;
        this.setState({});
    }

    render() {

        const { heroProfile: profile, stats } = this.props;

        return (
            <div>
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
                                <p>#{stats.userStats.rank} Country Rank</p>
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
                                    <img className="edit-icon" onClick={(params) => this.handlePopupAction(4)} src={EditiconWhite} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div id="main" className="flex-wrapper">
                            <div id="help-offers" onClick={(params) => this.handlePopupAction(0 )}>
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
                                            <img src={Editicon} alt="" onClick={(params) => this.handlePopupAction(3)}/>
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
                                            <img src={Editicon} alt="" onClick={(params) => this.handlePopupAction(3)}/>
                                        </div>
                                        <textarea id="help-desc-white" defaultValue={profile.userDetails.userDesc}/>
                                    </div>
                                )
                            }

                            <div id={`middle-panel${profile.uiStates.popups[2] === false ? "" : "-focus"}`}>
                                <div className="edit-wrapper">
                                    <h3 className="left">Why I am here:</h3>
                                    <img src={Editicon} alt="" onClick={(params) => this.handlePopupAction(2)}/>
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
                                <div className="notification-wrapper" onClick={(param) => this.handlePopupAction(1)}>
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
                                <HelpOptionsMobile />
                            )
                        }
                        {
                            profile.uiStates.popups[1] === true &&
                            (
                                <AvailabilityOptionsMobile />
                            )
                        }
                    </article>
                    <article id="bottom-wrapper">
                        <div className="flex-section">
                            <div>
                                <p>Past 30 days:</p>
                                <p>{stats.userStats.tasksPeriod}</p>
                            </div>
                            <div>
                                <p>Total Tasks:</p>
                                <p>{stats.userStats.tasksTotal}</p>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}

export default withRouter(
    inject('heroProfile', 'stats')( observer(ProfileWeb) )
)
