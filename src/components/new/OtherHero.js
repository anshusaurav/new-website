import React from "react"
import "./OtherHero.scss"
import TypeAnimation from 'react-type-animation';
const Hero = (props) => {
  const {demoClick, card} = props;
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
          <img src={card.imageURL} style={{width: "100%", maxWidth: 960}} alt=""/>
        </div>
      </div>
    </div>
  )
}
export  default  Hero
