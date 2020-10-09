import React from "react";
import { withRouter } from 'react-router';

import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import * as MENUS from "../../../constants/menus"
import Header from "../menu_dashboard/looper_header"


class Availability extends React.Component {
	
	  handleChangesToTimesAndDays(index, end, all, days){
        const { requestAvailability } = this.props;
        let elems;
        let elem;

        if(days)
            elems = requestAvailability.availStates.dayStates;
        else
            elems = requestAvailability.availStates.timeStates;

        if(all)
            elems.fill(true, index, end)
        else
            elem = elems[index];
        elems[index] = !elem;
        this.setState({});
    }
	
    render() {
		
        const { requestAvailability } = this.props;

		return (
	    
		<center>
		 <div className="avail">
			<Header menus={MENUS.LOOPER_PROFILE_MENU} />
				<div className="wrapper">
					<section id="req_avail">
						<div className='profile-bg-availability'>
							<h3 className='my-availability'>Choose a Delivery Time</h3>
							<div>
								<button  className='anytime-available' onClick={(params) => this.handleChangesToTimesAndDays(null,null, true, null)}>Any Time</button>
							
							</div>
							
							     <div className='avail_dayslots'> 
								{ requestAvailability.availability.days.map( (days, index ) =>
                                <button className={`day-available${requestAvailability.availStates.dayStates[index] === false ? "" : "-highlighted"}`} onClick={(params) => this.handleChangesToTimesAndDays(index, null, null, true)}>{ requestAvailability.availability.days[index] }</button>
                                 )}
								 
								</div> 
								
						</div>
						<div className="day">
							<h3 className='avail_options'>You can select multiple options</h3>
							<button className='time-available' onClick={(params) => this.handleChangesToTimesAndDays(0,5,true, true)}>Weekdays</button>
							<button className='time-available' onClick={(params) => this.handleChangesToTimesAndDays(5,7,true, true)}>Weekends</button>
							<div className='avail_timeslots'>
                                { requestAvailability.availability.timeslots.map( (timeslots, index ) =>
										<button className={`time-available${requestAvailability.availStates.timeStates[index] === false ? "" : "-highlighted"}`} onClick={(params) => this.handleChangesToTimesAndDays(index)}>{ requestAvailability.availability.timeslots[index] }</button>
                                     )}
                            
							</div>
						</div>
						<div className='save'>
							<Link to="/looper/deliveryPayment">
								<button className='save-availability'>Next-Final Confirmation</button>
							</Link>
						</div>
					</section>
				</div>
			</div>
		</center>
    );
  }
}

export default withRouter(
  inject('requestAvailability')( observer(Availability) )
)