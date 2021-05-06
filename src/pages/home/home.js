import React, {useEffect, useRef} from 'react'
import Header from "../../components/new/Header";
import Hero from "../../components/new/Hero";
import Features from "../../components/new/Features";
import Footer from "../../components/new/Footer";
import "./home.scss"
import {ReactTypeformEmbed} from "react-typeform-embed";

const cards = [{
  title: "Ensure alignment & promote transparency", subTitle: "A simplified goal management framework to align everyone to company's vision. Start with a to-do list and gradually convert them into OKRs", imageURL: "assets/images/why-tp1.png"
}, {
  title: "Increase team's performance",
  subTitle: "Gamified platform to measure employee's work quality & speed",
  imageURL: "assets/images/why-tp2.png"
},
  {
    title: "Employee learning & growth",
    subTitle: "Add growth areas for yourself or employee to track and develop any skill required to perform better.",
    imageURL: "assets/images/why-tp3.png"
  },
  {
    title: "Boost employee productivity",
    subTitle: "Increase productivity by promoting physical wellness & mental health. Get" +
      " access to recreational activities to reduce burn out",
    imageURL: "assets/images/why-tp4.png"
  }]
const Home = (props)=> {
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
