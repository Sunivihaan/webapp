import React from "react";

import SkillsOptions from "./heroSkillsOptions";

class HeroSkills extends React.Component {

    render() {

        return (
            <div id="skills-wrapper" className="wrapper">
                <h1 className="big-heading orange-text">Welcome</h1>
                <h2>Our new Hero!</h2>
                <SkillsOptions />
            </div>
        );
    }
}

export default HeroSkills
