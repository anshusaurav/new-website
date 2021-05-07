import React, {} from "react"
import "./Hero.scss"
import TypeAnimation from 'react-type-animation';
import ProgressiveImage from "react-progressive-image";
const textArray = ['Performance', 'Growth', 'Productivity'];
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
            <div className="heroTitle">Maximize&nbsp;
                <TypeAnimation
                sequence={['Performance', 2200, 'Growth', 1500, 'Productivity', 2200]}
                repeat={Infinity}
                wrapper="span"
                cursor={false}
                className="heroTitleHighlight"/>

              {/*<TransitionGroup className='d-inline-block'>*/}
              {/*  <CSSTransition*/}
              {/*    key={textIdx}*/}
              {/*    timeout={2200}*/}
              {/*    classNames="messageout"*/}
              {/*  >*/}
              {/*    <span className="heroTitleHighlight">{textThatChanges}</span>*/}
              {/*  </CSSTransition>*/}
              {/*</TransitionGroup>*/}
              <br/>of your team
            </div>
            <div className="heroSubTitle mb-4">A gamified platform to boost your remote work experience.</div>
            {/*<div className="d-flex justify-content-center justify-content-md-start">*/}
            {/*  <input type="email" className="emailInput" placeholder="Enter your work email"/>*/}
            {/*</div>*/}
            <button className="demoCTA showOnMd" onClick={() => demoClick()}>Request a demo</button>
            <a className="demoCTA hideOnMd" href="https://v5uyd32e1lw.typeform.com/to/ZhBatJna" target="_blank"
               rel="noopener noreferrer">Request a demo</a>
            {/*<div className="freeTrialInfo">*Free trial available only till May 15th, 2021</div>*/}
          </div>
        </div>
        <div className="imageContainer">
          <ProgressiveImage
            delay={3000}
            src="assets/images/home-hero.png"
            placeholder="assets/images/home-hero-low.png"
            className="w-100"
          >
            {src => <img src={src} alt="" className="w-100"/>}
          </ProgressiveImage>
          {/*<LazyLoadImage*/}
          {/*  alt=""*/}
          {/*  className="w-100"*/}
          {/*  effect="blur"*/}
          {/*  placeholderSrc="assets/images/home-hero-low.png"*/}
          {/*  src="assets/images/home-hero.png" />*/}
          {/*<img src="assets/images/home-hero.png" className="w-100" alt=""/>*/}
        </div>
      </div>
    </div>
  )
}
export default Hero
