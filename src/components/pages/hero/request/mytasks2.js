import React from "react";

import Header from '../../menu_dashboard/looper_header'

import topitem2 from "../../../../assets/img/mytasks2top.png";
import myloop from "../../../../assets/img/loop.png";
import meditem2 from "../../../../assets/img/mytasks2medium.png";
import bottomitem2 from "../../../../assets/img/mytasks2bottom.png";

import Profile from '../../../../assets/img/hero-header/profile.svg'
import Chat from '../../../../assets/img/hero-header/chat.svg'
import RLooper from '../../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../../assets/img/hero-header/task.svg'
import Map from '../../../../assets/img/hero-header/map.svg'




class MyTasks2 extends React.Component {
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
      img: RLooper,
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

        <section id="registration_finish">
		<center><img src={ myloop } alt=" " className={myloop}/></center>
		<br></br>
        <center><img src={ topitem2 } alt=" " className={ topitem2 }/></center>
		<br></br>
		<center><img src={ meditem2 } alt=" " className={ meditem2 }/></center>
		<br></br>
		<center><img src={ bottomitem2 } alt=" " className={ bottomitem2 }/></center> 
        </section>

      </div>
</>
    );

  }

}



export default MyTasks2;