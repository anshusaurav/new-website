import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import OtherHero from "../../components/new/OtherHero";

const heroCard = {
  title: "Productivity",
  subTitle: "Measure to improve",
  imageURL: "assets/images/productivity-hero.png",
  lowImageURL: "assets/images/productivity-hero-low.png"
}
const cards = [
  {
    title: "Physical wellbeing",
    subTitle:
      "Reduce health care cost and sick leaves by making your workforce healthier and more productive.",
    imageURL: "assets/images/productivity-why-tp1.png"
  },
  {
    title: "Mental health",
    subTitle: "Reduce employee burnout due to remote working conditions, especially in pandemic.",
    imageURL: "assets/images/productivity-why-tp2.png"
  },
  {
    title: "Brain games",
    subTitle: "Make your employees come together through mind boggling games and tournaments",
    imageURL: "assets/images/productivity-why-tp3.png"
  },
  {
    title: "Live shows",
    subTitle:"Teams that laugh together, succeed together. Book a pocket-friendly  show for your employees",
    imageURL: "assets/images/productivity-why-tp4.png",

  }]
const Productivity = (props) => {
  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <OtherHero demoClick={openTypeForm} card={heroCard} page="Productivity"/>
      <Features demoClick={openTypeForm} cards={cards} page="Productivity"/>
    </>
  )
}

export default Productivity
