/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";
import {Link} from "react-router-dom";

import Footer from "../footer";
import SocialMediaFooter from "../socialMediaFooter";

import Button from "react-bootstrap/Button";
import personHeart from "../../assets/img/person-heart.svg";
import handHeart from "../../assets/img/hand-heart.svg";
import lockHeart from "../../assets/img/lock-heart.svg";

class Home extends React.Component {

    render() {

        return (
            <section id="home">
                <div id="hero">
                    <div id="hero-cta">
                        <h1>Help has arrived!</h1>
                        <p>
                            COVID-19 has disrupted billions of lives and endangered the global economy,
                            creating an unprecedented human crisis. TheHeroLoop is a socio-economic
                            recovery and response ecosystem to COVID-19, to support countries’paths to social
                            and economic recovery. Worldwide.
                            <br/><br/>
                            Millions of people are isolated within their homes, unable to shop for food, pickup
                            up medications, or travel to doctor appointments. TheHeroLoop hopes to solve
                            that problem by connecting Loopers with Heroes in local communities to help each other.

                        </p>
                        <Button href="#claim" className="helper-btn">Get Started</Button>
                    </div>
                </div>

                <div id="video-section" className="flex-section centered wrapper sp-evn">
                    <iframe id="video-player" src="https://www.youtube-nocookie.com/embed/7Wijl7lTYAI" width="80vw"/>
                    <div className="slim-section">
                        <h2 className="big-heading">What is TheHeroLoop?</h2>
                        <p className="spacing-text">
                            TheHeroLoop is a digital ecosystem that connects Heroes with people in need of help - Loopers,
                            with getting food, picking up medications, transportation, and other tasks.
                        </p>
                    </div>
                </div>

                <div id="home-info">
                    <div className="wrapper">
                        <h2>How does TheHeroLoop work?</h2>
                        <div className="flex-section sp-btw">
                            <div className="flex-section centered column super-slim">
                                <img alt="" src={personHeart} />
                                <h4>
                                    Ask For Help
                                </h4>
                                <p>
                                    The Looper sends a request for help to Hero’s
                                    within a 20 km radius in your area.
                                </p>
                            </div>
                            <div className="flex-section centered column super-slim">
                                <img alt="" src={handHeart} />
                                <h4>
                                    Provide help
                                </h4>
                                <p>
                                    Local Hero’s review and accept the requests
                                    they can help with.
                                </p>
                            </div>
                            <div className="flex-section centered column super-slim">
                                <img alt="" src={lockHeart} />
                                <h4>
                                    Digital security
                                </h4>
                                <p>
                                    Your personal information is protected by
                                    blockchain encryption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cta-section" className="flex-section sp-evn wrapper">
                    <div className="slim-section">
                        <h2>How do I get access to the app?</h2>
                        <p>
                            HeroLoop is a tool that connects volunteers with people who need
                            help with getting food, medication and similar tasks. Click on
                            whether you want to help or be helped
                        </p>
                    </div>
                    <div className="btn-wrapper">
                        <Link to="/login">
                            <Button className="helper-btn">I want to help others</Button>
                        </Link>
                        <Link to="/login">
                            <Button className="receiver-btn">I need help</Button>
                        </Link>
                    </div>
                </div>

                <div id="contact" className="flex-section centered">
                    <div className="flex-section centered column  wrapper">
                        <h2>Don't hesitate to contact us</h2>
                        <p> We're actively looking for beta testers to join the movement on its early stages. Want in? </p>
                        <Link className="flex-section centered" to="/welcome"></Link>
                        <Button className="road">Get in touch</Button>
                    </div>
                </div>
                <Footer />
                <SocialMediaFooter />
            </section>
        );
    }
}

export default Home;
