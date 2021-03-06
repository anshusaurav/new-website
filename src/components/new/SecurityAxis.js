import React from "react"
import "./SecurityAxis.scss"

const SecurityAxis = (props) => {
  const {card, demoClick} = props;
  return (
    <div className="d-flex align-items-center justify-content-between securityPageAxis">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer my-4">
          <div className="heroTitle">{card.title}</div>
          <div className="heroSubTitle my-4">{card.subTitle}
            {
              card.showCTA&& (
                <a className="securityEmail" href="mailto:security@thunderpod.com">security@thunderpod.com</a>
              )
            }</div>
          {
            card.showCTA && (
              <>
                <div className="d-flex justify-content-center mt-4">
                  <button className="demoCTA" onClick={() => demoClick()}>Get a demo</button>

                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default SecurityAxis
