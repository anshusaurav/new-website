import React from "react"
import "./SecurityHero.scss"

const SecurityHero = (props) => {
  const {card} = props;
  return (
    <div className="d-flex align-items-center justify-content-between securityPageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer my-4">
          <div className="heroTitle">{card.title}</div>
        </div>
        <div className=" d-flex justify-content-center mt-5">
          <div className="imageContainer">
            <img src={card.imageURL} style={{width: "100%"}} alt=""/>
          </div>
        </div>
        <div className="heroCTAContainer my-5">
          <div className="heroSubTitle">{card.subTitle}</div>
        </div>
      </div>
    </div>
  )
}
export default SecurityHero
