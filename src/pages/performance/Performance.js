import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import "./Performance.scss"
import OtherHero from "../../components/new/OtherHero";
const heroCard = {
  title:"Work",
  subTitle: "Set goals, measure progress and give real time feedback",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-hero.png",
  lowImageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-hero-low.png"
}
const cards = [{
  title: "Goal management",
  subTitle: "A simplified OKR & goal management framework to align everyone to company's vision.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-why-tp1.png"
}, {
  title: "Timely progress",
  subTitle:  "Track real-time progress of the goals. Know whether it is behind or on time.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-why-tp2.png"
},
  {
    title: "Feedback response",
    subTitle: " \"Give real-time feedback on every goal completion for continuous improvement of employees’ performance.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-why-tp3.png"
  },
  {
    title: "Insights",
    subTitle:"Analyze your employee’s performance to identify key areas of improvement.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-why-tp4.png"
  },
  {
    title: "Gamification & leaderboard",
    subTitle:
      "Motivate your team to perform better to be in the star performers on the leaderboard.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/performance-why-tp5.png"
  }]
const Performance = (props)=> {

  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OtherHero demoClick={openTypeForm} card={heroCard} page="Performance"/>
      <Features demoClick={openTypeForm} cards={cards} page="Performance"/>
    </>
  )
}

export default Performance
