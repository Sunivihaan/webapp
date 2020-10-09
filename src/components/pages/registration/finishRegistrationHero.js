import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import check from "../../../assets/img/green-check.png";

class RegistrationFinish extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section id="registration-finish">
          <img alt="" src={check} />
          <div className="text-box">
            <h3 className="black heading">Congratulations !</h3>
            <p>
              You’ve updated your Heroism abilities. Are you ready to help now?
            </p>
          </div>

          <div className="mt-4">
            <Link to="/hero/profile">
              <Button className="btn btn-block helper-btn">
                Offer your help
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationFinish;
