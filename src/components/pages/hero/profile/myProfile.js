import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

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
import iconEmpty from "../../../../assets/img/checkmark-empty.png";

import Editicon from "../../../../assets/img/editicon.svg";
import Modal from "react-bootstrap/Modal";
import Checkmark from "../../../../assets/img/checkmark.png";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import EditiconWhite from "../../../../assets/img/editicon-white.svg";

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

		const times = ['9:00 - 10-00', '10:00 - 11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00'];
		const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
		const { profile } = this.props;

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

							{
								profile.uiStates.popups[3] === false &&
								(
									<div id="user-desc">
										<div className="edit-wrapper">
											<h3>Who I am:</h3>
											<img src={Editicon} alt="" onClick={(params) => this.setActions(3, false)}/>
										</div>
										<p id="help-desc-white">{profile.userDetails.helpDesc}</p>
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
										<textarea id="help-desc-white" defaultValue={profile.userDetails.helpDesc}/>
									</div>
								)
							}

							<div id="user-stats">
								<p>#{profile.userStats.rank} Country Rank</p>
								<div>
									<p>Past 30 days:</p>
									<p>{profile.userStats.tasksPeriod}</p>
								</div>
								<div>
									<p>Total Tasks:</p>
									<p>{profile.userStats.tasksTotal}</p>
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
								{
									profile.uiStates.popups[0] === true &&
									(

										<div id="tasks-wrapper">
											<Modal.Header>
												<Modal.Title className="black left heading">How would you like to
													help?</Modal.Title>
											</Modal.Header>

											<Modal.Body>
												<div className="center">
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
											</Modal.Body>
										</div>
									)
								}

								<div id="help-panel-wrapper">
									<div id="help-offers" onClick={(params) => this.setActions(0, false)}>
										<img alt="" src={pic2} className="offer"/>
										<img alt="" src={pic3} className="offer"/>
										<img alt="" src={pic4} className="offer"/>
										<img alt="" src={pic5} className="offer"/>
									</div>
									<div id={`middle-panel${profile.uiStates.popups[2] === false ? "" : "-focus"}`}>
										<div className="edit-wrapper">
											<h3>Why I am here:</h3>
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
						{
							profile.uiStates.popups[1] === false &&
							(
								<div id="left-bottom-wrapper">
									<div id="availability">
										<h2 className="black heading left">Available to Hero on:</h2>
										<div id ="weekdays-wrapper" className="weekdays-available slim">
											{ profile.uiStates.dayStates.map( (days, index ) =>
												days === true ? (
													<div className="date-available"><p>{ weekdays[index] }</p></div>
												) : null
											)}
										</div>
										<div className="weekdays-available slim">
											{ profile.uiStates.timeStates.map( (highlighted, index ) =>
												highlighted === true ? (
													<div className="date-available"><p>{ times[index] }</p></div>
												) : null
											)}
										</div>
									</div>
									<div id="request" onClick={(param) => this.setActions(1, false)}>
										<img alt="" src={pic25}/>
									</div>
								</div>
							)
						}
						{
							profile.uiStates.popups[1] === true &&
							(
								<Modal.Dialog id="availability-wrapper">
									<Modal.Header closeButton>
										<img className="confirmation" src={iconEmpty} alt="" onClick={(param) => this.setActions(1, false)}/>
									</Modal.Header>
									<Modal.Body>
										<h2 className="black left heading">You can select multiple options</h2>
										<div className="flex-section">
											<div className="date-available" onClick={(params) => this.setStates(0,5,true, true)}><p className="black no-space">Weekdays</p></div>
											<div className="date-available" onClick={(params) => this.setStates(5,7,true, true)}><p className="black no-space">Weekends</p></div>
											<div id ="weekdays-wrapper" className="weekdays-available slim">
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
				</section>
			</>
		);
	}
}

export default withRouter(
	inject('profile')( observer(ProfileWeb) )
)
