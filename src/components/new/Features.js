import React, {useState, useRef, useEffect} from "react"
import {Link} from "react-router-dom";
import {useKeenSlider} from "keen-slider/react"
import {
    faCaretRight,
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
    "name": "Swaroop",
    designation: "HR, Ezetap",
    body: "Shoutout to Thunderpod for engaging our team from the past 4 months. Employees love the app and feedback has been positive"
},
    {
        "name": "Sylvester Fernandez",
        designation: "Senior Manager, Miss India Org",
        body: "Thunderpod is a blessing in disguise - the virtual walkathon organized by you has done wonders for us. All our team and senior staff members are really happy."
    },
    {
        "name": "Mamoon", designation: " Senior Sales Manager, Comviva", body: "Thunderpod helped me get back into" +
            " order after COVID. Loved the 8 week challenge and meditation activities."
    },
]
const ArrowLeft = (props) => {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg onClick={props.onClick}
             className={"arrow arrow--left" + disabled} width="39" height="21" viewBox="0 0 39 21" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8066 10.4736L3.10075 10.4736" stroke="#1F2C38" stroke-width="2" stroke-miterlimit="10"
                  stroke-linecap="round"/>
            <path d="M11.8828 19.9473L2.25245 10.7751L11.8828 1.60289" stroke="#1F2C38" stroke-width="2"
                  stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>

    )
}

const ArrowRight = (props) => {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg onClick={props.onClick}
             className={"arrow arrow--right" + disabled} width="39" height="21" viewBox="0 0 39 21" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1934 10.4736L35.8992 10.4736" stroke="#1F2C38" stroke-width="2" stroke-miterlimit="10"
                  stroke-linecap="round"/>
            <path d="M27.1172 19.9473L36.7475 10.7751L27.1172 1.60289" stroke="#1F2C38" stroke-width="2"
                  stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
    )
}

const Features = (props) => {
    const [pause, setPause] = useState(false);
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const timer = useRef()
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
        duration: 2000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 4500)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])
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
                                                    <div className="platformCardCTA mt-3"> Learn More&nbsp;
                                                        <FontAwesomeIcon
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
                                                            <div
                                                                className="integrationIconLabel text-center">{integration.name}</div>
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
                                                            <div
                                                                className="integrationIconLabel text-center">{integration.name}</div>
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
                                                            <div
                                                                className="integrationIconLabel text-center">{integration.name}</div>
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
                    <img src="/assets/images/integrationns-mobile-home.png" className="w-100"/>
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
                <div className="font-weight-bold lightPurple text-center manyMoreText">and many
                    more...
                </div>

            </div>
            <div className="pageFeatures">
                <div className="sectionTitle py-3">Know what our customers think</div>

                <div className="homeReviewContainer mt-5">
                    <div></div>
                    <div>
                        <div className="position-relative pt-4 pt-md-5 px-3 px-md-5  pb-3 pb-md-4 bgLightGrey"
                             style={{borderRadius: 30, marginTop: 54}}>
                            <div ref={sliderRef} className="keen-slider">
                                {
                                    reviews.map((review, index) => {
                                        return (
                                            <div className="keen-slider__slide" key={'review' + index}>
                                                <div className="resReviewFont font-weight-500 mb-4">
                                                    {review.body}
                                                </div>
                                                <div className="resReviewFont font-weight-bolder">
                                                    {review.name}
                                                </div>
                                                <div className="resReviewFont font-weight-500">
                                                    {review.designation}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div style={{
                                top: 0,
                                left: "50%",
                                transform: "translate(-50%,-75%)",
                                zIndex: 10
                            }}
                                 className="position-absolute commentIcon">
                                <img src="/assets/images/comment-icon.png" className="w-100" alt="Comments"/>
                            </div>
                            {slider && (
                                <>
                                    <ArrowLeft
                                        onClick={(e) => e.stopPropagation() || slider.prev()}
                                        disabled={currentSlide === 0}
                                    />
                                    <ArrowRight
                                        onClick={(e) => e.stopPropagation() || slider.next()}
                                        disabled={currentSlide === slider.details().size - 1}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div></div>
                </div>
                {slider && (
                    <div className="dots">
                        {[...Array(slider.details().size).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        slider.moveToSlideRelative(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                />
                            )
                        })}
                    </div>
                )}
                <div className="sectionTitle mt-5 mb-4 pt-3 d-flex justify-content-center align-items-center">Maximize
                    your workplace ROI
                </div>
                <div className="CTAWrapper pb-4">
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
export default Features
