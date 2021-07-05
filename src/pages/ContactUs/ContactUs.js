import React, {useEffect} from 'react'
import ContactHero from "../../components/new/ContactHero";
import ContactHeroTemp from "../../components/new/ContactHeroTemp";

const heroCard = {
  title: "Contact Us",
  subTitle: "We might have just what you are looking for.",
}

const ContactUs = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactHeroTemp card={heroCard} page="ContactUs"/>
    </>
  )
}

export default ContactUs
