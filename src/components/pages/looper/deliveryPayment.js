/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";
import Header from '../menu_dashboard/looper_header';

import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'
//import Food from "../../../assets/img/food2.png";
//import Transport from "../../../assets/img/tasks/travel.svg";
//import Pharmacy from "../../../assets/img/tasks/pharmacy.svg";
//import Other from "../../../assets/img/tasks/other.svg";

import Button from "react-bootstrap/Button";
import cash from "../../../assets/img/cash.png";
import building from "../../../assets/img/building.png";
import house from "../../../assets/img/house.png";
import purch from "../../../assets/img/purch.png";
import epay from "../../../assets/img/epay.png";

class DeliveryPayment extends React.Component {

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
	constructor(props) {
super(props)
this.state = {
    render: false
}
this.alertmessage = this.alertmessage.bind(this);
}

alertmessage() {
 this.setState({render: !this.state.render});
}
  render() {
    return (
	<div className="del_payment">
	 <Header menus={this.menus} />
      <div className="wrapper">
        <section id="Request_payment">


		   <div id="pay-info">
             <div className="pay-feature-list">
                <div className="pay-feature">
                   <h5>Delivery Method:</h5>
                    <h4>Do you live in a house or a building?</h4>
                </div>
                <div className="pay-feature">
                  <img alt="" src={house} align="right" id="img2"/>
                  <p>
                    <a href="#" id="t3">On the porch</a>

                  </p>
                </div>
                <div className="pay-feature">
                 <img alt="" src={building} align="right" id="img3"/>
                  <p>
                    <a href="#" id="t4">Outside my door</a>

                  </p>
                </div>
              </div>
           </div>

		 <div id="paymeth-info">
             <div className="paymeth-feature-list">
                <div className="paymeth-feature">
                   <h5>Payment Method:</h5>
                    <h4>How will you pay for the purchase?</h4>
                </div>
                <div className="paymeth-feature">
                 <img alt="" src={cash} align="right" id="img4"/>
                </div>
                <div className="paymeth-feature">
                 <img alt="" src={epay} onClick={this.alertmessage} align="right" id="img5"/>
                </div>
				 <div className="paymeth-feature">
                 <img alt="" src={purch} align="right" id="img6"/>
					<br/><br/><br/>
			{this.state.render && <div><h3 style={{color:"red"}}>Use your favourite App for this exchange payments cannot be processed on HeroLoop</h3>
			</div>}
                </div>
              </div>
            </div>

        <div>
          <div className="pay_button">
	      <Link to="/looper/requestFinish">
             <Button className="btn btn-block">Send Request</Button>
           </Link>
          </div>
		</div>

        </section>
      </div>
	  </div>
    );
  }
}



export default DeliveryPayment;
