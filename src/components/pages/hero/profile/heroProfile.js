import React from "react";

import ProfileMobile from "./heroProfileMobile"
import ProfileWeb from "./heroProfileWeb"
import * as CONSTANTS from "../../../../constants/index"
import * as MENUS from "../../../../constants/menus"

import Header from "../../menu_dashboard/looper_header"

class HeroProfile extends React.Component {

    constructor() {
        super();
        this.state = {
            width: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {

        return (
            <>
                <Header
                    menus={MENUS.HERO_PROFILE_MENU}
                />
                {
                    this.state.width > CONSTANTS.MOBILE_BREAKPOINT &&
                    (
                        <ProfileWeb />
                    )
                }

                {
                    this.state.width <= CONSTANTS.MOBILE_BREAKPOINT &&
                    (
                        <ProfileMobile />
                    )
                }
            </>
        );
    }
}

export default HeroProfile;
