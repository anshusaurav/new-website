import React, {useEffect} from "react";
import PrivacyPolicyHero from "../../components/new/PrivacyPolicyHero";
import PrivacyPolicyMain from "../../components/new/PrivacyPolicyMain";

const PrivacyPolicy = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PrivacyPolicyHero/>
      <PrivacyPolicyMain/>
    </>
  )
}
export default PrivacyPolicy;
