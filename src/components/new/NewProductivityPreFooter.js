import React, {useState} from "react"
import {Link} from "react-router-dom";
import {
    faAngleRight, faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./NewProductivityPreFooter.scss"

const activityImages = [
    {imageUrl: '/assets/images/activity-pf-1.png', name: 'Walking'},
    {imageUrl: '/assets/images/activity-pf-2.png', name: 'Meditation'},
    {imageUrl: '/assets/images/activity-pf-3.png', name: 'Brain-games'},
    {imageUrl: '/assets/images/activity-pf-4.png', name: 'Workout'},
    {imageUrl: '/assets/images/activity-pf-5.png', name: 'Dance-fitness'}
];
const challengesImages = [
    {imageUrl: '/assets/images/challenges-pf-1.png', name: 'Walking'},
    {imageUrl: '/assets/images/challenges-pf-2.png', name: 'Meditation'},
    {imageUrl: '/assets/images/challenges-pf-3.png', name: 'Brain-games'},
    {imageUrl: '/assets/images/challenges-pf-4.png', name: 'Workout'}
]
const rewardsImages = [
    {imageUrl: '/assets/images/rewards-pf-1.png', name: 'Walking'},
    {imageUrl: '/assets/images/rewards-pf-2.png', name: 'Meditation'},
    {imageUrl: '/assets/images/rewards-pf-3.png', name: 'Brain-games'},
    {imageUrl: '/assets/images/rewards-pf-4.png', name: 'Workout'},
    {imageUrl: '/assets/images/rewards-pf-5.png', name: 'Dance-fitness'}
]
const NewProductivityPreFooter = (props) => {
    const [selectedOption, setSelectedOption] = useState('Activities');
    const [imageCards, setImageCards] = useState(activityImages);
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <div className="preFooterProductivity">
            <div className="preFooterCTAContainer py-5">
                <div className="d-flex justify-content-center mb-3">
                    <div style={{width: '80px'}}>
                        <img src="/assets/images/large-logo.png" className="w-100" alt="Thunderpod"/>
                    </div>
                </div>
                <div className="preFooterOptions mb-5">
                    <div className="mb-3" style={{display: "grid", gridTemplateColumns:"auto auto", justifyContent:"center"}}>
                        <div style={{borderTopLeftRadius: 20, borderLeft: '2px dashed #916CF6', borderTop: '2px' +
                                ' dashed #916CF6', borderRight: '2px dashed #916CF6', }} className="optionsDecP position-relative">
                            <div className="position-absolute" style={{bottom: 0, left: 0, transform: "translate(-50%, 50%)", width: 10, height:10, borderRadius: "50%", backgroundColor:"#916CF6"}}></div>
                            <div className="position-absolute" style={{bottom: 0, right: 0, transform: "translate(50%, 50%)", width: 10, height:10, borderRadius: "50%", backgroundColor:"#916CF6"}}></div>
                        </div>
                        <div style={{borderTopRightRadius: 20, borderRight: '2px dashed #916CF6', borderTop: '2px' +
                                ' dashed #916CF6', }} className="optionsDecP position-relative">
                            <div className="position-absolute" style={{bottom: 0, right: 0, transform: "translate(50%, 50%)", width: 10, height:10, borderRadius: "50%", backgroundColor:"#916CF6"}}></div>
                        </div>
                    </div>
                    <div className="productivityOptionsGrid">
                        <div
                            className={"shadow bgWhite optionsCTA " + (selectedOption === "Activities" ? "lightPurple font-weight-bolder" : "darkGrey")}
                            onClick={() => {
                                setSelectedImage(0);
                                setImageCards(activityImages);
                                setSelectedOption('Activities')
                            }}>
                            Activities
                        </div>
                        <div
                            className={"shadow bgWhite optionsCTA " + (selectedOption == "Challenges" ? "lightPurple font-weight-bolder" : "darkGrey")}
                            onClick={() => {
                                setSelectedImage(0);
                                setImageCards(challengesImages)
                                setSelectedOption('Challenges')
                            }}>
                            Challenges
                        </div>
                        <div
                            className={"shadow bgWhite optionsCTA " + (selectedOption == "Rewards" ? "lightPurple font-weight-bolder" : "darkGrey")}
                            onClick={() => {
                                setSelectedImage(0);
                                setImageCards(rewardsImages)
                                setSelectedOption('Rewards')
                            }}>
                            Rewards
                        </div>
                    </div>
                </div>
                <div className="imageGrid mb-4 mb-sm-5 ">
                    {
                        imageCards.map((card, index) => {
                            return (
                                <div key={'image' + index} className="position-relative">
                                    <img src={card.imageUrl} className="w-100" alt={card.name}/>

                                </div>
                            )
                        })
                    }
                    {
                        imageCards.length < 5 &&
                        <div style={{borderRadius: 20}}
                             className="d-none d-sm-flex align-items-center justify-content-center bgWhite">
                            <div style={{color: "#FF7777", fontWeight: 500}} className="f14 p-2">
                                + many more
                            </div>
                        </div>
                    }
                </div>
                <div className="imageSlider d-sm-none p-4">
                    <div className="imageSliderGrid position-relative">
                        <div className="pointer p-1 bgWhite d-flex justify-content-center align-items-center productsNav position-absolute"  onClick={() => {
                            let tempImgIndex = selectedImage;
                            if (tempImgIndex >= 1) {
                                tempImgIndex--;
                                setSelectedImage(tempImgIndex)
                            }
                        }}
                             style={{
                            top: '50%',
                            left: '0',
                            transform: "translate(-100%, 50%)"
                        }}>
                            <FontAwesomeIcon icon={faChevronLeft}  size="md"  color={selectedImage >= 1 ? '#1F2C38' : '#434e57'}/>
                        </div>
                        <div className="pointer p-1 bgWhite d-flex justify-content-center align-items-center productsNav position-absolute"  onClick={() => {
                            let tempImgIndex = selectedImage;
                            if (tempImgIndex < imageCards.length-1) {
                                tempImgIndex++;
                                setSelectedImage(tempImgIndex)
                            }
                        }}
                        style={{
                            top: '50%',
                            right: '0',
                            transform: "translate(100%, 50%)"
                        }}>
                            <FontAwesomeIcon icon={faChevronRight}  size="md"  color={selectedImage >= 1 ? '#1F2C38' : '#434e57'}/>
                        </div>
                    {

                        imageCards.filter((card,index, arr) =>index===selectedImage).map((card, index) => {
                            return (
                                <div key={'image' + index} className="position-relative">
                                    <img src={card.imageUrl} className="w-100" alt={card.name}/>

                                </div>
                            )
                        })

                    }
                    </div>
                </div>

                <div className="title mt-4 mt-sm-5">Transform your company culture
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
export default NewProductivityPreFooter
