import React, {useEffect} from 'react'
import Hero from "../../components/new/Hero";
import Features from "../../components/new/Features";
import "./home.scss"

const cards = [{
  title: "Ensure alignment & promote transparency",
  subTitle: "A simplified goal management framework to align everyone to company's vision. Start with a to-do list and gradually convert them into OKRs.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/why-tp1.png",
  url:"/work"
}, {
  title: "Increase team's performance",
  subTitle: "Gamified platform to measure employee's work quality & speed.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/why-tp2.png",
  url:"/work"
},
  {
    title: "Employee learning & growth",
    subTitle: "Add growth areas for yourself or employee to track and develop any skill required to perform better.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/why-tp3.png",
    url:"/growth"
  },
  {
    title: "Boost employee's wellbeing",
    subTitle: "Increase productivity by promoting physical wellness & mental health. Get" +
      " access to recreational activities to reduce burn out.",
    imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/why-tp4.png",
    url:"/wellbeing"
  }]
const Home = (props) => {
  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero demoClick={openTypeForm}/>
      <Features demoClick={openTypeForm} cards={cards} page="Home"/>
    </>
  )
}

export default Home
