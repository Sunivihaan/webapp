import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from 'react-router';

import { Link } from "react-router-dom";
import Header from '../menu_dashboard/looper_header'


import Button from "react-bootstrap/Button";

import Profile from '../../../assets/img/hero-header/profile.svg'
import Chat from '../../../assets/img/hero-header/chat.svg'
import HallofFame from '../../../assets/img/hero-header/hallOfFame.svg'
import HeroLog from '../../../assets/img/hero-header/heroLog.svg'
import Task from '../../../assets/img/hero-header/task.svg'
import Map from '../../../assets/img/hero-header/map.svg'


// TODO: read from profile
import looper from "../../../assets/img/looper.png";

class RateLooper extends React.Component {


 menus = [
    {
      img: Profile,
      to: '/hero/profile/myprofile',
      text: 'Profile',
    },
    {
      img: Chat,
      to: '/chat',
      text: 'Chat',
    },
    {
      img: RateLooper,
      to: '/ratings/ratelooper',
      text: 'Rate a Looper',
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
      to: '/hero/request/mytasks2',
      text: 'My Tasks',
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



  constructor( props ) {
    super( props )

    this.setComment = this.setComment.bind( this )
  }

  setRating( value )
  {
    const { rating } = this.props.ratings

    rating.value = value
  }

  setComment( event ) {
    const { rating } = this.props.ratings
    const { value } = event.target

    rating.comment = value
  }

  async save() {
    const { history, ratings, user } = this.props

    const result = await ratings.save( user.data.id, user.token )

    if( result.success ) {
      ratings.pendingLoaded = false // force reload

      history.push( '/ratings/pending' )
    }
  }

  render() {
    const { rating, ratingMessage } = this.props.ratings
    const { user, value } = rating

    return (
	<>
	<Header menus={this.menus} />

      <div id="rate_form" className="wrapper">
        <section id="rating_looper">
          <div className="rating_text">
		  <h3>Rate Your Looper? { user.firstName } { user.lastName }</h3>
			<p>{ user.firstName }</p>
          </div>

          {
            ratingMessage &&
            (
              <div className="alert alert-danger">
                { ratingMessage }
              </div>
            )
          }

          <div id="volunteer-info" className="mt-4">
            <div className="profile-list">
              <div className="profile_info">
                <center><img alt="" src={ looper }/></center>
				   <h3>How Was Alex?</h3>
              </div>
			  <center>
              <div className="profile_info rating">
                <span className={
                    `rating_edit ${ value >= 10 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(10) }
                />
                <span className={
                    `rating_edit ${ value >= 8 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(8) }
                />
                <span className={
                    `rating_edit ${ value >= 6 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(6) }
                />
                <span className={
                    `rating_edit ${ value >= 4 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(4) }
                />
                <span className={
                    `rating_edit ${ value >= 2 ? 'rating_selected' : '' }`
                  }
                  onClick={ () => this.setRating(2) }
                />
              </div>
			  </center>
            </div>
          </div>
        </section>

       <div className="mt-4">
		<div className="rating_button">
		<Link to="/ratings/ratingsFinish">
          <Button className="btn btn-block helper-btn"
            onClick={ () => this.save() }
          >
            Submit
          </Button>
		  </Link>
		  <Button className="btn btn-block receiver-btn"
            onClick={ () => this.save() }
          >
		  <center>No Thanks</center>
		  </Button>
         </div>
		</div>
      </div>
	  </>
    )
  }
}

export default withRouter(
  inject('ratings', 'user')( observer(RateLooper) )
)
