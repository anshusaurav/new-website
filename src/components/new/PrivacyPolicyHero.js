import React from "react"
import "./PrivacyPolicyHero.scss"
const PrivacyPolicyHero = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between privacyPageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer">
            <div className="heroTitle">Privacy Policy</div>
          <div className="heroSubTitle my-4">
            <div className="font-weight-bolder f24">Effective: <span className="font-weight-normal">13 December 2019</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export  default  PrivacyPolicyHero
