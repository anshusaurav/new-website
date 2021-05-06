import React from "react"
import "./Features.scss"
import classNames from "classnames";

const Features = (props) => {
  const {demoClick, cards, page} = props;
  return (
    <div className="pageFeatures">
      <div className="sectionTitle py-3">{page === "Home" ? "Why Thunderpod?" : "Features"}</div>
      <div className="d-flex justify-content-between">

        <div className="featuresContainer">
          {
            cards.map((card, index) =>
              index % 2 === 0 ? (
                <div className="rightImage mb-5" key={"features-" + index}>
                  <div className="cardTitle hideOnMd mb-3">{card.title}</div>
                  <div className="featuresDescription orderText">
                    <div>
                      <div className="cardTitle showOnMd">{card.title}</div>
                      <div className="cardSubTitle">{card.subTitle}</div>
                    </div>
                  </div>
                  <div className="orderImage">
                    <img src={card.imageURL} className="w-100" alt=""/>
                  </div>
                </div>
              ) : (
                <div className="leftImage mb-5" key={"features-" + index}>
                  <div className="cardTitle hideOnMd mb-3">{card.title}</div>
                  <div className="orderImage">
                    <img src={card.imageURL} className="w-100" alt=""/>
                  </div>
                  <div className="featuresDescription orderText">
                    <div>
                      <div className="cardTitle showOnMd">{card.title}</div>
                      <div className="cardSubTitle">{card.subTitle}</div>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
      <div className="preFooterCTAContainer">
        <div className="title">Maximize your
          workplace {page === "Home" ? "ROI":page}
        </div>
        <div className="CTAWrapper mt-4">
          <button className="demoCTA showOnMd" onClick={() => demoClick()}>Request a demo</button>
          <a className="demoCTA hideOnMd" href="https://v5uyd32e1lw.typeform.com/to/ZhBatJna" target="_blank"
             rel="noopener noreferrer">Request a demo</a>
        </div>
      </div>
    </div>
  )
}
export default Features
