import React, {useRef, useState, useEffect } from 'react';
import {Switch, Route,withRouter} from 'react-router-dom'
import ReactPixel from 'react-facebook-pixel';
import './App.css';
import Home from '../pages/home/home'
import Performance from "../pages/performance/Performance";
import Growth from "../pages/Growth/Growth";
import Productivity from "../pages/Productivity/Productivity";
import Analytics from "../pages/Analytics/Analytics";
import ContactUs from "../pages/ContactUs/ContactUs";
import RequestDemo from "../pages/RequestDemo/RequestDemo";
import CareerPage from "../pages/Career/CareerPage";
import PricingPage from "../pages/Pricing/PricingPage";
import Header from "./new/Header";
import Footer from "./new/Footer";
import SecurityPage from "../pages/Security/SecurityPage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsAndConditions/TermsConditions";
// import CookieConsent, { Cookies } from "react-cookie-consent";
import Work from "../pages/Work/Work";
const App = (props) => {
  useEffect(()=>{
    // ReactPixel.revokeConsent();
    ReactPixel.init('194650262549882');
  },[]);
  useEffect(()=>{
    ReactPixel.track('PageView', props.location);
  },[props.location])
  return (
    <div>
      <div className="pageBody">
        <Header />
        <Switch>
          <Route exact path="/work">
            <Work/>
          </Route>
          <Route path="/wellbeing">
            <Productivity/>
          </Route>
          <Route path="/contactus">
            <ContactUs/>
          </Route>
          <Route path="/requestdemo">
            <RequestDemo />
          </Route>
          <Route path="/careers">
            <CareerPage />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
          <Route path="/datasecurity">
            <SecurityPage />
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy/>
          </Route>
          <Route path="/terms">
            <TermsConditions/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
        {/*<CookieConsent*/}
        {/*  onAccept={() => {*/}
        {/*    ReactPixel.grantConsent();*/}
        {/*    ReactPixel.track('PageView', props.location);*/}
        {/*  }}*/}
        {/*  debug={true}*/}
        {/*  enableDeclineButton*/}
        {/*  declineButtonText="Decline"*/}
        {/*  // onDecline={() => {*/}
        {/*  //   alert("nay!");*/}
        {/*  // }}*/}
        {/*>*/}
        {/*  This website uses cookies to enhance the user experience.*/}

        {/*</CookieConsent>*/}
      </div>
    </div>
  )
}
export default withRouter(App);
