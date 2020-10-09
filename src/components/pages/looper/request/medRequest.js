import React from "react";
import { Link } from "react-router-dom";

import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import * as MENUS from "../../../../constants/menus"
import Header from "../../menu_dashboard/looper_header"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import small_food from "../../../../assets/img/small_food.png";
import small_other from "../../../../assets/img/small_other.png";
import small_transport from "../../../../assets/img/small_transport.png";
import med from "../../../../assets/img/med.png";

class MedRequest extends React.Component {
	
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
					<section id="request_med">
						<div className="Needtochange"><p>Need to change ?click here :</p> </div>
						<div>
							<Link to="/looper/request/medRequest">
								<img alt="" src={med} id="i1" /><br/>
							</Link>
							<Link to="/looper/request/foodRequest">		
								<img alt="" src={small_food} id="i2" /><br/>
							</Link>
							<Link to="/looper/request/othersRequest">		
								<img alt="" src={small_other} id="i3"/><br/>
							</Link>
							<Link to="/looper/request/transRequest">		
								<img alt="" src={small_transport} id="i4" /><br/>
							</Link>
						</div>
						<div className="Med_reqtext">
							<p>
								Our Heros are here to help with Pharmacy trips.
							</p>
						</div>
		  
						<div className="request_form">		
							<Form>
								<Form.Group>
									<Form.Control as="textarea" rows="5" id={'reqMessage'} value={helpRequests.requestMessage} placeholder="Type your request here.If you need multiple items,list everything here." style={{fontSize: "12px" }} onChange={ this.setRequest } ref={node => {
										this.reqMessage = node;}} />
								</Form.Group>  
								<div>
									<Link to="/looper/availability">
										<Button className="btn btn-block helper-btn" disabled={false /* TODO: enable only when information is complete */}>
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
  inject('helpRequests')( observer(MedRequest) )
)