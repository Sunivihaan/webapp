import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import check from "../../../assets/img/green-check.png";


class AcceptHero extends React.Component {
  render() {
   
    return (
      <div className="wrapper">
        
        <section id="registration-finish">
          <img alt="" src={check} />
          <div className="text-box">
            <h3>Congratulations !</h3>
            <p>
              You have updated your Heroism abilities.
			  Are you ready to help now? 
            </p>
          </div>

          <div className="mt-4">
            
            <Link to="/helper/map">
              <Button className="btn btn-block btn-secondary">
                Offer your help
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default AcceptHero;
