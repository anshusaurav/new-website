import React from "react"
import "./ContactHero.scss"
import {faEnvelopeOpen, faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const contactInfoList = [
  {
    title: 'Our office',
    subTitle: '1013 Centre road, Suite 403-B, Wimington, New Castle, Zip Code 19805-1270',
    icon: faMapMarkerAlt
  },
  {
    title: 'Email',
    subTitle: 'support@thunderpod.com',
    icon: faEnvelopeOpen
  },

]
const ContactHero = (props) => {
  const {demoClick, card} = props;
  return (
    <div className="d-flex flex-nowrap align-items-center justify-content-center contactPageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer mb-4">
          <div className="">
            <div className="heroTitle">{card.title}</div>
            <div className="heroSubTitle">{card.subTitle}</div>
          </div>
        </div>
        <div className="mainFormContainer mt-5">
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
                    <input type="number" className="formTextInput" placeholder="Select employee size" name="employeeNum"  min={0}/>
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
                  <div className="formLabelText mb-2">Enter your message</div>
                  <textarea className="w-100 formTextArea" placeholder="Enter your message"></textarea>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start">
                <button type="submit" className="formSubmitBtn">Contact now</button>
                </div>
              </div>
            </form>
            <div className="contactInfoContainer">
              <div>
                {
                  contactInfoList.map((card, index) => {
                    return (
                      <div className="singleInfoField">
                        <div className="contactInfoTitle">
                          <FontAwesomeIcon icon={card.icon}/>
                          <div>{card.title}</div>
                        </div>
                        <div>{card.subTitle}</div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="showOnMd">
                <hr className="contactInfoHr my-4"/>
                <div>
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
                    <img src="/assets/images/contact-dec.png" style={{width: "60%"}} alt=""/>
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
export default ContactHero
