import React, {useEffect} from 'react'
import Features from "../../components/new/Features";
import OtherHero from "../../components/new/OtherHero";
import NewOtherHero from "../../components/new/NewOtherHero";
import NewFeatures from "../../components/new/NewFeatures";
import NewProductivityPreFooter from "../../components/new/NewProductivityPreFooter";
import NewWorkPreFooter from "../../components/new/NewWorkPreFooter";
const heroCard = {
    title: "Say hello to improved work experience",
    subTitle: "Make your work life productive through effective meetings & one-on-ones.",
    imageURL: "/assets/images/work-hero.png",
    lqImageURL: "/assets/images/work-hero-low.png"
}
const cards = [
    {
        title: "Make meetings meaningful",
        subTitle:
            "Simplified 1-on-1 meeting management is now only a few clicks away. Quick start with the existing meeting templates, connect your goals and track all actionable items.",
        imageURL: "/assets/images/work-why-tp1.png"
    },
    {
        title: "Plan & align your goals",
        subTitle: "Do impactful 1-on-1s with your team members with our easy to use goal management tool. Ensure alignment and set the right expectations.",
        imageURL: "/assets/images/work-why-tp2.png"
    },
    {
        title: "Track growth areas",
        subTitle: "A space for managers to identify and track their team members' growth areas. Get regular nudges to ensure growth areas are achieved.",
        imageURL: "/assets/images/work-why-tp3.png"
    },
    {
        title: "Give real-time feedback",
        subTitle: "Say hello to the all new feedback process. Now no need to wait for the old school yearly review cycle.",
        imageURL: "/assets/images/work-why-tp4.png",

    },
    {
        title: "View actionable insights",
        subTitle: "Make the most of your 1-on-1 meetings by using quantifiable data like work score, goal completion speed, etc.",
        imageURL: "/assets/images/work-why-tp5.png",

    },
    {
        title: "Tools & integrations",
        subTitle: "Integrate with Jira, Slack, Trello and other workflow tools that you use. Easily connect your HRIS systems to onboard and off-board team members on our platform. ",
        imageURL: "/assets/images/work-why-tp6.png",

    }]

const preFooterImages = [
    {imageUrl: '/assets/images/activity-pf-1.png',name: 'Walking'},
    {imageUrl: '/assets/images/activity-pf-2.png',name: 'Meditation'},
    {imageUrl:'/assets/images/activity-pf-3.png',name: 'Brain-games'},
    {imageUrl:'/assets/images/activity-pf-4.png', name: 'Workout'},
    {imageUrl:'/assets/images/activity-pf-5.png',name: 'Dance-fitness'}
]
const clientsImgURL = "/assets/images/clients.png"
const Work = (props) => {
    const {openTypeForm} = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NewOtherHero demoClick={openTypeForm} card={heroCard} page="Work"/>
            <NewFeatures demoClick={openTypeForm} cards={cards} clientImageURL={clientsImgURL} page="Work"/>
            <NewWorkPreFooter demoClick={openTypeForm} />
        </>
    )
}

export default Work
