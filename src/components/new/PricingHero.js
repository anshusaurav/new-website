import React,{useState}from "react"
import "./PricingHero.scss"
import {
  faCaretDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const FirstPlan = () => {
  return (<>Performance</>)
}
const SecondPlan = () => {
  return (<>Performance <br/> + <br/> Growth</>)
}
const ThirdPlan = () => {
  return (<>Performance <br/> + <br/> Growth <br/> + <br/> Productivity</>)
}
const ForthPlan = () => {
  return (<>Growth</>)
}
const FifthPlan = () => {
  return (<>Productivity</>)
}

const pricingOptions = [
  {
    title: 'Performance',
    price: '$7',
    features: ['Goals',
      'Progress',
      'Feedback',
      'Leaderboard',
      'Insights'],
  },
  {
    title: 'Performance + Growth ',
    price: '$10',
    features: ['Goals',
      'Progress',
      'Feedback',
      'Leaderboard',
      'Insights',
      'Growth cards',
      'Courses',
      'Workshops'],
  },
  {
    title: 'Performance + Growth + Productivity',
    price: '$12',
    features: ['Goals',
      'Progress',
      'Feedback',
      'Leaderboard',
      'Insights',
      'Growth cards',
      'Courses',
      'Workshops',
      'Physical wellbeing',
      'Mental health',
      'Brain games',
      'Live shows'],
  },
  {
    title: 'Growth',
    price: '$4',
    features: [
      'Growth cards',
      'Courses',
      'Workshops'],
  },
  {
    title: 'Productivity',
    price: '$4',
    features: ['Physical wellbeing',
      'Mental health',
      'Brain games',
      'Live shows'],
  },
]
const PricingHero = (props) => {
  const {card} = props;
  const [mobilePricingState, setMobilePricingState] = useState([false, false, true,false,false])
  return (
    <div className="d-flex flex-nowrap align-items-center justify-content-center pricingPageHero">
      <div className="pageHeroWrapper px-2 px-xl-4">
        <div className="heroCTAContainer mb-4">
          <div className="">
            <div className="heroTitle">{card.title}</div>
            <div className="heroSubTitle">{card.subTitle}</div>
          </div>
        </div>
        <div className="pricingMainContainer">
          <div className="pricingOptionsWrapper">
            {
              pricingOptions.map((option, index) => {
                return (
                  <div key={"pricingOption-"+index}
                    className={classNames("pricingOption", {"pricing-order-0": index === 0}, {"pricing-order-1": index === 1},
                      {"pricing-order-2": index === 2}, {"pricing-order-3": index === 3}, {"pricing-order-4": index === 4})}
                    onClick={()=>{
                      let tempState = [...mobilePricingState];
                      tempState[index] = !tempState[index];
                      setMobilePricingState(tempState);
                    }}>
                    <div className="pricingOptionTitle">
                      {
                        index === 0 ? <FirstPlan/> : index === 1 ? <SecondPlan/> : index === 2 ?
                          <ThirdPlan/> : index === 3 ? <ForthPlan/> : <FifthPlan/>
                      }
                    </div>
                    <div className="pricingOptionMobileTitle">
                      <span>{option.title}</span>
                      <FontAwesomeIcon icon={faCaretDown} size="lg" />
                    </div>
                    <div className="priceNumberContainer">
                      <div className="pricingOptionPrice">
                        <div className="pricingInner">
                          <div>{option.price} </div>
                        </div>
                      </div>
                      {
                        index === 2 && (<span className="recommendedPrice ml-2">Recommended</span>)
                      }
                    </div>
                    <div className={classNames("pricingHelperText", {"nullHeight":!mobilePricingState[index]})}>Per person, per month,
                      billed annually
                    </div>
                    <div className={classNames("responsiveContainer", {"nullHeight":!mobilePricingState[index]})}>
                      {
                        option.features.map((feature, index) => {
                          return (
                            <div className="pricingFeature px-0 px-md-2" key={"features-"+index}>
                              <FontAwesomeIcon icon={faCheck} size="xs"/>
                              <div>{feature}</div>
                            </div>
                          )
                        })
                      }

                    <div className="d-flex justify-content-center mt-3 mt-md-5">
                      <button className="getStartedCTA showOnMd" >Get started</button>
                      <a className="getStartedCTA hideOnMd" href="https://v5uyd32e1lw.typeform.com/to/ZhBatJna" target="_blank"
                         rel="noopener noreferrer">Get Started</a>
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}
export default PricingHero
