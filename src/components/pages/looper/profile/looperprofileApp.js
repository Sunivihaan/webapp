import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import profilepic from "../../../assets/img/profilepic.png";
import changeprofilesmall from "../../../assets/img/changeprofilesmall.png";
import notifysmall from "../../../assets/img/notifysmall.png";
import needHelpbtn from  "../../../assets/img/needHelpbtn.png";
import tasks from  "../../../assets/img/tasks.png";

class LooperProfileApp extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="Request_type">
          <div className="text-box">
	     <img alt="" src={profilepic} className={profilepic} width="414px" height="213px"  />
         </div>
           <br/><br/>
	  <div className="text-box">
		   <img alt="" src={changeprofilesmall} className={changeprofilesmall} width="178px" height="166px" />&nbsp;&nbsp;
		   <img alt="" src={notifysmall} className={notifysmall} /><br/><br/><br/>
		   <img alt="" src={needHelpbtn} className={needHelpbtn} />
	   </div>
		<br/><br/>
		<div className="text-box">
		   <img alt="" src={tasks} className="tasks"/>
		  
          
		</div>
		
	
		
		
         
	  
	    </section>
      </div>
    );
  }
}

export default LooperProfileApp;