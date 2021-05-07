import React from "react"
import "./SecurityMain.scss"

const SecurityMain = (props) =>{
  const {card} = props;
  return (
    <div className="securityMain">
      <div className="sectionTitle py-3">{card.title}</div>
      <div className="d-flex justify-content-between mt-4">
        <div className="featuresContainer">
          {
            card.pointers.map((card, index) => {
              return (
                <div className="securityPointer mb-5" key={"features-" + index}>
                  {/*<div className="cardTitle hideOnMd mb-3">{card.title}</div>*/}
                  <div className="orderImage">
                    <img src={card.imageURL} className="w-100" alt=""/>
                  </div>
                  <div className="featuresDescription orderText">
                    <div>
                      <div className="cardTitle">{card.title}</div>
                      <div className="cardSubTitle mt-1 mt-sm-3">{card.subTitle}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default SecurityMain
