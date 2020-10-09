import React from "react";
import Header from '../../menu_dashboard/looper_header'


import profilepic from "../../../../assets/img/profilepic.png";
import changeprofilesmall from "../../../../assets/img/changeprofilesmall.png";
import notifysmall from "../../../../assets/img/notifysmall.png";
import needHelpbtn from  "../../../../assets/img/needHelpbtn.png";
import tasks from  "../../../../assets/img/tasks.png";

import Profile from '../../../../assets/img/hero-header/profile.svg'
import Chat from '../../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../../assets/img/hero-header/task.svg'
import Map from '../../../../assets/img/hero-header/map.svg'


class LooperProfile extends React.Component {

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
	<>
	<Header menus={this.menus} />
    
      <div className="wrapper">
        <section id="looper_profile">
          <div className="text-box">
	     <img alt="" src={profilepic} className={profilepic} marginLeft="250px" width="414px" height="213px"  />
         </div>
           <br/><br/>
	  <div className="text-box">
	       
		   <img alt="" src={changeprofilesmall} type="file" className={changeprofilesmall} marginLeft="20px" width="178px" height="166px" />&emsp;&emsp;&emsp;&emsp;
		   <img alt="" src={notifysmall} className={notifysmall} /><br/><br/><br/>
		   &emsp;&emsp;<img alt="" src={needHelpbtn} className={needHelpbtn} style={{marginLeft:"20px"}}/>
	   </div>
		<br/><br/>
		<div className="text-box">
		   <img alt="" src={tasks} className="tasks"/>
		  
          
		</div>
		
	
		
		
         
	  
	    </section>
      </div>
	  </>
    );
  }
}

export default LooperProfile;