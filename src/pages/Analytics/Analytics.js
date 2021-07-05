import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import OtherHero from "../../components/new/OtherHero";

const heroCard = {
  title: "Analytics",
  subTitle: "Make the right decisions",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/analytics-hero.png",
  lowImageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/analytics-hero-low.png"
}
const cards = [
  {
    title: "Data Intelligence to Grow Your Business",
    subTitle: "Analytics gives you a birds eye view of employees performance to help optimize your talent management" +
      " effectively for business growth.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/analytics-why-tp1.png"
  },
  {
    title: "Achieve Data-Driven Decision Making",
    subTitle:"Get estimate of the cost to achieve a goal which makes the cost-impact analysis easier.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/analytics-why-tp2.png"
  },
 ]
const Analytics = (props) => {

  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OtherHero demoClick={openTypeForm} card={heroCard} page="Analytics"/>
      <Features demoClick={openTypeForm} cards={cards} page="Analytics"/>
    </>
  )
}

export default Analytics
