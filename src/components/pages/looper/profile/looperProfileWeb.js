import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import LooperProfileOptions from "../../../popups/LooperProfileOptions";

import pic_alt from "../../../../assets/img/volunteer-alt.png";
import pic8 from "../../../../assets/img/star-rating.png";
import pic16 from "../../../../assets/img/live.png";
import pic25 from "../../../../assets/img/editbutton.png";
import BellIconWhite from "../../../../assets/img/bell-icon-white.png";
import CameraIconWhite from "../../../../assets/img/camera-icon-white.png";
import BagIconWhite from "../../../../assets/img/bag-icon-white.png";

import Editicon from "../../../../assets/img/editicon.svg";
import EditiconWhite from "../../../../assets/img/editicon-white.svg";
import Form from "react-bootstrap/Form";

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

	handlePopupAction(index){
		const { looperProfile } = this.props;
		let elems = looperProfile.uiStates.popups;
		let elem = elems[index];
		elems[index] = !elem;
	}

	render() {

		const { looperProfile, stats } = this.props;

		return (
			<>
				<section id="wrapper">
					<article className="flex-wrapper">
						<div id="right-panel">
							<div id="snapshot">
								<div id="profile-img-wrapper">
									<img alt="" id="hero-profile-img" src={pic_alt} />
									<img alt="" id="online-status" src={pic16} />
								</div>
								<div id="user-details-wrapper">
									<div id="rating-wrapper">
										<img alt="" className="rating-filled" src={pic8} />
										<img alt="" className="rating-filled" src={pic8} />
										<img alt="" className="rating-filled" src={pic8} />
										<img alt="" className="rating-filled" src={pic8} />
										<img alt="" className="rating-filled" src={pic8} />
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
										<img className="edit-icon" onClick={(params) => this.handlePopupAction(2)} src={EditiconWhite} alt=""/>
									</div>
								</div>
							</div>

							{
								looperProfile.uiStates.popups[1] === false &&
								(
									<div id="user-desc">
										<div className="edit-wrapper">
											<h3>Who I am:</h3>
											<img src={EditiconWhite} alt="" onClick={(params) => this.handlePopupAction(1)}/>
										</div>
										<p id="help-desc-white">{looperProfile.userDetails.userDesc}</p>
									</div>
								)
							}
							{
								looperProfile.uiStates.popups[1] === true &&
								(
									<div id="user-desc-focus">
										<div className="edit-wrapper">
											<h3>Who I am:</h3>
											<img src={Editicon} alt="" onClick={(params) => this.handlePopupAction(1)}/>
										</div>
										<textarea id="help-desc-white" defaultValue={looperProfile.userDetails.userDesc}/>
									</div>
								)
							}

							<div id="user-stats">
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
							<div className="flex-section">
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
							</div>
						</div>
					</article>
					<article id="bottom-wrapper">
						{
							looperProfile.uiStates.popups[0] === false &&
							(
								<div id="left-bottom-wrapper">
									<div id="availability">
										<h2 className="black heading left">Account Details</h2>
										<Form className="flex-section">
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
									</div>
									<div id="request" onClick={(param) => this.handlePopupAction(0)}>
										<img alt="" src={pic25}/>
									</div>
								</div>
							)
						}
						{
							looperProfile.uiStates.popups[0] === true &&
							(
								<LooperProfileOptions />
							)
						}
					</article>
				</section>
			</>
		);
	}
}

export default withRouter(
	inject('looperProfile','stats')( observer(ProfileWeb) )
)
