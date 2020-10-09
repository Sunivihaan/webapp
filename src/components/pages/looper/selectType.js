import React from "react";
import { Link } from "react-router-dom";
import Helpinghands from "../../../assets/img/helpinghand.png";
import Needhands from "../../../assets/img/needhelp.png";



class SelectingType extends React.Component {
  render() {
    return (
	<div className="wrapper">
      
        <section id="Select_type">
		     <div className="selecttype">
			   <div>
			   <Link to="/looper/helpType">
                  <img  align="center" alt="" src={Needhands} className={Needhands} />
               </Link>
			    </div>
				 
				 <div>
                <Link to="/helpType">
                  <img align="center" alt="" src={Helpinghands} className={Helpinghands} />
                </Link>
                </div>
			</div>
		 
        </section>
	</div>
    );
  }
}

export default SelectingType;
