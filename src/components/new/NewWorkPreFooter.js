import React, {useState} from "react"
import {Link} from "react-router-dom";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./NewWorkPreFooter.scss"

const NewWorkPreFooter = (props) => {
    const {cards} = props;
    return (
        <div className="preFooterProductivity">
            <div className="preFooterCTAContainer py-5">
                <div className="d-flex justify-content-center mb-3">
                    <div style={{maxWidth: '600px'}}>
                        <img src="/assets/images/work-pre-footer.png" className="w-100" alt="Thunderpod"/>
                    </div>
                </div>


                <div className="title mt-4 mt-sm-5">Transform your company's culture
                </div>
                <div className="CTAWrapper mt-4">
                    <a className="demoCTA" href="https://calendly.com/d/n6ff-x2mp/thunderpod-demo" target="_blank">Get a
                        demo
                    </a>
                    <a className="signInCTA" href="https://business.thunderpod.com/signup" target="_blank"
                       rel="noopener noreferrer">Try for free</a>
                </div>
            </div>
        </div>
    )
}
export default NewWorkPreFooter
