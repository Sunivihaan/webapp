import React from "react";
import { Link } from "react-router-dom";
import Header from '../menu_dashboard/looper_header';

import * as MENUS from "../../../../constants/menus"
import Header from "../../menu_dashboard/looper_header"


import Button from "react-bootstrap/Button";
import clock from "../../../assets/img/clock.png";

class RequestDrivingTime extends React.Component {

			menus = [
    {
      img: Profile,
      to: '/looper/profile/myprofile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/ratings/ratehero',
      text: 'Rate a Hero',
    },
    {
      img: HallofFame,
      to: '/hall-of-fame',
      text: 'Hall of Fame',
    },
    {
      img: HeroLog,
      to: '/ratings/myheroapp',
      text: 'My Hero Log',
    },
    {
      img: Task,
      to: '/hero/request/mytasks',
      text: 'My Tasks',
    },
    {
      img: Map,
      to: '/request/map',
      text: 'The Map',
    },
    {
      to: '/request',
      text: 'I need a Hero',
    },
  ]
  render() {
    return (
	<div>
	 <Header menus={this.menus} />
      <div className="wrapper">
        <section id="Request_pickup">
          <div className="pickup">
			<img alt="" src={clock} className={clock}/>
		     <br/><br/>
			<h1>
              What time should the Hero arrive?
            </h1>
          </div>
		<br/>

		<div id="communication">
          <div className="wrapper">
            <div className="communication-list">
              <div className="communication_info">
                <p>if you're flexible:</p>
	    	 <div>
	    	    <div className="req-pickuptime" id="but1">
	      <Link to="">
             <Button className="btn btn-block req-btn">Anytime</Button>
           </Link>
          </div>
	    	</div>
              </div>

         <div className="communication_text">
                <p>or select a specific time?</p>
	    	<div >
	    	 <input type="text" id="t1"placeholder="12"/>&nbsp;
			 <bold></bold>&nbsp;
			 <input type="text" id="t2"placeholder="30" />
	        </div>
              </div>
	    </div>
          </div>
        </div>


		<br/><br/>
		<div>
          <div className="req-pickup">
	      <Link to="">
             <Button className="btn btn-block req-btn1">Send Request</Button>
           </Link>
          </div>
		</div>


        </section>
      </div>
	  </div>
    );
  }
}

export default RequestDrivingTime;
