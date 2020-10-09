import React from "react";
import { Link } from "react-router-dom";

import * as MENUS from "../../../constants/menus"
import Header from "../menu_dashboard/looper_header"

import Food from "../../../assets/img/food2.png";
import Transport from "../../../assets/img/tasks/travel.svg";
import Pharmacy from "../../../assets/img/tasks/pharmacy.svg";
import Other from "../../../assets/img/tasks/other.svg";


class RequestHelpType extends React.Component {


  render() {
    return (
	<div className="looperhelp">
	<Header menus={MENUS.LOOPER_PROFILE_MENU} />
      <div className="wrapper">
        <section id="req_helptype">
          <div className="helptype_text">
            <h1>How can we help ?</h1>
            <p>
              click the buttons for food,transport or pharmacy trips help.User "other" for anything else
            </p>
          </div>

            <div className="helptype">
			 <div className="req_food">
			   <Link to="/looper/request/foodRequest">
                  <img align="center" alt="" src={Food} className={Food} />
				  <p>Food</p>
		       </Link>
			 </div>
			 <div className="req_trans">
                <Link to="/looper/request/transRequest">
                   <img alt="" src={Transport} className={Transport} />
				   <p>Transport</p>
                </Link>
			  </div>
			  <div className="req_med">
				<Link to="/looper/request/medRequest">
                  <img align="center" alt="" src={Pharmacy} className={Pharmacy} />
				  <p style={{color:"black"}}>Pharmacy</p>

                </Link>
			  </div>
			  <div className="req_other">
				<Link to="/looper/request/othersRequest">
                  <img align="center" alt="" src={Other} className={Other} />
				  <p>Other</p>
                </Link>
			  </div>
            </div>
        </section>
      </div>
	  </div>
    );
  }
}

export default RequestHelpType;
 