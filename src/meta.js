import React from "react";
import Helmet from "react-helmet";

import previewImage from "./assets/img/doodle.png";

class Meta extends React.Component {

    render() {
        return(
            <Helmet>
                {/*HTML meta tags*/}
                <title>TheHeroLoop</title>
                <meta name="description" content="A digital ecosystem that connects Heros with people in need of help." />

                {/*Facebook meta tags*/}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="TheHeroLoop"/>
                <meta property="og:description" content="A digital ecosystem that connects Heros with people in need of help"/>
                <meta property="og:image" content={previewImage}/>

                {/*Twitter meta tags*/}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="TheHeroLoop"/>
                <meta name="twitter:description" content="A digital ecosystem that connects Heros with people in need of help"/>
                <meta name="twitter:image" content={previewImage}/>
            </Helmet>
        )
    }
}

export default Meta;
