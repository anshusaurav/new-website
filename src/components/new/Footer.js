// import React from "react"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//
// import "./Footer.scss"
// import {faFacebookF, faInstagram, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
// import {Link} from "react-router-dom";
// const performanceLinks= [{name: "Goals",url:"https://business.thunderpod.com/performance"},
//   {name: "Progress",url:"https://business.thunderpod.com/performanceProgress"},
//   {name: "Feedback",url:"https://business.thunderpod.com/performanceFeedback"},
//   {name: "Leaderboard",url:"https://business.thunderpod.com/performanceLeaderboard"},
//   {name: "Insights",url:"https://business.thunderpod.com/performanceInsights"}];
// const growthLinks= [{name: "Growth cards",url:"https://business.thunderpod.com/growth"},
//   {name: "Courses",url:"https://business.thunderpod.com/growthCourses"},
//   {name: "Workshop",url:"https://business.thunderpod.com/growthWorkshops"}];
// const productivityLinks= [{name: "Physical wellbeing",url:"https://business.thunderpod.com/physicalWellbeing"},
//   {name: "Mental health",url:"https://business.thunderpod.com/mentalHealth"},
//   {name: "Brain games",url:"https://business.thunderpod.com/brainStrength"},
//   {name: "Live shows", url:"https://business.thunderpod.com/liveShows"}];
// const companyLinks= [
//   {name: "Careers",url:"/careers"},
//   {name: "Contact Us",url:"/contactus"}];
// const Footer = (props) =>{
//   return (
//     <div className="pageFooter">
//       <div className="footerContainer">
//         <div className="footerGrid">
//           <div className="footerFirstSection">
//             <div className="logoContainer" style={{backgroundImage: 'url("assets/images/logo-white.png")'}}>
//             </div>
//             <div className="socialsWrapper mt-3">
//               <a className="socialIconContainer" href="https://www.instagram.com/thethunderpod/" target="_blank"
//                  rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faInstagram} color="#324250"/>
//               </a>
//               <a className="socialIconContainer" href="https://www.facebook.com/thethunderpod/" target="_blank"
//                  rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faFacebookF} color="#324250"/>
//               </a>
//               <a className="socialIconContainer" href="https://twitter.com/TheThunderpod" target="_blank"
//                  rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faTwitter} color="#324250"/>
//               </a>
//               <a className="socialIconContainer" href="https://www.linkedin.com/company/thunderpod" target="_blank"
//                  rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faLinkedinIn} color="#324250"/>
//               </a>
//
//             </div>
//           </div>
//           <div className="footerLinkGroup">
//             <div className="title">Performance</div>
//             {
//               performanceLinks.map(link =>(
//                 <div><a href={link.url} className="footerLink">{link.name}</a></div>
//               ))
//             }
//           </div>
//           <div className="footerLinkGroup">
//             <div className="title">Growth</div>
//             {
//               growthLinks.map(link =>(
//                 <div><a href={link.url} className="footerLink">{link.name}</a></div>
//               ))
//             }
//           </div>
//           <div className="footerLinkGroup">
//             <div className="title">Productivity</div>
//             {
//               productivityLinks.map(link =>(
//                 <div><a href={link.url} className="footerLink">{link.name}</a></div>
//               ))
//             }
//           </div>
//           <div className="footerLinkGroup">
//             <div className="title">Company</div>
//             {
//               companyLinks.map(link =>(
//                 <div><Link to={link.url} className="footerLink">{link.name}</Link></div>
//               ))
//             }
//           </div>
//         </div>
//       </div>
//       <div className="footerExtra">
//         <div className="footerExtraWrapper">
//           <div className="footerExtraLinkContainer">
//             <a href="" className="footerExtraLink">Privacy policy</a>
//             &nbsp;&nbsp;|&nbsp;&nbsp;
//             <a href="" className="footerExtraLink">Terms of service</a>
//           </div>
//           <div className="footerExtraCopyrightContainer">
//             Copyright © 2021 Thunderpod Inc. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default Footer
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import "./Footer.scss"
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const productLinks = [{name: "Performance", url: "/performance"},
  {name: "Growth", url: "/growth"},
  {name: "Productivity", url: "/productivity"},
  {name: "Analytics", url: "/analytics"},];
const companyLinks = [{name: "Careers", url: "/careers"},
  {name: "Contact us", url: "/contactus"},
  {name: "Data security", url: "/datasecurity"}];
