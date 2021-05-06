import React, {useEffect} from 'react'
import RequestDemoHero from "../../components/new/RequestDemoHero";

const heroCard = {
  title: "Request a demo",
  subTitle: "Let us run you through Thunderpod and answer all your questions",
}

const RequestDemo = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RequestDemoHero card={heroCard} page="ContactUs"/>
    </>
  )
}
export default RequestDemo
