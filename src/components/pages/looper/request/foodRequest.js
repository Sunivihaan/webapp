import React from "react";
import { Link } from "react-router-dom";

import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import * as MENUS from "../../../../constants/menus"
import Header from "../../menu_dashboard/looper_header"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import food from "../../../../assets/img/tasks/food2.png";
import small_transport from "../../../../assets/img/small_transport.png";
import small_med from "../../../../assets/img/small_med.png";
import small_other from "../../../../assets/img/small_other.png";

class FoodRequest extends React.Component {
	
	constructor( props ) {
		super( props );

		this.setRequest = this.setRequest.bind( this );
	
	}
  
    setRequest( event ) {
		
		const { helpRequests } = this.props;
		const { value } = event.target;
		       
		helpRequests.requestMessage = value;
	}
  
                                 
	render() {
		const { helpRequests } = this.props;
		
		return (
			<>
			
				<Header menus={MENUS.LOOPER_PROFILE_MENU} />
					<div className="wrapper">
						<section id="request_food">
							<div>
								<Link to="/looper/request/foodRequest">
									<img alt="Food" id="i1" src={food}/>
									<br/>
								</Link>
								<div className="Needtochange">
									<p>Need to change ?click here :</p>
								</div>
								<Link to="/looper/request/transRequest">
									<img alt="" src={small_transport} id="i2"/>
									<br/>
								</Link>
								<Link to="/looper/request/medRequest">
									<img alt="" src={small_med} id="i4"/>
									<br/>
								</Link>
								<Link to="/looper/request/othersRequest">
									<img alt="" src={small_other} id="i3"/>
									<br/>
								</Link>
							</div>
							<div className="Food_reqtext">
								<p>
									Our Heros are here to help with Food Shopping.
								</p>
							</div>
							<div className="request_form">
								<Form>
									<Form.Group>
										<Form.Label>Grocery Shopping List:</Form.Label>
										<Form.Control as="textarea" rows="5" id={'reqMessage'} value={helpRequests.requestMessage} placeholder="Type your request here.If you need multiple items,list everything here." style={{fontSize: "12px" }} onChange={ this.setRequest } ref={node => {
										this.reqMessage = node;}} />
									</Form.Group>
									<div>
										<Link to="/looper/availability">
											<Button className="btn btn-block helper-btn" 
											disabled={false /* TODO: enable only when information is complete */}        
											>
											Next:Delivery Time
											</Button>
										</Link>
									</div>
								</Form>
							</div>
						</section>
					</div>
				</>
			);
		}
	}
export default withRouter(
  inject('helpRequests')( observer(FoodRequest) )
)