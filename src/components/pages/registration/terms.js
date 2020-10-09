import { inject, observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Progress from "./progress";
import SplashScreen from "./splashScreen" ;

import { useConnect } from '@blockstack/connect';

import { IS_BLOCKCHAIN_REGISTRATION_DISABLED } from '../../../constants';

const BlockstackRegistration = ({ disabled }) => {
  const { doOpenAuth } = useConnect();

  if( IS_BLOCKCHAIN_REGISTRATION_DISABLED )
    return (
      <Link to="/registration/alternatives">
        <Button className="btn btn-block helper-btn"
          disabled={ disabled }>
          Skip blockchain registration ( development mode )
        </Button>
      </Link>
    )

  return (
    <Button className="btn btn-block helper-btn"
      disabled={ disabled }
      onClick={() => {
        console.log("Registration started")
        doOpenAuth(true)
      }}
    >
      Create My Account
    </Button>
  )
}

class RegistrationTerms extends React.Component {
  pageId;  state = {
    showGif: false
  }
  constructor(props) {
    super(props)
    this.pageId = 1;    this.changeTermsOfServiceFlag = this.changeTermsOfServiceFlag.bind(this)
  }
  changeTermsOfServiceFlag(event) {
    const { registration } = this.props;    registration.termsOfServiceAccepted = event.target.checked
    this.setState({
      showGif: !this.state.showGif
    })
  }

  render() {
    const { registration } = this.props;
    const current = 1;    return (
      <div className="wrapper">
        {this.state.showGif && <SplashScreen />}
        <Progress current={current} />
        <section id="registration_terms">
          <div className="text-box">
            <h1>First, Let's align on the legal stuff</h1>
          </div>

          <h2>Terms and Conditions</h2>
          <p>
            By using THE HERO LOOP (”THL”), you agree to be bound by the
			following terms and conditions (“Terms of Service”, “Terms of Use”,
			“Terms and Conditions” or “Terms”). The Terms of Use is an agreement
			you must accept in order to use THL’s services. Any violation of the Terms of
			Use may result in a termination or suspension of your account. Your use of
			the Platform signifies that you agree to the Terms of Use. If you are using the
			Platform for an organization, you agree to the Terms of Use on behalf of that
			organization, and bind that organization to the terms contained herein. If you do not
			agree or are unable to agree to the Terms, then use of the Platform is strictly prohibited.

          </p>


          <p>
            1. Agreement. THL (“THL” or “Loopdigital’s”)’s platforms enable individuals to be matched
			with Hero’s to benefit various individual’s needs, and for community members to help eachother.
			The following terms of use (“Terms”) govern all use of THL’s Platforms, including<br/>
			<ol type="none">
				<li>a. thedigitalvolunteer.se (“webapp” or “Site”)</li>
				<li>b. THL call to numbers (“app” or “apps”)</li>
				<li>c. THL map (“map” or “webapp”).  </li>
			</ol>

			2. Definitions.<br/>
			<ol type="none">
				<li>a. The terms “THL”, “events,” “we,” “us,” and “our” include THL.</li>
				<li>b. We use the terms “you”, “your,” and “member” to mean any person using our Platform, and
					“organizers”, “event sponsors”, “event organizers”, “organization administrator”, “event leader”, “
					charity administrators”, or “charity organizers” to mean any organization or person using the Platform on an organization’s behalf.</li>
     		   <li>c. We use the word “Platform(s)” to mean any website, telephone numbers, or service offered by THL including content we offer and
				   electronic communications we send.</li>
				 </ol>

           3. Revisions. <br/>
		       We reserve the right to update and change these Terms of Use with or without notice. Any new features that modify, augment or enhance the Platform shall be subject to the Terms of Use. Continued use of the Platform after any such change constitutes consent to and acceptance of the Terms of Use regarding such change. Questions about the Terms of Use may be sent to support@theheroloop.com.

		   4. Your Account and Membership.<br/>
		      <ol type="none">
·                 <li>a. Summary: Use of the THL Platforms requires creating an online encrypted account with personal keys enabling full control of your personal data. The account is created using the Ethereum Blockchain Blockstack to protect your privacy and ownership of your Secret keys. You are solely responsible and liable for everything you create in the webapp and any activity that occurs under your account. You are responsible for keeping your password and Secret Keys secure. Hero’s must be at least 16 years old, but 18 if transport is requested. We reserve the right to remove any Content you post and may terminate your account at any time</li>
·                 <li>b. Account Creation. You must be a human in order to use the Platform. Accounts may not be registered by “bots” or other automated means. To complete the registration process, you must provide your full legal name, a valid e-mail address and any other information requested by the Platform. You are the only person permitted to use your login and a single personal login may not be shared by multiple people. By using the Platform you agree to (i) provide true, accurate, current and complete information about yourself as requested by the Platform and (ii) maintain and promptly update such information to keep it true, accurate, current and complete. If you provide information that is false, inaccurate, outdated or incomplete, or THL has reasonable grounds to suspect that such information is false, inaccurate, outdated or incomplete, we reserve the right to suspend or terminate your access to the Platform and prohibit your future use of the Platform.</li>
                  <li>c. Eligibility. Our Platform is available to anyone who is at least 16 years old. By creating an account, you verify that you are at least 16 years of age. Additional eligibility requirements for a particular portion of our Platform may be set by any member who has the ability to moderate or manage that portion of our Platform. If you are found to be in violation of any eligibility requirements, we reserve the right to suspend or terminate your account.</li>

·                 <li>d. Suspension of Your Account. We may modify, suspend or terminate your account or access to the Platform if, at our sole discretion, we determine that you have violated these Terms (including any of the policies or guidelines that are referenced within these Terms), it is in the best interest of the THL community or to protect our users, brand and Platform. We also may remove accounts of members who are deemed inactive for an extended period of time.
·                             The THL Platform has the ability to moderate or manage our webapp automatically and can modify, suspend, or terminate a user’s access the Platform. This may include, but is not limited to, situations in which the Platform can suspend access to a user’s ability to access, based on past violations of these Terms of use.</li>
·                <li>e. Termination. The Company reserves the right to terminate your account for violation of the Terms of Use. Verbal, physical, written or other abuse, including, but not limited to, threats of abuse or retribution, of any Company employee, officer or agent employed by or acting on behalf of Company will result in immediate account termination</li>
·                <li>f. Account Information and Security. When you register, you need to create an encrypted Blockstack self-sovereign and decentralized identity (DID) built personal key, provide THL with some basic information, including an email address and a password. THL allows users to own their own data Blockstack ID. This ID protects your identity and data associated with the identity. This ID eliminated the need for password-based logins, and will unlock software interactions, email, subscriptions and social in the TDL webapp. These keys are in your hands and under your control similar to physical keys. TDL and Loopdigital does not create or manage these keys.  You are responsible for keeping the IDs email address, password, and other account information current and accurate. You are responsible for anything that happens from your failure to maintain security and confidentiality, such as by sharing your account credentials with others. If an unauthorized person has gained access to your account, or you suspect that this may have occurred, notify us immediately. Company cannot and will not be liable for any loss or damage from your failure to comply with security obligations.</li>
·                <li>g. User Content and Responsibility.  You are entirely responsible for the Content of your portion of the Platform and any subsequent harm resulting from that Content. This includes content of any form such as entering text fields and any accompanying text, photo, video, and audio recordings. We reserve the right to take down any Content that we feel violates our Community Guidelines and reserve the right to discontinue the membership of anyone who posts harmful Content”</li>
                 </ol>

           5. Content and Privacy<br/>
		      <ol type="none">
·                 <li> a. Summary: THL is not responsible for user content posted on our Platform, and views expressed are not those of THL. Users are responsible for the Content posted on our Platform. By posting on THL, you give us a license to use this Content as promotional material, as well as to improve and protect THL and our Platform. Our Privacy Policy explains how we collect and use information you provide about yourself and the information that may be associated with you, and explains the limited ways we may share this information.</li>
·                 <li>b. Your Content. You are solely responsible for your Content. We use the word “Content” to mean any information, material, or other content posted to our Platform or otherwise provided to us (such as feedback, comments, or suggestions shared with us). You agree that you and your Content shall not violate the rights of any third party (such as copyrights, trademarks, contract rights, privacy rights, or publicity rights) or these Terms, including our Community Guidelines and Privacy Policy.’</li>
·                 <li> c. Legality. By using our Platform, you also agree that any Content posted on the Platform complies with any applicable laws or regulations in your country and community.</li>
·                 <li>d. Content Ownership. THL does not claim ownership of your Content. However, to enable us to operate, improve, promote, and protect THL and our Platform, and to ensure we do not violate any rights you may have in your Content, by using THL you grant THL a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sublicensable, transferable right and license (including a waiver of any moral rights) to use, host, store, reproduce, modify, publish, publicly display, publicly perform, distribute, and create derivative works of, your Content and to commercialize the copyright, trademark, publicity rights you have in your Content.</li>
·                 <li>e. Privacy. When you use our Platform, you provide encrypted information to THL. We will not sell your information to any third parties. Please refer to our Privacy Policy for details on how we collect, use, and disclose this information. However, we have no control over information you may share with others over the Platform, and do not accept responsibility for how those users may or may not interact with your information. If you believe an organization, through its use of THL, is ethically or legally misusing, collecting or disseminating your information, data or Content, please immediately contact us at support@theheroloop.com.</li>
             </ol>

          6. Your Use of Our Platform<br/>
		      <ol type="none">
·                <li>a. Summary: We require that that you follow our policies and guidelines when using our Platform. All Content posted on the Platform must follow our Community Guidelines.</li>
                 <li>b. THL Policies. By using the Platform you agree to our Community Guidelines. You agree to comply with all applicable laws, rules and regulations, and to not violate or infringe the rights of any third party. If you do not comply, we may suspend and permanently block your account or access to the Platform, at our sole discretion.</li>
				 <li>c. Content of Others. THL does not control the Content of other members. When we become aware of inappropriate Content on our Platform, we reserve the right to investigate and take appropriate action, but we do not have any obligation to monitor, nor do we take responsibility for, the Content of other members.</li>·
                 <li>d. Interactions with Others. THL is not a party to any offline arrangements made through our Platform. THL does not directly conduct background checks on members and does not attempt to verify the truth or accuracy of statements made by members. (However, THL will work with a third party to conduct background checks if needed). THL makes no representations or warranties concerning the conduct or Content of any members or their interactions with you.</li>
                 <li>e. No Resale. Our Platform contains proprietary and confidential information and is protected by intellectual property laws. You may in no way, willfully or by accident, alter or otherwise modify, reproduce, sell or charge a fee, offer to sell or charge a fee, make, create derivative works based on, or distribute any part of our Platform, including any data, or Content of others.</li>
				 <li> f. No Technical Interference with the Platform. You agree that you will not engage in any activity or post any information or material that interferes with or disrupts, or that is designed to interfere with or disrupt, the Platform or any hardware used in connection with the Platform.</li>·
                 <li>g. Platform Modifications. We may modify or discontinue portions or all of our Platform with or without notice and without liability to you or any third party.</li>
                <li>h. Third Party Sites and Services. The Platform may contain links to third party sites and is integrated with various third party services, applications, and sites that may make available to you their content and products. We do not control these third parties and are not responsible for those sites or services or their content or products. These third parties may have their own terms and policies, and your use of them will be governed by those terms and policies. </li>
             </ol>

          7 . Release, Indemnification, Liability and Warranty.<br/>
		       <ol type="none">
·                  <li>a. Summary: THL is not responsible for any losses incurred through the use of the Platform, and you release us from financial responsibility from any lawsuits arising from your use of the Platform.</li>·
                   <li>b Release. You hereby agree that all THL officers, agents, employees, parents, affiliates and successors are not liable for any loss, be it personal or monetary, or any damages without limitation, including personal injury, property damage or death that is either directly or indirectly related to any posts on the THL webapp or any interaction affiliated with or arising from your use of the Services.</li>
                   <li>c. Indemnification. You agree to indemnify, defend and hold all THL affiliates harmless from any Claims, made by any and all third parties due to or arising from (a) your violations of this Agreement, (b) your use, misuse, or abuse of our Platforms, (c) your Content or any Content you interact with, (d) your violation of any law, statute, ordinance or regulation or the rights of a third party, or (e) your participation or behavior in a THL event that violates this Agreement. You agree to promptly notify us of any third party Claims, and cooperate with all THL Parties in defending such Claims and pay all fees, costs and expenses associated with defending such Claims (including, but not limited to, lawyer fees). You agree not to settle any Claim without our prior written consent.</li>
·                  <li>d. Limitation of Liability. You agree that in no event shall any THL Parties be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to, damages for loss whether it be tangible, intangible, monetary, or personal (even if any THL Parties have been advised of the possibility of such damages) arising out of or in connection with (a) our Platforms or this Agreement or the inability to use our Platforms (however arising, including our negligence), (b) statements or conduct of or transactions with any member or third party on the Platforms, (c) your use of our Platforms or transportation to or from THL events, attendance and participation or exclusion from events, actions of any person or entity at the event, or (d) any other matter relating to the Platform.</li>
                   <li> e. Warranty. Our Platforms are provided to you “as is” and on an “as available” basis. We disclaim all warranties of any kind, including but not limited to statutory, implied, non-infringement warranties and conditions of any kind. We also disclaim any warranties regarding (a) the reliability, timeliness, accuracy, and performance of our Platform, (b) any information, advice, services, or goods obtained through or advertised on our Platform or by us, as well as for any information or advice received through any links to other websites or resources provided through our Platform, (c) the results that may be obtained from the Platform, and (d) the correction of any errors in the Platform, (e) any material or data obtained through the use of our Platform, and (f) dealings with or as the result of the presence of marketing partners or other third parties on or located through our Platform.</li>
              </ol>

         8. Disputes.<br/>
		    <ol type="none">
·                <li>a. Dispute Resolution. By using Platform, you agree that the Site shall be governed by and construed in accordance with the laws of Sweden, without regard to any choice of law provisions. You agree to submit to personal jurisdiction in Sweden and further agree that any cause of action arising from or relating to the use of the Site or these Terms of Use shall be brought exclusively in the State Courts residing in Sweden.</li>
                 <li> b. Failure to Enforce. Company’s failure to enforce or exercise all or any of the rights or provisions of the Terms of Use shall not constitute a waiver of such rights or provisions.</li>
             </ol>

        9. Ownership, Copyright and Intellectual Property<br/>
		    <ol type="none">
·               <li>a. Copyright. All THL images, logos, content, software, and names are the intellectual property of THL. You may not duplicate, copy or reuse any visual elements, or any portion of the HTML, CSS, JavaScript or other code without the express written consent of THL.</li>
                <li>b. Intellectual Property. Do not use any intellectual property of or pertaining to THL or our Platforms without express written permission. While using our Platforms, ensure that all Content posted is your own and/or you have the rights to it, and do not infringe on the intellectual property of others. Any Content that we believe may be infringing on the property of other users or entities may be removed without notice and we may suspend the user’s account.  If you believe intellectual property rights have been violated, please inform our team immediately.</li>
				<li>c. Reproduction. You are not permitted to reproduce, duplicate, copy, sell, resell, exploit or use for your own profit any portion of the Platform without the express written consent of THL. You may not modify, adapt or hack the Site. The modification of another website so as to falsely represent association with the Site or Company is strictly prohibited.</li>
            </ol>

        10. Miscellaneous.<br/>
          This Agreement and the relationship between you and THL shall be governed by the laws of Sweden without regard to its conflict of laws provisions, except as set forth in Section 9. This entire agreement between you and THL is comprised of this Agreement of Terms and Conditions, Privacy Policy and Community Guidelines. If any provision of this Agreement is found to be invalid by a court of competent jurisdiction, you and THL nevertheless agree that the court should endeavor to give effect to the parties’ intentions as reflected in the provision, and that the other provisions of this Agreement will remain in full force and effect.

          </p>

          <Form>
            <Form.Group>
              <Form.Check type="checkbox" name="termsOfService"
                label="I agree to the terms and conditions"
                checked={registration.termsOfServiceAccepted}
                onClick={this.changeTermsOfServiceFlag}
              />
            </Form.Group>
          </Form>
		  <div className="mt-4">
            <BlockstackRegistration disabled={!registration.termsOfServiceAccepted} />          </div>
        </section>
      </div>
    );
  }
}export default inject('registration')(observer(RegistrationTerms));
