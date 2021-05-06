import React, {useEffect} from 'react'
import CareersHero from "../../components/new/CareersHero";

const heroCard = {
  title: "Careers",
  subTitle: "We might have just what you are looking for.",
}

const CareerPage = (props) => {

  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CareersHero demoClick={openTypeForm} card={heroCard} page="Careers"/>
    </>
  )
}

export default CareerPage
