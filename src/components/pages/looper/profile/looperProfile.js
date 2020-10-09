import React from "react";

import * as CONSTANTS from "../../../../constants/index"
import * as MENUS from "../../../../constants/menus"

import Header from "../../menu_dashboard/looper_header"
import LooperProfileWeb from "./looperProfileWeb";
import LooperProfileMobile from "./looperProfileMobile";

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
                    menus={MENUS.LOOPER_PROFILE_MENU}
                />
                {
                    this.state.width > CONSTANTS.MOBILE_BREAKPOINT &&
                    (
                        <LooperProfileWeb />
                    )
                }

                {
                    this.state.width <= CONSTANTS.MOBILE_BREAKPOINT &&
                    (
                        <LooperProfileMobile />
                    )
                }
            </>
        );
    }
}

export default HeroProfile;
