import React, {} from "react"
import "./Hero.scss"
import ProgressiveImage from "react-progressive-image";
const Hero = (props) => {

  // const [textIdx, setTextIdx] = useState(0);
  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     let currentIdx = textIdx;
  //     setTextIdx(currentIdx + 1)
  //   }, 3000);
  //   return () => clearInterval(timeout);
  // })
  const {demoClick} = props;
  // let textThatChanges = textArray[textIdx % textArray.length];
  return (
    <div className="d-flex align-items-center justify-content-between pageHero">
      <div className="pageHeroWrapper">
        <div className="heroCTAContainer d-flex align-items-center">
          <div className="">
            <div className="heroTitle">Maximize productivity
              <br/>of your team
            </div>
            <div className="heroSubTitle mb-4">Improve your 1-on-1s, meetings, goal planning & team's wellbeing - all at one place.</div>
            <a className="demoCTA" href="https://business.thunderpod.com/signup" target="_blank"
               rel="noopener noreferrer">Try for free</a>
          </div>
        </div>
        <div className="imageContainer">
          <ProgressiveImage
            src="/assets/images/home-hero.png"
            className="w-100"
          >
            {src => <img src={src} alt="" className="w-100"/>}
          </ProgressiveImage>
        </div>
      </div>
    </div>
  )
}
export default Hero
