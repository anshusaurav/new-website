import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import OtherHero from "../../components/new/OtherHero";
import NewOtherHero from "../../components/new/NewOtherHero";
import NewFeatures from "../../components/new/NewFeatures";
import NewProductivityPreFooter from "../../components/new/NewProductivityPreFooter";
const heroCard = {
  title: "Bond with your team beyond work",
  subTitle: "Activities that drive maximum engagement for building an awesome culture.",
  imageURL: "/assets/images/productivity-hero.png",
  lqImageURL: "assets/images/productivity-hero-low.png"
}
const cards = [
  {
    title: "One-stop destination",
    subTitle:
      "One platform for all your wellbeing needs - physical wellness, mental health, healthy habits, brain games and a lot more. ",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/productivity-why-tp1.png"
  },
  {
    title: "Break that ice",
    subTitle: "Improve team socialization through automated random pairing of employees (new and old) for interesting wellbeing challenges and games. Get large participation from team members with minimal effort.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/productivity-why-tp2.png"
  },
  {
    title: "Wellness & engagement on autopilot",
    subTitle: "Zero-touch setup from day 1. Thunderpod provides curated wellness calendars, innovative health activities and on-time engagement nudges.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/productivity-why-tp3.png"
  },
  {
    title: "Make your workplace fun",
    subTitle: "Reduce employee burnout and host Happy Hour events through Thunderpod. You take care of your employees and we take care of the logistics.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/productivity-why-tp4.png",

  },
  {
    title: "Rewards for healthy behavior",
    subTitle: "Still paying $$$ for your legacy wellbeing solution? Save through our platform and reward our employees. Choose from a list of 100+ gift options.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/productivity-why-tp5.png",

  },
  {
    title: "Workplace leaderboard & insights",
    subTitle: "Get your physical wellness and mental health related insights, challenge details, new games, leaderboard updates, and engagement statistics - all on Slack & our dashboard.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/productivity-why-tp6.png",

  }]

const preFooterImages = [
  {imageUrl: '/assets/images/activity-pf-1.png',name: 'Walking'},
  {imageUrl: '/assets/images/activity-pf-2.png',name: 'Meditation'},
  {imageUrl:'/assets/images/activity-pf-3.png',name: 'Brain-games'},
  {imageUrl:'/assets/images/activity-pf-4.png', name: 'Workout'},
  {imageUrl:'/assets/images/activity-pf-5.png',name: 'Dance-fitness'}
]
const clientsImgURL = "/assets/images/clients.png"
const Productivity = (props) => {
  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NewOtherHero demoClick={openTypeForm} card={heroCard} page="Productivity"/>
      <NewFeatures demoClick={openTypeForm} cards={cards} clientImageURL={clientsImgURL} page="Productivity"/>
      <NewProductivityPreFooter demoClick={openTypeForm}/>
    </>
  )
}

export default Productivity
