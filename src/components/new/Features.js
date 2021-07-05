import React, {useState} from "react"
import {Link} from "react-router-dom";
import {
    faAngleRight,
    faArrowLeft,
    faArrowRight,
    faCaretRight,
    faChevronLeft,
    faChevronRight,
    faLongArrowAltLeft,
    faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Features.scss"

const platformCards = [{
    title: "Work",
    icon: "/assets/images/work-icon.png",
    description: "Make 1-on-1 & meetings effective by connecting it to your goals, growth areas, feedback & insights.",
    url: "/work"
}, {
    title: "Wellbeing",
    icon: "/assets/images/wellbeing-icon.png",
    description: "Improve wellbeing and engagement between teams with ice-breakers & team bonding activities.",
    url: "/wellbeing"
}]
const integrations = [
    {
        category: 'HRIS',
        count: 3,
        data: [
            {name: 'ADP', icon: '/assets/images/adp-hris.png'},
            {name: 'Paylocity', icon: '/assets/images/paylocity-hris.png'},
            {name: 'Gusto', icon: '/assets/images/gusto-hris.png'}
        ]
    },
    {
        category: 'Collaboration',
        count: 2,
        data: [
            {name: 'Slack', icon: '/assets/images/slack-collaboration.png'},
            {name: 'Email', icon: '/assets/images/mail-collaboration.png'}
        ]
    },
    {
        category: 'Data source',
        count: 3,
        data: [
            {name: 'Jira', icon: '/assets/images/jira-data.png'},
            {name: 'Trello', icon: '/assets/images/trello-data.png'},
            {name: 'Sheets', icon: '/assets/images/sheet-data.png'}
        ]
    }
]
const reviews = [{
    "name": "Savannah Nguyen", designation: "CEO Airtel", body: "Thunderpod saved us a boatload of money" +
        " on infrastructure in the first month we switched."
},
    {
        "name": "Kurt Marvin", designation: "CEO Slack", body: "Thunderpod was the perfect solution for our employee" +
            " experience program. It's easy for employees to opt in."
    },
    {
        "name": "Clark Valberg", designation: "CEO Invision", body: "As a largely remote company, Thunderpod helps us" +
            " strengthen personal connections and company culture"
    },
]
const indexes = [0, 1, 2];
const Features = (props) => {
    const {demoClick, cards, page} = props;
    const [reviewIndex, setReviewIndex] = useState(0)
    return (
        <div className="homeFeatures">
            <div className="pageFeatures">
                <div className="sectionTitle py-3">The Workplace Productivity Platform</div>
                <div className="sectionSubTitle pb-3">See how we empower leaders to enhance their team’s efficiency,
                    wellbeing and culture.
                </div>
                <div className="d-flex justify-content-between ">

                    <div className="featuresContainer">
                        <div className="d-flex justify-content-center my-5 py-3">
                            <div className="fixedWidthContainer my-3">
                                <div className="platformGrid">
                                    {
                                        platformCards.map(card => {
                                            return (
                                                <Link className="platformCard pointer text-decoration-none"
                                                      to={card.url}>
                                                    <div className="mb-4 platformCardIconContainer">
                                                        <img src={card.icon} className="w-100" alt={card.title}/>
                                                    </div>
                                                    <div className="platformCardTitle mb-3">{card.title}</div>
                                                    <div
                                                        className="platformCardDescription mb-4">{card.description}</div>
                                                    <div className="platformCardCTA"> Learn More&nbsp;<FontAwesomeIcon
                                                        icon={faCaretRight}/></div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="sectionSubTitle">
                            100 + organizations trust Thunderpod to maximize their workplace ROI
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="fixedWidthContainer my-3">
                                <img src='/assets/images/clients.png' alt="" className="w-100"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="preFooterCTAContainer" style={{paddingBottom: 80}}>
                <div className="title my-0 my-lg-5">Integrations
                </div>
                <div className="d-none d-lg-flex justify-content-center">
                    <div className="homeIntegrationContainer my-3">
                        <div className="relative thunderpodIntegrationIcon" style={{
                            backgroundImage: "url('/assets/images/home-integrations.png')",
                        }}>
                            <div className="f24 font-weight-500 black position-absolute"
                                 style={{left: 0, bottom: -24, transform: "translate(-40%,40px)"}}>
                                HRIS
                                <div className="mt-0">
                                    <div className="position-relative mt-3">

                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr 1fr",
                                            justifyContent: "center",
                                            gridGap: 12,
                                            top: "100%",
                                            transform: "translate(-40%,0)"
                                        }} className="position-absolute">
                                            {
                                                integrations[0].data.map(integration => {
                                                    return (
                                                        <div>
                                                            <div className="integrationIconWrapper">
                                                                <img src={integration.icon} className="w-100"/>
                                                            </div>
                                                            <div className="integrationIconLabel text-center">{integration.name}</div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="f24 font-weight-500 black position-absolute"
                                 style={{left: "50%", bottom: -24, transform: "translate(-50%,40px)"}}>
                                Collaboration
                                <div className="mt-0">
                                    <div className="position-relative mt-3">

                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            justifyContent: "center",
                                            gridGap: 12,
                                            top: "100%"
                                        }} className="position-absolute">
                                            {
                                                integrations[1].data.map(integration => {
                                                    return (
                                                        <div>
                                                            <div className="integrationIconWrapper">
                                                                <img src={integration.icon} className="w-100"/>
                                                            </div>
                                                            <div className="integrationIconLabel text-center">{integration.name}</div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="f24 font-weight-500 black position-absolute"
                                 style={{right: 0, bottom: -24, transform: "translate(50%,40px)"}}>

                                Data source
                                <div className="mt-0">
                                    <div className="position-relative mt-3">

                                        <div style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr 1fr",
                                            justifyContent: "center",
                                            gridGap: 12,
                                            top: "100%",
                                            transform: "translate(-20%,0)"
                                        }} className="position-absolute">
                                            {
                                                integrations[2].data.map(integration => {
                                                    return (
                                                        <div>
                                                            <div className="integrationIconWrapper">
                                                                <img src={integration.icon} className="w-100"/>
                                                            </div>
                                                            <div className="integrationIconLabel text-center">{integration.name}</div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none py-4 px-3 mobileIntegrationWrapper">
                    <img src="/assets/images/integrationns-mobile-home.png" className="w-100" />
                    {/*{*/}
                    {/*    integrations.map(integration =>{*/}
                    {/*        return (*/}
                    {/*            <div className="my-4">*/}
                    {/*                <div className="text-center f16 font-weight-500 mt-0 mt-lg-5 mb-4">*/}
                    {/*                    {integration.category}*/}
                    {/*                </div>*/}
                    {/*                <div className="singleTypeIntegrationGrid">*/}
                    {/*                {*/}
                    {/*                    integration.data.map(sI => {*/}
                    {/*                        return (*/}
                    {/*                            <div>*/}
                    {/*                                <div className="integrationIconWrapper">*/}
                    {/*                                    <img src={sI.icon} className="w-100" alt={sI.name}/>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="integrationIconLabel text-center my-3">{sI.name}</div>*/}
                    {/*                            </div>*/}
                    {/*                        )*/}
                    {/*                    })*/}
                    {/*                }*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
                <div className="font-weight-bold lightPurple text-center manyMoreText" >and many
                    more...
                </div>
                <div className="title mt-5 mb-4 pt-3 d-flex justify-content-center align-items-center">Maximize your workplace ROI</div>
                <div className="CTAWrapper pb-4">
                    <a className="demoCTA" href="https://calendly.com/d/n6ff-x2mp/thunderpod-demo" target="_blank">Get a
                        demo
                    </a>
                    <a className="signInCTA" href="https://business.thunderpod.com/signup" target="_blank"
                       rel="noopener noreferrer">Try for free</a>
                </div>
            </div>
            {/*<div className="pageFeatures">*/}
            {/*    <div className="sectionTitle py-3">Know what our customers think</div>*/}

            {/*    <div className="homeReviewContainer mt-5">*/}
            {/*        <div className="pointer p-1 bgLightGrey d-flex justify-content-center align-items-center reviewNav"  onClick={() => {*/}
            {/*            let tempReviewIndex = reviewIndex;*/}
            {/*            if (tempReviewIndex >= 1) {*/}
            {/*                tempReviewIndex--;*/}
            {/*                setReviewIndex(tempReviewIndex)*/}
            {/*            }*/}
            {/*        }}>*/}
            {/*        <FontAwesomeIcon icon={faChevronLeft}  size="md"  color={reviewIndex >= 1 ? '#1F2C38' : '#434e57'}/>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <div className="position-relative pt-5 px-3  pb-4 bgLightGrey"*/}
            {/*                 style={{borderRadius: 30, marginTop: 54}}>*/}
            {/*                <div className="resReviewFont font-weight-500 mb-4">*/}
            {/*                    {reviews[reviewIndex].body}*/}
            {/*                </div>*/}
            {/*                <div className="resReviewFont font-weight-bolder">*/}
            {/*                    {reviews[reviewIndex].name}*/}
            {/*                </div>*/}
            {/*                <div className="resReviewFont font-weight-500">*/}
            {/*                    {reviews[reviewIndex].designation}*/}
            {/*                </div>*/}
            {/*                <div style={{*/}
            {/*                    top: 0,*/}
            {/*                    left: "50%",*/}
            {/*                    transform: "translate(-50%,-75%)",*/}
            {/*                    zIndex: 10*/}
            {/*                }}*/}
            {/*                     className="position-absolute commentIcon">*/}
            {/*                    <img src="/assets/images/comment-icon.png" className="w-100" alt="Comments"/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="pointer p-1 bgLightGrey d-flex justify-content-center align-items-center reviewNav" onClick={() => {*/}
            {/*            let tempReviewIndex = reviewIndex;*/}
            {/*            if (tempReviewIndex < reviews.length - 1) {*/}
            {/*                tempReviewIndex++;*/}
            {/*                setReviewIndex(tempReviewIndex)*/}
            {/*            }*/}
            {/*        }}>*/}
            {/*        <FontAwesomeIcon icon={faChevronRight}  size="md"  color={reviewIndex < reviews.length - 1 ? '#1F2C38' : '#434e57'}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="d-flex justify-content-center align-items-center mt-3">*/}
            {/*        <div style={{display: "grid", gridTemplateColumns: "12px 12px 12px", gridGap: 8}}>*/}
            {/*            <div style={{width: 12, height: 12, borderRadius:"50%", backgroundColor: reviewIndex===0?'#916CF6':'#C4C4C4'}} onClick={()=>{*/}
            {/*                setReviewIndex(0)*/}
            {/*            }}></div>*/}
            {/*            <div style={{width: 12, height: 12, borderRadius:"50%", backgroundColor: reviewIndex===1?'#916CF6':'#C4C4C4'}} onClick={()=>{*/}
            {/*                setReviewIndex(1)*/}
            {/*            }}></div>*/}
            {/*            <div style={{width: 12, height: 12, borderRadius:"50%", backgroundColor: reviewIndex===2?'#916CF6':'#C4C4C4'}} onClick={()=>{*/}
            {/*                setReviewIndex(2)*/}
            {/*            }}></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="sectionTitle mt-5 mb-4 pt-3 d-flex justify-content-center align-items-center">Maximize your workplace ROI</div>*/}
            {/*    <div className="CTAWrapper pb-4">*/}
            {/*        <a className="demoCTA" href="https://calendly.com/d/n6ff-x2mp/thunderpod-demo" target="_blank">Get a*/}
            {/*            demo*/}
            {/*        </a>*/}
            {/*        <a className="signInCTA" href="https://business.thunderpod.com/signup" target="_blank"*/}
            {/*           rel="noopener noreferrer">Try for free</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}
export default Features
