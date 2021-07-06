import React, {useState} from "react"
import "./NewPricingHero.scss"
import {
    faCaretDown,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {DropdownItem} from "reactstrap";

// const FirstPlan = () => {
//     return (<>Performance</>)
// }
// const SecondPlan = () => {
//     return (<>Performance <br/> + <br/> Growth</>)
// }
// const ThirdPlan = () => {
//     return (<>Performance <br/> + <br/> Growth <br/> + <br/> Productivity</>)
// }
// const ForthPlan = () => {
//     return (<>Growth</>)
// }
// const FifthPlan = () => {
//     return (<>Productivity</>)
// }

const pricingOptions = [

    {
        title: 'Work',
        icon: '/assets/images/work-icon.png',
        features: ['Create goals to align your team',
            'Make meetings and 1:1s effective',
            "Manage your team's workload",
            'Make data-driven decisions based on insights',
            "Gather real-time feedback",
            "Continuous performance measurement of your team's workload"],
    },
    {
        title: 'Wellbeing',
        icon: 'https://gcdn.thunderpod.com/ThunderpodWebsite/wellbeing-icon.png',
        features: ['Physical & mental wellness',
            'Brain games & healthy habits',
            'Ice-breakers & team bonding activities',
            'Live shows & tournaments',
            'Rewards for healthy behavior',
            'Workplace leaderboard & insights'],
    },
]
const NewPricingHero = (props) => {
    const {card, openTypeForm} = props;
    const [mobilePricingState, setMobilePricingState] = useState([true, true, true])
    return (
        <>
            <div className="pricingPageHero">
                <div className="pageHeroContainer px-2 px-xl-4">
                    <div className="heroCTAContainer mb-4">
                        <div className="">
                            <div className="heroTitle">{card.title}</div>
                            <div className="heroSubTitle mt-3">Thunderpod starts at
                                <div className="pricingTitleHighLight">$4 a month, per user.</div>
                            </div>
                            <div className="pricingDescription mt-2">
                                Tell us which services you'd like to use and we'll send a custom quote.
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <a className="quoteCTA" href="https://v5uyd32e1lw.typeform.com/to/ZhBatJna" target="_blank"
                           rel="noopener noreferrer">Get a free quote</a>
                    </div>

                </div>

            </div>
            <div className="pricingPageHero my-3" style={{background: "#fff"}}>
                <div className="pageHeroContainer px-2 px-xl-4">
                    <div className="pricingNewContainer mb-5">
                        <div className="pricingOptionsWrapper mb-5">
                            {
                                pricingOptions.map((option, index) => {
                                    return (
                                        <div key={"pricingOption-" + index}
                                             className="pricingOption"
                                            // onClick={()=>{
                                            //     let tempState = [...mobilePricingState];
                                            //     tempState[index] = !tempState[index];
                                            //     setMobilePricingState(tempState);
                                            // }}
                                        >
                                            <div className="pricingOptionIconContainer">
                                                <div className="pricingOptionIconWrapper">
                                                    <img className="w-100" src={option.icon} alt=""/>
                                                </div>
                                                <div className="pricingOptionTitle">
                                                    {
                                                        option.title
                                                    }

                                                </div>
                                            </div>
                                            <hr className="d-block"/>
                                            <div
                                                className={classNames("responsiveContainer", {"nullHeight": !mobilePricingState[index]})}>
                                                {
                                                    option.features.map((feature, index) => {
                                                        return (
                                                            <div className="pricingFeature px-0 my-3"
                                                                 key={"features-" + index}>
                                                                <FontAwesomeIcon icon={faCheck} size="xs" className="mt-2"/>
                                                                <div>{feature}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                    <div className="priceExtraContainer mt-5">
                        <div className="priceExtraTitle mt-5">
                            See Thunderpod in action
                        </div>
                        <div className="priceExtraSubtitle my-2">
                            Learn how Thunderpod can help you effortlessly onboard and manage your employees, whether
                            you have 1 employee or 1,000.
                        </div>
                        <div className="mt-3">
                            <a className="demoCTA" href="https://calendly.com/d/n6ff-x2mp/thunderpod-demo"
                               target="_blank">Get a demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewPricingHero
