![TheHeroLoopLogo](http://loopdigital.se/images/TheHeroLoop-logo-Ruthy-transp.png)

<p> TheHeroLoop (former The Digital Volunteer)  is a digital ecosystem in the form of a responsive webapp that uses AI to match volunteers with those in need - based location, skills and availability. Combined with Blockchain DID encryption, the HeroLoop answers requests in a safe, secure and timely manner.</p>

## Short description/Problem statement
COVID-19 has disrupted billions of lives and endangered the global economy, creating an unprecedented human crisis. With Covid-19 threatening the lives of millions, many people around the globe are isolated or in need of urgent help, with no one to help them. On the other end are hundreds of thousands of volunteers, businesses, municipalities and institutions who want to help individuals, but do not know - and have no quick way of knowing, where help is needed.

## How can technology help?
TheHeroLoop is a socio-economic recovery and response ecosystem to COVID-19, to support countries’ paths to social and economic recovery. Worldwide.
By bringing all personas together in a socially impacting platform, we target community segments to improve the wellbeing and good health of all ages and aim to accelerate SDG 2030 goals, while engaging multiple generations on a shared mission. TheHeroLoop features a mobile-first design, with a compatible web app for browsers. To reach our elderly and offgrid users, we also offer a landline to call in and ask for help.

## Our solution
The HeroLoop platform is social inclusive, focusing on the bigger picture through the little details. User activities are protected by blockchain, AI/ML and IBM technologies that analyze every incoming text, call or voicenote to ensure users’ privacy and safety at all times.

This is the future of community help, and we have IBM tools to thank for it - all assisted in bringing TheHeroLoop to life and maintain its existence.

IBM Cloud</br>
 - Watson Tone Analyser
 - Watson Personality insights
 - Watson Assistant
 - Object Storage
 - The Weather Company
 - Node-Red </br>
 and
 - Red Hat OpenShift

## Demo video

[![TheHeroLoopVideo](http://loopdigital.se/images/IBM-image-YouTube.png)](http://www.youtube.com/watch?v=iGajZwkXlKk&feature=youtu.be "TheHeroLoop")
For GitHub use CTRL+click (on Windows and Linux) or CMD+click (on MacOS) on the link to open in new window.
Please click on the image to view the video on YouTube.

## Architecture Overview
![TheHeroLoopArchitecture](http://loopdigital.se/images/HeroLoopArchitecture.png)

## Long description
The HeroLoop allows users to request a task by calling in or by using the app. Every request is being processed using IBM Watson and AI/ML NLTK removing toxic use, and a volunteer (we call them Heroes) is matched using AI, based on their location and availability. The Heroes can find all the available tasks within their 20km radius, easily visible on a map dashboard. Both parties must approve each other for the task, and users can chat or call each other to coordinate its completion with the requester (We call them Loopers, because they keep the loop going).

For Loopers who might prefer that, we also have a landline to accept incoming calls asking for help. Users will be asked to record their request and specify the city and area. Speech to text will transcribe the Looper’s voicenote to show on the map as a request for Hero help. Together with AI models IBM Watson is analyzing every call and text for tone and personality insights, and is set to alert relevant parties if need be, to protect our Heroes.

To increase the social experience, the HeroLoop is designed for collecting memories with every task, and allowing easy sharing to social media. (Or as our Heroes say: “Pics or it didn’t happen”. :)

Our leaderboard is designed to incentive the Heroes, and the worthy cause is packaged up with some desired intangible rewards for top leaders: A university / college application / Linkedin recommendation and badges, to help our Heroes on their journey, wherever they might be.

We are building the product using as much open source and decentralisation as possible, and focusing on security and scalability so the application can be used anywhere and by anyone. We at the HeroLoop recognize that technology must adapt to human needs, and for it to be a real game changer, it must be accessible to all.
Universal functionalities are:

- Enter a request by non-smartphone off grid or smartphone with internet
- The individual identity holder controls their own credentials and choses what personal data to share.
- Login is with privacy encrypted keys in the ethereum blockchain, and each user is protected by a hash
- Toxic use is filtered with AI/ML and IBM Watson
- Matching is done by AI within 20 km radius of real-time location

This to enable safe and democratic use of different public and private sectors in the service. Meanwhile for this MVP we will start with decentralized login.
Decentralized login enables the user to choose what data to share. TheHeroLoop will automate removing toxic use with a strong border on separating centralized data with decentralized data.

The Blockstak solution offers a decentralized encrypted authentication, removing third parties or remote servers in handling sensitive user data. It gives back the power to the user of owning their personal data, and deciding what about their identity to be disclosed.

During the authentication flow, the user gets a public decentralised identifier (a DID) "hash key" which will be verified against the private key stored on his/her  storage of choice. Once the user is authenticated, all application data holding the user information is encrypted and stored either on the user local storage or prefered cloud storage using Gaia.
![TheHeroLoopGaia](https://docs.blockstack.org/storage/images/gaia-writes.png)

The private information stored in TheHeroLoop webapp is restricted to what is entered by the users themselves. All user generated data is tied to the public hash key.

A Decentralized Identifier (DID) is a new type of identifier that is globally unique, resolveable with high availability, and cryptographically verifiable. DIDs are typically associated with cryptographic material, such as public keys, and service endpoints, for establishing secure communication channels.

Only the hash key will be stored in a suspended db, nothing else - and these users will not be granted access again.
TheHeroLoop will penetrate solutions that removes toxic use.

Another layer of security is TheHeroLoop never exposes the recipient’s public/hash key. It is considered cryptographically secure to share a public key, but not exposing it makes the system even more robust.

![TheHeroLoopBlockstack](https://docs.blockstack.org/storage/images/app-sign-in.png)
The platform verifies requests with the associated key using the token hash algorithm from Blockstack. It’s only the hash key that passes within the centralised data.

The landline functionality enables Loopers to call in and leave a voicenote requesting help from a Hero. This note is transcribed with speech to text and AI/ML models are applied. A pin is created and placed on the map with a need for a Hero  within a radius of 20 km area. The area the Looper stated in the voicenote.

The AI/ML filter detects toxic messages from input fields, notifications, chats or Speech modules from the app where the model alerts the developer if there is any bad use of the application. Latest natural language techniques such as NLTK libraries for preprocessing, the TFiDF vectorizer for feature extraction are used along with extreme boosting models for binary classification. The model is trained on CPUs and 16GB RAM. The best auc_score is 88%.

We built a custom chatbot using IBM Watson Assistant tool to answer generic questions asked by the users.

The Weather Company is used to show weather updates on the Hero map.

IBM Object Storage is used to store content images for the webapp.

To solve in-app chat Apache Kafka is used as the messaging system. It provides a platform for scalable, high-throughput and low-latency data streams.  

In the future more functionality enabled by Kafka will be used in the webapp.

![TheHeroLoopRoadmap](http://loopdigital.se/images/Roadmap.png)
For GitHub use CTRL+click (on Windows and Linux) or CMD+click (on MacOS) on the link to open in new window.

## Project roadmap
What's next for TheHeroLoop.
Some of the next steps we have foreseen:

### User research
Further distribution and analysis of results from a questionnaire
Additional user interviews
Additional stakeholder feedback

### Finish building the MVP
Update of user stories based on user research
Refinement of overall architecture

### Partnerships & Communities
Identify possible partners and communities that would be willing to trial the solution, or want to help us with further development

See how we can partner with private and public sector networks, cities and community organisers

As soon as the MVP is completed we will target these partners and ask for cooperation within their channels. https://www.euvsvirus.org/partners/

### Pilot
Build strategic partnerships with solidarity networks, cities and community organisers
Pilot application in a local community, city or event
Evaluate impact & lessons learned

### Go to market
Full app development incl. pilot insights
Implementation in larger communities


TheHeroLoop MVP is free to citizens, and the next phase post the MVP is to make a business model and include companies, universities and governments in the loop.

Companies might be looking to help, and government agencies with the means to do a lot of good - all of them do not know - and have no quick way of knowing where help is needed. With a TheHeroLoop service subscription they can easily locate where the need is in their community and reach out to help a Looper in need.


A wallet functionality to share the leaderboard incentives/tokens will be set up in Ethereum.
TheHeroLoop will also look into smart contracts in the Ethereum blockchain between citizens,  businesses, municipalities and universities. Hyperledger will be used for additional blockchain services.


## Getting started
How to copy the project and run on local machine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the required packages

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `REACT_APP_BYPASS_BLOCKCHAIN_USER=testuser npm start`

Runs the app in the development mode bypassing blockhcain. The user specified
in the REACT_APP_BYPASS_BLOCKCHAIN_USER environment variable will be used for
registration and/or login steps. Once registered, it won't be registered again.
It can be manually deleted from the API database so it can be registered again.

<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs all tests in non-interactive mode. A server is started as part of the
integration tests, so it's not required that the development server is running
when this is invoked.

### `npm run test-unit`

Runs unit tests in interactive mode. Unit tests do not require npm start to be
running.

### `npm run test-unit-no-watch`

Runs unit tests in non-interactive mode. Unit tests do not require npm start to be
running.

### `npx cypress open`

Opens cypress tool to run integration tests in interactive mode.
Another terminal, or a background process, should be left running with npm start,
so tests can run against it.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Running the tests
Automated unit tests are run for this platform to ensure that sections of the application meets its design and behaves as intended.

### Live demo
You can already join TheHeroLoop at: http://dev.thedigitalvolunteer.se/welcome (Soon to be  www.TheHeroLoop.com after Call for Code submission).


## Built with
IBM Cloud
 - Watson Tone Analyser
 - Watson Personality insights
 - Watson Assistant
 - Object Storage

IBM Red Hat OpenShift Online Pro
 - Kubernetes
 - Docker containers
 - Jenkins
 - Node.js
 - React
 - Kafka
 - mySQL
 - Gogs
 - SonarQube
 - Nexus Repository
 - Quay.io

The Weather Company
 - Node-Red

Blockstack </br>
Google Maps API </br>
Google Speech to text </br>
46 elks API </br>
AI/ML 1) NLTK filtering of toxic use and 2) matching of users


## Authors and contributors

##### Bente Acking
Idea The Digital Volunteer / TheHeroLoop </br>
PO/PM</br>
Founder & CEO Loopdigital</br>
bente.acking@loopdigital.se</br>
</br>
##### Suneetha Jonnadula
OpenShift CI/CD</br>
Full stack developer</br>
suneetha.jonnadula@gmail.com</br>
</br>
##### Ruthy Lichtenstein
UX/UI Design</br>
ruthy.licht@gmail.com</br>
</br>
##### Emmanuel Murairi
Blockstack and React/Node.js</br>
emurairi18@alastudents.org</br>
</br>
##### Keerti Bhogaraju
AI/ML</br>
bhogaraju.keerti17@gmail.com</br>
</br>
