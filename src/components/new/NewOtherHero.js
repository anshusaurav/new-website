import React, {} from "react"
import "./NewOtherHero.scss"
const NewOtherHero = (props) => {

  const { card,page} = props;
  return (
    <div className="d-flex align-items-center justify-content-between newOtherPageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer d-flex align-items-center">
          <div className="">
            <div className="heroTitle">

              {card.title}
            </div>
            <div className="heroSubTitle mb-4">{card.subTitle}</div>
            <a className="demoCTA" href="https://business.thunderpod.com/signup" target="_blank"
               rel="noopener noreferrer">Try for free</a>
          </div>
        </div>
        <div className="imageContainer">
          <img
            src={card.imageURL}
            className={page==="Work"?"littleLessWidth":"w-100"}
            alt=""
          />

        </div>
      </div>
    </div>
  )
}
export default NewOtherHero
