import React from "react";
import Header from '../menu_dashboard/looper_header'

import check from "../../../assets/img/green-check.png";
import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'


class RatingFinish extends React.Component {
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
	  <reqSplashScreen/>
        <section id="registration-finish">
          <img alt="" src={check} />
          <div className="text-box">
            <h3>Thank you</h3>
            <p style={{textAlign:"center"}}>
              We hope to see you back here soon! Our Heros are looking forward   ;)       </p>
          </div>

          
        </section>
      </div>
	  </>
    );
  }
}

export default RatingFinish;
