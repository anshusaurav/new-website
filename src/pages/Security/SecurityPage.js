import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import OtherHero from "../../components/new/OtherHero";
import SecurityHero from "../../components/new/SecurityHero";
import SecurityMain from "../../components/new/SecurityMain";
import SecurityAxis from "../../components/new/SecurityAxis";

const heroCard = {
  title: "Trust & Security",
  subTitle:"At Thunderpod, we believe that security is at the heart of any best-in-class solution, which is why we" +
    " back ourselves with robust security and privacy practices that help us protect and secure your business data. We understand and respect the trust you place in Thunderpod to maintain your business goals and priorities, rest assured, your security is our top priority.",
  imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/security-hero.png"
}
const cards = [{
  title: "Transparency, trust and control",
  pointers:[
    {
      title:"Identity and access management",
      subTitle: "Ensure that only the right people can access your company’s information in Thunderpod with features" +
        " such as email verification. This is in accordance with the least privilege and the need to know principles.",
      imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-trust-1.png"
    },
    {
      title:"Data protection",
      subTitle: "Data is encrypted in transit and at rest by default. We secure your data further with audit logs reviews.",
      imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-trust-2.png"
    },
    {
      title:"Identity and access management",
      subTitle: "Inclusive and transparent governance and risk-management capabilities that are flexible enough to meet your organization’s needs, no matter what they are.",
      imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-trust-3.png"
    },
  ]
}, {
  title: "Best-in-class application security",
  pointers:[
    {
      title:"Identity and access controls",
      subTitle: "We offer email verification that lets users authenticate themselves.",
      imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-class-1.png"
    },
    {
      title:"Data encryption",
      subTitle: "All communication is secured by TLS 1.2 or higher encryption, by default. We encrypt all the customer data at rest using industry standard AES256 algorithms. We also store sensitive content as hashed values to further protect your data.",
      imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-class-2.png"
    },
    {
      title:"Data retention and disposal",
      subTitle: "We retain some customer and usage data in order to fulfill statutory and regulatory requirements, and to meet operational needs. We encrypt and store this data in a database for as long as organizations are valid customers. When customers unsubscribe, their data is completely deleted in accordance with retention policies.",
      imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-class-3.png"
    },
  ]
}
,
  {
    title: "Security at every layer at Thunderpod",
    pointers:[
      {
        title:"Security team",
        subTitle: "Our dedicated security team approaches security holistically based on industry best practices and aligned to a common controls framework. Security threats are prevented using our detections program, secure software development practices, and industry-accepted operational practices.",
        imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-security-1.png"
      },
      {
        title:"Effective vulnerability management",
        subTitle: "We identify possible security vulnerabilities through penetration tests to ensure we’re constantly improving our application security. Logs are analyzed and suspected activities are immediately reported and handled as security incidents.",
        imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-security-2.png"
      },
      {
        title:"Incident management & response",
        subTitle: "We identify and close incidents with necessary actions. We will notify you of incidents that apply to you and suitable actions that you need to take.",
        imageURL: "https://gcdn.thunderpod.com/ThunderpodWebsite/pointers-security-3.png"
      },
    ]
  }]
const axisCards = [
  {
    title: 'Reliable network infrastructure',
    subTitle: 'Thunderpod uses AWS cloud infrastructure to host production environment. The data flow between' +
      ' systems is fully encrypted and is secured with several layers of firewalls. The data centers are monitored' +
      ' by 24×7 security, biometric scanning, video surveillance and are SOC 2 ( Type II) and ISO27001 certified.',
    showCTA: false
  },
  {
    title: 'Data security is our top priority',
    subTitle: 'We may update our security policy from time to time. If you have any questions about our security guidelines, or notice any vulnerabilities that you would like to report, please contact us by email: ',
    showCTA: true
  }
]
const SecurityPage = (props) => {
  const {openTypeForm} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SecurityHero demoClick={openTypeForm} card={heroCard} page="DataSecurity"/>
      <SecurityMain card={cards[0]}/>
      <SecurityAxis demoClick={openTypeForm} card={axisCards[0]}/>
      <SecurityMain card={cards[1]}/>
      <SecurityMain card={cards[2]}/>
      <SecurityAxis demoClick={openTypeForm} card={axisCards[1]}/>

    </>
  )
}

export default SecurityPage
