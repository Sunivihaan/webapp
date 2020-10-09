import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import pic from "../../../../assets/img/volunteer-alt.png";
import star from "../../../../assets/img/star-rating.png";
import pic16 from "../../../../assets/img/live.png";

import Editicon from "../../../../assets/img/editicon.svg";
import EditiconWhite from "../../../../assets/img/editicon-white.svg";
import BagIconWhite from "../../../../assets/img/bag-icon-white.png";
import BellIconWhite from "../../../../assets/img/bell-icon-white.png";
import CameraIconWhite from "../../../../assets/img/camera-icon-white.png";
import LooperProfileOptions from "../../../popups/LooperProfileOptionsMobile";

class ProfileWeb extends React.Component {

    //function to handle times, days

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
    }

    //function to handle popups and checkboxes

    handlePopupOrCheckboxAction(index, checkbox){
        const { looperProfile } = this.props;
        let elems;
        let elem;

        if(checkbox)
            elems = looperProfile.uiStates.checkboxes;
        else
            elems = looperProfile.uiStates.popups;

        elem = elems[index];
        elems[index] = !elem;
    }

    render() {

        const { looperProfile, stats } = this.props;

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
                                    <img alt="" className="rating-filled" src={star} />
                                    <img alt="" className="rating-filled" src={star} />
                                    <img alt="" className="rating-filled" src={star} />
                                    <img alt="" className="rating-filled" src={star} />
                                </div>
                                <div>
                                    {
                                        looperProfile.uiStates.popups[2] === false &&
                                        (
                                            <p id="username">{looperProfile.userDetails.userName}</p>
                                        )
                                    }
                                    {
                                        looperProfile.uiStates.popups[2] === true &&
                                        (
                                            <textarea id="username-edit" defaultValue={looperProfile.userDetails.userName} />
                                        )
                                    }
                                    <img className="edit-icon" onClick={(params) => this.handlePopupOrCheckboxAction(4, false)} src={EditiconWhite} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div id="main" className="flex-wrapper">
                            {
                                looperProfile.uiStates.popups[3] === false &&
                                (
                                    <div id="user-desc">
                                        <div className="edit-wrapper">
                                            <h3>Who I am:</h3>
                                            <img src={Editicon} alt="" onClick={(params) => this.handlePopupOrCheckboxAction(3, false)}/>
                                        </div>
                                        <p id="help-desc-white">{looperProfile.userDetails.userDesc}</p>
                                    </div>
                                )
                            }
                            {
                                looperProfile.uiStates.popups[3] === true &&
                                (
                                    <div id="user-desc-focus">
                                        <div className="edit-wrapper">
                                            <h3>Who I am:</h3>
                                            <img src={Editicon} alt="" onClick={(params) => this.handlePopupOrCheckboxAction(3, false)}/>
                                        </div>
                                        <textarea id="help-desc-white" defaultValue={looperProfile.userDetails.userDesc}/>
                                    </div>
                                )
                            }
                            <div id="actions-wrapper" className="flex-section">
                                <div className="options-section flex-section blue">
                                    <img src={BagIconWhite} alt="" />
                                    <h2 className="heading black">Need help from a hero?</h2>
                                </div>
                                <div className="options-section flex-section green">
                                    <img src={BellIconWhite} alt="" />
                                    <h2 className="heading black">Notification settings</h2>
                                </div>
                                <div className="options-section flex-section orange">
                                    <img src={CameraIconWhite} alt="" />
                                    <h2 className="heading black">Change your picture</h2>
                                </div>
                                <div className="options-section flex-section " onClick={(params) => this.handlePopupOrCheckboxAction(0,false)}>
                                    <h2 className="heading black">Edit account details</h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="popup-wrapper">
                        {
                            looperProfile.uiStates.popups[0] === true &&
                            (
                                <LooperProfileOptions />
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
            </>
        );
    }
}

export default withRouter(
    inject('looperProfile', 'stats')( observer(ProfileWeb) )
)
