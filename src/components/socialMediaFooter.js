import React from "react";

import linkedin from '../assets/img/linkedin.png'

class SocialMediaFooter extends React.Component {

    render() {

        return (
            <div className="flex-section centered wrapper">
                <a target="blank" href="https://www.linkedin.com/company/the-hero-loop/">
                    <img className="social-media-logo" src={linkedin} alt="linkedin logo" />
                </a>
            </div>
        );
    }
}

export default SocialMediaFooter
