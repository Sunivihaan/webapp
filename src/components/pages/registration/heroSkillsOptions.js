import React from "react";
import { withRouter } from 'react-router';
import { inject, observer } from "mobx-react";

import Checkmark from "../../../assets/img/checkmark.png";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import Button from "react-bootstrap/Button";

class HeroSkillsOptions extends React.Component {

    handleCheckboxAction(index){
        const { heroProfile: profile } = this.props;
        profile.uiStates.checkboxes[index] = !profile.uiStates.checkboxes[index]
        this.setState({});
    }

    setSkillOptions() {
        //set skills

        this.props.history.push( '/registration/finish' );
    }

    render(){

        const { heroProfile: profile } = this.props;

        return(
            <div>
                <div className="flex-section column center">
                    <div>
                        <h3 className="black left heading">
                            How would you like to help?
                        </h3>
                    </div>

                    <div className="flex-section column center">
                        <div className="flex-section column center">
                            <div className="form-item">
                                <div
                                    className={`checkbox${profile.uiStates.checkboxes[0] === false ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark} onClick={(param) => this.handleCheckboxAction(0, true)}/>
                                </div>
                                <FormCheckLabel>I can go shopping for someone</FormCheckLabel>
                            </div>
                            <div className="form-item">
                                <div
                                    className={`checkbox${profile.uiStates.checkboxes[1] === false ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark} onClick={(param) => this.handleCheckboxAction(1, true)}/>
                                </div>
                                <FormCheckLabel>I can pick something up and deliver</FormCheckLabel>
                            </div>
                            <div className="form-item">
                                <div
                                    className={`checkbox${profile.uiStates.checkboxes[2] === false ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark} onClick={(param) => this.handleCheckboxAction(2, true)}/>
                                </div>
                                <FormCheckLabel>I have a car and can drive</FormCheckLabel>
                            </div>
                            <div className="form-item">
                                <div
                                    className={`checkbox${profile.uiStates.checkboxes[3] === false ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark} onClick={(param) => this.handleCheckboxAction(3, true)}/>
                                </div>
                                <FormCheckLabel>I can travel by bycicle / walk</FormCheckLabel>
                            </div>
                            <div className="form-item">
                                <div
                                    className={`checkbox${profile.uiStates.checkboxes[4] === false ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark} onClick={(param) => this.handleCheckboxAction(4, true)}/>
                                </div>
                                <FormCheckLabel>I can help you with tasks at home, like moving furniture
                                    or changing a lightbulb</FormCheckLabel>
                            </div>
                            <div className="form-item">
                                <div
                                    className={`checkbox${profile.uiStates.checkboxes[5] === false ? "" : "-disabled"}`}>
                                    <img alt="" src={Checkmark} onClick={(param) => this.handleCheckboxAction(5, true)}/>
                                </div>
                                <FormCheckLabel>I tested positive for COVID-19
                                    antibodies</FormCheckLabel>
                            </div>
                        </div>
                        <Button className="btn btn-block helper-btn" onClick={(param) => this.setSkillOptions()}>
                            I can do this!
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(
    inject('heroProfile')( observer(HeroSkillsOptions) )
)
