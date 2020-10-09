import React from 'react'
import MapContainer from '../shared/googlemap'
import Header from './header'
import { Link } from 'react-router-dom'
import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import RateLooper from '../../../assets/img/hero-header/rateLooper.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'
class RequestMap extends React.Component {
  state = {
    apiKey: '',
    markers: [
      {
        id: 1,
        title: 'Grocery shopping',
        owner: 'Agda',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utporttitor facilisis massa vel maximus. Nulla facilisi. Aenean vitaemassa vulputate, auctor metus seLorem ipsum dolor sit amet,consectetur adipiscing elit. Ut porttitor facilisis massa velmaximus. Nulla facilisi.',
        lat: 43.653225,
        lng: -79.383186,
        type: 'food',
        timeSlots: ['01:00-02:00', '02:00-03:00', '03:00-04:00'],
      },
      {
        id: 2,
        title: 'Travel',
        owner: 'Agda1',
        description: 'Lorem ipsum dolor sit amet, ',
        lat: 43.853225,
        lng: -79.383186,
        type: 'travel',
        timeSlots: [
          '01:00-02:00',
          '02:00-03:00',
          '03:00-04:00',
          '05:00-06:00',
        ],
      },
      {
        id: 3,
        title: 'Pharmacy',
        owner: 'Agda2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utporttitor facilisis massa vel maximus. Nulla facilisi. Aenean vitaemassa vulputate, auctor metus seLorem ipsum dolor sit amet,consectetur adipiscing elit. Ut porttitor facilisis massa velmaximus. Nulla facilisi.',
        lat: 43.1153225,
        lng: -79.383186,
        type: 'pharmacy',
        timeSlots: [
          '01:00-02:00',
          '02:00-03:00',
          '03:00-04:00',
          '05:00-06:00',
        ],
      },
      {
        id: 4,
        title: 'Other',
        owner: 'Agda3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utporttitor facilisis massa vel maximus. Nulla facilisi. Aenean vitaemassa vulputate, auctor metus seLorem ipsum dolor sit amet,consectetur adipiscing elit. Ut porttitor facilisis massa velmaximus. Nulla facilisi.',
        lat: 44,
        lng: -79.383186,
        type: 'other',
        timeSlots: [
          '01:00-02:00',
          '02:00-03:00',
          '03:00-04:00',
          '05:00-06:00',
          '07:00-08:00',
          '09:00-10:00',
        ],
      },
    ],
  }

  menus = [
    {
      img: Profile,
      to: '/hero/profile/myProfile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/ratings/rateLooper',
      text: 'Rate a Looper',
    },
    {
      img: HallofFame,
      to: '/hall-of-fame',
      text: 'Hall of Fame',
    },
    {
      img: HeroLog,
      to: '/hero-log',
      text: 'My Hero Log',
    },
    {
      img: Task,
      to: '/tasks',
      text: 'My Tasks2',
    },
    {
      img: Map,
      to: '/helper/map',
      text: 'The Map',
    },
    {
      to: '/request',
      text: 'I need a Hero',
    },
  ]
  render() {
    const { markers } = this.state
    return (
      <>
        <Header menus={this.menus} />
        <div className='wrapper'>
          <section id='map-wrapper'>
            <div className='text-box'>
              <p className='title'>Who need help?</p>
              <p className='subtitle'>
                {markers.length > 0
                  ? 'Click on the pins to see the task details'
                  : "Looks like help is not needed at this time, but get ready to Hero. We'll notify you as soon as a task is submitted"}
                <Link
                  className='subtitle-right'
                  to='/request/map'
                >
                  I need help
                </Link>
              </p>
            </div>
            <MapContainer
              apiKey={this.state.apiKey}
              markers={markers}
            />
          </section>
        </div>
      </>
    )
  }
}

export default RequestMap
