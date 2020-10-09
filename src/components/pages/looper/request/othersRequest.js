import React from "react";
import { Link } from "react-router-dom";

import { inject, observer } from "mobx-react";
import { withRouter } from 'react-router';

import * as MENUS from "../../../../constants/menus"
import Header from "../../menu_dashboard/looper_header"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import other from "../../../../assets/img/other.png";
import small_food from "../../../../assets/img/small_food.png";
import small_transport from "../../../../assets/img/small_transport.png";
import small_med from "../../../../assets/img/small_med.png";

class OthersRequest extends React.Component {
	
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
						<section id="request_others">
							<div>
								<Link to="/looper/request/othersRequest">
		
									<img alt="" src={other} id="i1" /><br/>
								</Link>
								<div className="Needtochange"><p>Need to change ?click here :</p> </div>
		  
								<Link to="/looper/request/foodRequest">
		
									<img alt="" src={small_food} id="i2" /><br/>
								</Link>
								<Link to="/looper/request/transRequest">
		
									<img alt="" src={small_transport} id="i4" /><br/>
								</Link>
								<Link to="/looper/request/medRequest">
		
									<img alt="" src={small_med} id="i3"/><br/>
								</Link>
							</div>
							<div className="Others_reqtext">
								<p>
									Our Heros can help with everything you might need.
								</p>
							</div>
			
							<div className="request_form">
								<Form>
									<Form.Group>
										<Form.Control as="textarea" rows="5" id={'reqMessage'} value={helpRequests.requestMessage} placeholder="Type your request here.If you need multiple items,list everything here." style={{fontSize: "12px" }} onChange={ this.setRequest } ref={node => {
											this.reqMessage = node;}} />
									</Form.Group>
									<div>
										<Link to="/looper/requestDrivingPickupTime">
											<Button className="btn btn-block helper-btn" disabled={false /* TODO: enable only when information is complete */}>
												Next:Delivery time
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
  inject('helpRequests')( observer(OthersRequest) )
)
