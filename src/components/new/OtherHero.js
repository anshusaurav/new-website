import React from "react"
import "./OtherHero.scss"
const OtherHero = (props) => {
  const {card} = props;
  return (
    <div className="d-flex align-items-center justify-content-between otherPageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer">
          <div className="">
            <div className="heroTitle">{card.title}</div>
            <div className="heroSubTitle">{card.subTitle}</div>
          </div>
        </div>
        <div className="imageContainer">
          <img
            src={card.imageURL}
            alt=""
            className="w-100"
            style={{maxWidth: 960}}
          />
        </div>
      </div>
    </div>
  )
}
export  default  OtherHero