// const productivityLinks = [{name: "Physical wellbeing", url: "https://business.thunderpod.com/physicalWellbeing"},
//   {name: "Mental health", url: "https://business.thunderpod.com/mentalHealth"},
//   {name: "Brain games", url: "https://business.thunderpod.com/brainStrength"},
//   {name: "Live shows", url: "https://business.thunderpod.com/liveShows"}];
// const companyLinks = [
//   {name: "Careers", url: "mailto:careers@thunderpod.com"},
//   {name: "Contact Us", url: "mailto:support@thunderpod.com"}];
const Footer = (props) => {
  return (
    <div className="pageFooter">
      <div className="footerContainer">
        <div className="footerGrid">
          <div className="footerFirstSection">
            <div className="logoContainer" style={{backgroundImage: 'url("assets/images/logo-white.png")'}}>
            </div>
            <div className="socialsWrapper mt-3 mt-md-0">
              <span>Follow us on</span>
              <a className="socialIconContainer" href="https://www.instagram.com/thethunderpod/" target="_blank"
                 rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} color="#324250"/>
              </a>
              <a className="socialIconContainer" href="https://www.facebook.com/thethunderpod/" target="_blank"
                 rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} color="#324250"/>
              </a>
              <a className="socialIconContainer" href="https://twitter.com/TheThunderpod" target="_blank"
                 rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} color="#324250"/>
              </a>
              <a className="socialIconContainer" href="https://www.linkedin.com/company/thunderpod" target="_blank"
                 rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} color="#324250"/>
              </a>
            </div>
          </div>
          <div className="footerSecondSection pl-0 mt-5">
            <div className="footerLinkGroup">
              <div className="title">Product</div>
              <div className="linkGroupWrapper">
                {
                  productLinks.map((link, index) => (
                    <div key={"footerLink-" + index}>
                      <Link to={link.url} className="footerLink">{link.name}</Link>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="footerLinkGroup">
              <div className="title">Company</div>
              <div className="linkGroupWrapper">
                {
                  companyLinks.map((link, index) => (
                    <div key={"footerLink-" + index}>
                      {link.name === "Contact us" ? (
                        <a className="footerLink" href="https://v5uyd32e1lw.typeform.com/to/ZhBatJna" target="_blank"
                           rel="noopener noreferrer">
                          {link.name}
                        </a>) : (
                          <Link to={link.url} className="footerLink">
                            {link.name}
                          </Link>
                        )
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          {/*  <div className="footerLinkGroup">*/}
          {/*    <div className="title">Performance</div>*/}
          {/*    {*/}
          {/*      performanceLinks.map(link => (*/}
          {/*        <div><a href={link.url} className="footerLink" target="_blank" rel="noopener noreferrer">{link.name}</a>*/}
          {/*        </div>*/}
          {/*      ))*/}
          {/*    }*/}
          {/*  </div>*/}
          {/*  <div className="footerLinkGroup">*/}
          {/*    <div className="title">Growth</div>*/}
          {/*    {*/}
          {/*      growthLinks.map(link => (*/}
          {/*        <div><a href={link.url} className="footerLink" target="_blank" rel="noopener noreferrer">{link.name}</a>*/}
          {/*        </div>*/}
          {/*      ))*/}
          {/*    }*/}
          {/*  </div>*/}
          {/*  <div className="footerLinkGroup">*/}
          {/*    <div className="title">Productivity</div>*/}
          {/*    {*/}
          {/*      productivityLinks.map(link => (*/}
          {/*        <div><a href={link.url} className="footerLink" target="_blank" rel="noopener noreferrer">{link.name}</a>*/}
          {/*        </div>*/}
          {/*      ))*/}
          {/*    }*/}
          {/*  </div>*/}
          {/*  <div className="footerLinkGroup">*/}
          {/*    <div className="title">Company</div>*/}
          {/*    {*/}
          {/*      companyLinks.map(link => (*/}
          {/*        <div><a href={link.url} className="footerLink" target="_blank" rel="noopener noreferrer">{link.name}</a>*/}
          {/*        </div>*/}
          {/*      ))*/}
          {/*    }*/}
          {/*  </div>*/}
        </div>
        <hr className="footerHR"/>
        <div className="footerExtra">
          <div className="footerExtraWrapper">
            <div className="footerExtraLinkContainer">
              <Link className="footerExtraLink" to="/privacypolicy">Privacy policy</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link className="footerExtraLink" to="/terms">Terms of service</Link>
            </div>
            <div className="footerExtraCopyrightContainer">
              © Copyright 2021. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
