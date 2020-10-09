import React from "react";

import topitem from "../../../../assets/img/mytasksweb3.png";
import Header from "../../../../assets/img/header.png";
import meditem from "../../../../assets/img/mytasksweb4.png";



class MyTasksWebHero extends React.Component {

  render() {

    return (

      <div className="wrapper">

        <section id="registration_finish">
		<center><img src={ Header } alt=" " className={Header}/></center>
		<br></br>
		
        <center><img src={ topitem } alt=" " className={ topitem }/></center>
		<br></br>
		<center><img src={ meditem } alt=" " className={ meditem }/></center>
        </section>

      </div>

    );

  }

}


export default MyTasksWebHero;