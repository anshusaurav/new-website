import React from "react"
import {Link} from "react-router-dom";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./NewFeatures.scss"

const NewFeatures = (props) => {
    const {cards, page, clientImageURL} = props;
    return (
        <div className="pageNewFeatures">

            <div className="clientHeading">
                Companies that trust us for their wellbeing & culture
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center my-4">
                    <div className="clientIconContainer">
                        <img src={clientImageURL} alt="" className="w-100"/>
                    </div>
                </div>
            </div>
            <div className="sectionTitle pt-4 my-5">Meet Thunderpod</div>

            <div className="d-flex justify-content-between">

                <div className="featuresContainer">
                    {
                        cards.map((card, index) =>
                            index % 2 === 0 ? (
                                <div className="rightImage mb-5" key={"features-" + index}>
                                    <div className="cardTitle hideOnMd mb-3">{card.title}</div>
                                    <div className="featuresDescription orderText">
                                        <div>
                                            <div className="cardTitle showOnMd mb-3 mb-xl-4">{card.title}</div>
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
                                            <div className="cardTitle showOnMd mb-3 mb-xl-4">{card.title}</div>
                                            <div className="cardSubTitle">{card.subTitle}</div>
                                            {
                                                page === "Home" && (
                                                    <Link
                                                        className="featureMoreCTA  d-flex align-items-center justify-content-center justify-content-md-start"
                                                        to={card.url}>More&nbsp;
                                                        <FontAwesomeIcon icon={faAngleRight}/>
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default NewFeatures
