import React from "react"
import "./OtherHero.scss"
import ProgressiveImage from "react-progressive-image";
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
          <ProgressiveImage
            delay={3000}
            src={card.imageURL}
            placeholder={card.lowImageURL}
            className="w-100"
            style={{maxWidth: 960}}
          >
            {src => <img src={src} alt="" className="w-100"
                         style={{maxWidth: 960}}/>}
          </ProgressiveImage>
        </div>
      </div>
    </div>
  )
}
export  default  OtherHero
