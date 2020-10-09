import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Shopping from "../../../assets/img/shopping.png";
import Phone from "../../../assets/img/phone.png";
import Chat from "../../../assets/img/chat.png";
import pic from "../../../assets/img/volunteer.png";
import pic1 from "../../../assets/img/Vector.png";
import pic2 from "../../../assets/img/food.png";
import pic3 from "../../../assets/img/driving.png";
import pic4 from "../../../assets/img/med.png";
import pic5 from "../../../assets/img/other.png";
import pic6 from "../../../assets/img/clock.png";
import pic7 from "../../../assets/img/bell.png";
import pic8 from "../../../assets/img/heart.png";
import pic9 from "../../../assets/img/eheart.png";

class MyProfile1 extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
			<div className="v">
				<img alt="" src={pic1} id="r" />
				<img id="r1" src={pic} />
				<p id="r2">Jane Green</p>
				<p id="r3">3# Country Rank</p>
				<img alt="" id="r18" src={pic8} />
				<img alt="" id="r19" src={pic8} />
				<img alt="" id="r20" src={pic8} />
				<img alt="" id="r21" src={pic8} />
				<img alt="" id="r22" src={pic9} />
			</div>
			<div className="v1">
				<img alt="" src={pic2} id="r4"/>
				<img alt="" src={pic3} id="r5"/>
				<img alt="" src={pic4} id="r6"/>
				<img alt="" src={pic5} id="r7"/>
			</div>
			<p id="r8">Who I am:<br></br>
					I’m an art student in NYU with lots of extra time. Looking to help my local community.</p>
			<p id="r9">Why I’m here:<br></br> Helping the elderly in my neighborhood has been contributing a lot to my good mood and activity levels during this time. I love meeting my neighbors and hearing their stories!</p>
			<div>
				<img alt="" src={pic6} id="r10"/>
				<p id="r11">Edit<br></br>Availability </p>
				<img alt="" src={pic7} id="r12"/>
				<p id="r13">Notifications<br></br>Settings</p>
			</div>
			<div className="v2">
				<p id="r14">Total Tasks:</p>
				<p id="r15">34</p>
				<p id="r16">Past 30 days:</p>
				<p id="r17">8</p>
			</div>
		</section>
      </div>
    );
  }
}

export default MyProfile1;
