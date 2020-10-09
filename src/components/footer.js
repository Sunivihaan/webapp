import React from "react";

import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/img/logo.png'

class Footer extends React.Component {

    render() {

        return (
            <Navbar id="footer" sticky="bottom">
                <div className="flex-section centered column wrapper">
                    <img src={logo} id='logo' alt='TheHeroLoop' />
                    <p>
                        TheHeroLoop is a digital ecosystem that connects Heros with people in need of help - Loopers,
                        with getting food, picking up medications, transportation, and other tasks.
                    </p>
                </div>
            </Navbar>
        );
    }
}

export default Footer
