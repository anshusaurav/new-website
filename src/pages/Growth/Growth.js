import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import "./Growth.scss"
import OtherHero from "../../components/new/OtherHero";

const heroCard = {
  title: "Growth",
  subTitle: "Set & track areas for career development",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/growth-hero.png",
  lowImageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/growth-hero-low.png"
}
const cards = [{
  title: "Growth cards for employeesâ€™ learning",
  subTitle:
    "Empowering managers to guide & track team's skill development.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/growth-why-tp1.png"
}, {
  title: "Courses to upskill your workforce",
  subTitle: "Encourage continuous learning process in your company.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/growth-why-tp2.png"
},
  {
    title: "Interact with industry experts",
    subTitle: "Get exposure from  experienced industry experts & enthusiats to adopt best practices.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/growth-why-tp3.png"
  }]
const Growth = (props) => {
  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OtherHero demoClick={openTypeForm} card={heroCard} page="Growth"/>
      <Features demoClick={openTypeForm} cards={cards} page="Growth"/>
    </>
  )
}

export default Growth
