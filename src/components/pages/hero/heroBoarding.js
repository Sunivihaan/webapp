import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class HeroBoarding extends React.Component {
  pageId;

  constructor( props ) {
    super( props )
    this.pageId = 1;
    this.changeTermsOfServiceFlag = this.changeTermsOfServiceFlag.bind( this )
  }

  changeTermsOfServiceFlag(event) {
    const { registration } = this.props;

    registration.termsOfServiceAccepted = event.target.checked
  }

  render() {
   
    return (
      <div className="wrapper">
        
        <section id="hero_board">
          <div className="text-box">
            <h2 style={{color:"#F7AF69",fontSize:"28px"}}>Welcome <br/>our new Hero</h2>
          </div>

          <h2>How would you like to help</h2>
           <div className="boardtasks">
		    <Form>
              <Form.Group>
			  <div>
				<label for="b2">I have a car and can help</label>

				<input type="checkbox" id="b2" name="b2" value="I have a car and can help" style={{float:"right"}}/>
             </div>
			
            </Form.Group>
          </Form>
		  
		    <Form>
            <Form.Group>
			
			<div>
				<label for="b1">I can pick up and deliver up something</label>

				<input type="checkbox" id="b1" name="b1" value="I can pick up and deliver up something" style={{float:"right"}}/>
             </div>
			
             
            </Form.Group>
          </Form>

		    <Form>
            <Form.Group>
             
			  
			  <div>
				<label for="b3">I can travel by bicycle/walk</label>

				<input type="checkbox" id="b3" name="b3" value="I can travel by bicycle/walk" style={{float:"right"}}/>
             </div>
			

            </Form.Group>
          </Form>

            <Form>
            <Form.Group>
             
			   <div>
				<label for="b4">I can you help with tasks at home, like moving furnitue or changing a lightbulb</label>

				<input type="checkbox" id="b4" name="b4" value="I can you help with tasks at home, like moving furnitue or changing a lightbulb" style={{float:"right"}}/>
             </div>
			
            </Form.Group>
          </Form>

            <Form>
            <Form.Group>
              
			   <div>
				<label for="b5"> tested positive for COVID-19 antibodies (=immune)</label>

				<input type="checkbox" id="b5" name="b5" value=" tested positive for COVID-19 antibodies (=immune)" style={{float:"right"}}/>
             </div>
			
            </Form.Group>
          </Form>  
         
          <div className="mt-4">
            <Link to="/hero/acceptHero">
              <Button className="btn btn-block helper-btn"
                
              >
                I can do this!
              </Button>
            </Link>
          </div>
		  </div>
        </section>
      </div>
	  
    );
  }
}

export default HeroBoarding;
