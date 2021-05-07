import React, {useEffect} from "react";
import TermsHero from "../../components/new/TermsHero";
import TermsMain from "../../components/new/TermsMain";

const TermsConditions = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TermsHero/>
      <TermsMain/>
    </>
  )
}
export default TermsConditions;
