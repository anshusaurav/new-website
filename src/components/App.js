import React, {useRef} from 'react';
import {Switch, Route} from 'react-router-dom'
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
import {ReactTypeformEmbed} from "react-typeform-embed";

const App = (props) => {
  const typeFormEmbed = useRef(null);
  const openTypeForm = () => {
    if (typeFormEmbed && typeFormEmbed.current && typeFormEmbed.current.typeform) {
      typeFormEmbed.current.typeform.open();
    }
  }
  return (
    <div>
      <div className="pageBody">
        <Header demoClick={openTypeForm}/>
        <Switch>
          <Route exact path="/performance">
            <Performance openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/growth">
            <Growth openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/productivity">
            <Productivity openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/productivity">
            <Analytics openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/contactus">
            <ContactUs openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/requestdemo">
            <RequestDemo openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/careers">
            <CareerPage openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/pricing">
            <PricingPage openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/analytics">
            <Analytics openTypeForm={() => openTypeForm()}/>
          </Route>
          <Route path="/">
            <Home openTypeForm={() => openTypeForm()}/>
          </Route>
        </Switch>
        <Footer/>
        <ReactTypeformEmbed
          popup={true}
          autoOpen={false}
          url="https://v5uyd32e1lw.typeform.com/to/ZhBatJna"
          style={{top: 100}}
          ref={typeFormEmbed}
        />
      </div>
    </div>
  )
}
export default App;
