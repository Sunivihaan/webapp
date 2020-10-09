import React from "react";
import Header from '../../menu_dashboard/looper_header'


import topitem from "../../../../assets/img/mytaskstop.png";
import myloop from "../../../../assets/img/loop.png";
import meditem from "../../../../assets/img/mytasksmedium.png";
import bottomitem from "../../../../assets/img/mytasksbottom.png";

import Profile from '../../../../assets/img/hero-header/profile.svg'
import Chat from '../../../../assets/img/hero-header/chat.svg'
import RLooper from '../../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../../assets/img/hero-header/task.svg'
import Map from '../../../../assets/img/hero-header/map.svg'


class MyTasks extends React.Component {
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
        <center><img src={ topitem } alt=" " className={ topitem }/></center>
		<br></br>
		<center><img src={ meditem } alt=" " className={ meditem }/></center>
		<br></br>
		<center><img src={ bottomitem } alt=" " className={ bottomitem }/></center>
        </section>

      </div>
</>
    );

  }

}



export default MyTasks;


