import React, {useEffect} from 'react'
import PricingHero from "../../components/new/PricingHero";
import NewPricingHero from "../../components/new/NewPricingHero";

const heroCard = {
  title: "Pricing",
  subTitle: "Choose your plan",
}

const PricingPage = (props) => {
  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NewPricingHero card={heroCard} page="Pricing" openTypeForm = {()=>openTypeForm()}/>
    </>
  )
}

export default PricingPage
