import React from "react";
import hero_log from "../../../assets/img/hero_log.png";
import martha from "../../../assets/img/martha.png";
import Vector from "../../../assets/img/Vector.png";

import snapchat from "../../../assets/img/snapchat.png";
import instagram from "../../../assets/img/instagram.png";
import twitter from "../../../assets/img/twitter.png";
import facebook from "../../../assets/img/facebook.png";


class MyHeroApp extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="text-box">
		  <h1>
              My Hero Log
            </h1>
	     <img alt="" src={hero_log} width="569" height="382" className={hero_log}  />
		 	     <img alt="" src={martha}  width="569" height="70"  className={martha} />
         
		</div>
           
	  <div className="text-box">
           <p><h>Thank you for your rating..!</h></p>
		   <img alt="" src={Vector} className={Vector}  />
		   <img alt="" src={Vector} className={Vector} />
		   <img alt="" src={Vector} className={Vector} />
		   <img alt="" src={Vector} className={Vector} />
          <img alt="" src={Vector} className={Vector} />
		</div>
		<br/><br/>
		<div className="text-box">
		   <img alt="" src={snapchat} className={Vector} />
		   <img alt="" src={facebook} className={Vector} />
		   <img alt="" src={instagram} className={Vector} />
		   <img alt="" src={twitter} className={Vector} />
          
		</div>
		
	
		
		
         
	  
	    </section>
      </div>
    );
  }
}

export default MyHeroApp;