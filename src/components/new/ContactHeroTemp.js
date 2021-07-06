import React from "react"
import "./ContactHeroTemp.scss"
import {faEnvelopeOpen, faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const contactInfoList = [
    {
        title: 'Our US office',
        subTitle: 'Thunderpod, Inc., 2261 Market Street #4350, San Francisco CA, 94114',
        icon: faMapMarkerAlt
    },
    {
        title: 'Our India office',
        subTitle: 'Bungalow no 25, Shreesh CHS, Hajuri Darga road Thane, Mumbai, Maharashtra 400604',
        icon: faMapMarkerAlt
    },
    {
        title: 'Email',
        subTitle: 'support@thunderpod.com',
        icon: faEnvelopeOpen
    },

]
const ContactHeroTemp = (props) => {
    const {card} = props;
    return (
        <div className="d-flex flex-nowrap align-items-center justify-content-center contactTempPageHero">
            <div className="pageHeroWrapper">
                <div className="heroCTAContainer mb-4">
                    <div className="">
                        <div className="heroTitle">{card.title}</div>
                        <div className="heroSubTitle">{card.subTitle}</div>
                    </div>
                </div>
                <div className="mainFormContainer mt-5">
                    <div className="formWrapper">

                        <div className="contactInfoContainer">

                            <div>
                                {
                                    contactInfoList.map((card, index) => {
                                        return (
                                            <div className="singleInfoField">
                                                <div className="contactInfoTitle">
                                                    <FontAwesomeIcon icon={card.icon}/>
                                                    <div>{card.title}</div>
                                                </div>
                                                <div>{card.subTitle}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="d-flex justify-content-center align-items-center my-3">
                                <a href="https://v5uyd32e1lw.typeform.com/to/LHIl8A7E" className="contactButton" target="_blank"
                                   rel="noopener noreferrer">Contact now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactHeroTemp
