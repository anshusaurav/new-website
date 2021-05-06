import React, {useEffect} from 'react'
import PricingHero from "../../components/new/PricingHero";

const heroCard = {
  title: "Pricing",
  subTitle: "Choose your plan",
}

const PricingPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PricingHero card={heroCard} page="Pricing"/>
    </>
  )
}

export default PricingPage
