import React from "react"
import "./RequestDemoHero.scss"
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const contactInfoList = [
  {
    title: 'Set up, track progress and update goals',
  },
  {
    title: 'Goal based feedback loop',
  },
  {
    title: 'Introduction to work gamification',
  },
  {
    title: 'Productivity',
  },
  {
    title: 'Product use for your organizaton'
  },

]
const RequestDemoHero = (props) => {
  const {card} = props;
  return (
    <div className="d-flex flex-nowrap align-items-center justify-content-center requestDemoPageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer mb-4 ">
          <div className="">
            <div className="heroTitle">{card.title}</div>
            <div className="heroSubTitle">{card.subTitle}</div>
          </div>
        </div>
        <div class="mainFormContainer mt-5">
          <div className="formWrapper">
            <form>
              <div className="contactForm">
                <div className="colTwoForm mb-4">
                  <div className="singleFieldWrapper">
                    <div className="formLabelText mb-2">Enter your company name</div>
                    <input type="text" className="formTextInput" placeholder="Enter your company name" name="companyName"/>
                  </div>
                  <div className="singleFieldWrapper">
                    <div className="formLabelText mb-2">Select employee size</div>
                    <input type="number" className="formTextInput" placeholder="Select employee size" name="employeeNum"/>
                  </div>
                </div>

                <div className="colTwoForm mb-4">
                  <div className="singleFieldWrapper">
                    <div className="formLabelText mb-2">Enter your work email</div>
                    <input type="email" className="formTextInput" placeholder="Enter your work email" name="email"/>
                  </div>
                  <div className="singleFieldWrapper">
                    <div className="formLabelText mb-2">Enter your contact number</div>
                    <input type="tel" className="formTextInput" placeholder="Enter your contact number" name="phoneNumber"/>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="formLabelText mb-2" placeholder="Enter your message">Enter your message</div>
                  <textarea className="w-100 formTextArea"></textarea>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <button type="submit" className="formSubmitBtn">Request a demo</button>
                </div>
              </div>
            </form>
            <div className="contactInfoContainer">

              <div>
                <div className="requestDemoText mb-3">Demo includes</div>
              {
                contactInfoList.map((card, index) => {
                  return (
                    <div className="singleInfoField">
                      <div className="contactInfoTitle">
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <div>{card.title}</div>
                      </div>
                    </div>
                  )
                })
              }
              </div>
              <div className="showOnMd">
                <hr className="contactInfoHr my-4"/>
                <div className="requestDemoExtras align-self-stretch">
                  <div className="socialsWrapper mt-3 mt-md-0">
                    <a className="socialIconContainer" href="https://www.instagram.com/thethunderpod/" target="_blank"
                       rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} color="#324250"/>
                    </a>
                    <a className="socialIconContainer" href="https://www.facebook.com/thethunderpod/" target="_blank"
                       rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} color="#324250"/>
                    </a>
                    <a className="socialIconContainer" href="https://twitter.com/TheThunderpod" target="_blank"
                       rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} color="#324250"/>
                    </a>
                    <a className="socialIconContainer" href="https://www.linkedin.com/company/thunderpod"
                       target="_blank"
                       rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedinIn} color="#324250"/>
                    </a>
                  </div>
                  <div className="d-flex justify-content-end">
                    <img src="/assets/images/request-demo-dec.png" style={{width: "60%"}} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default RequestDemoHero
