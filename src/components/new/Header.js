import React, {useState} from "react"
import {withRouter} from "react-router-dom"
import "./Header.scss"
import HamburgerMenu from "react-hamburger-menu"
import classNames from "classnames";
import {
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const {demoClick} = props;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(dropDownOpen => !dropDownOpen);

  return (
    <>
      <div className="pageHeader">
        <div className="d-flex justify-content-between pageHeaderWrapper">
          <div className="logoContainer" style={{backgroundImage: 'url("https://gcdn.thunderpod.com/ThunderpodWebsite/logo.png")'}}
               onClick={() => props.history.push('/')}>
          </div>
          <div className="headerMenuWrapper">
            <div className="headerMenuContainer">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"} onMouseOver={() => {
                setDropdownOpen(true);
              }}
                        onMouseLeave={() => {
                          setDropdownOpen(false);
                        }}
              >
                <DropdownToggle className="bg-white border-0">
                  <div className="headerMenuOption">
                    Products&nbsp;
                    <FontAwesomeIcon
                      className="ml-2"
                      color="#000"
                      icon={dropdownOpen ? faCaretDown : faCaretDown}
                    />
                  </div>
                </DropdownToggle>
                <DropdownMenu className="productDropdownMenu px-2">
                  <DropdownItem className="productMenuItem d-flex align-items-center font-weight-600" onClick={() => {
                    props.history.push('/work')
                  }}>
                    <img src="/assets/images/work-icon-sm.png" style={{width: 18, height: "auto"}} className="mr-2"/>Work
                  </DropdownItem>
                  <DropdownItem divider className="mx-2"/>
                  <DropdownItem className="productMenuItem d-flex align-items-center font-weight-600" onClick={() => {
                    props.history.push('/wellbeing')
                  }}>
                      <img src="/assets/images/wellbeing-icon-sm.png" style={{width: 18, height: "auto"}} className="mr-2"/>Wellbeing
                  </DropdownItem>
                  <div className="topArrow"></div>
                </DropdownMenu>
              </Dropdown>
              <div className="headerMenuOption" onClick={() => {
                props.history.push('/pricing')
              }}>Pricing
              </div>
            </div>
            <div className="headerCTAContainer">
              <a className="simplePurpleCTA" href="https://business.thunderpod.com/signin" target="_blank"
                 rel="noopener noreferrer">Sign in</a>

              <a className="demoCTA" href="https://calendly.com/d/n6ff-x2mp/thunderpod-demo" target="_blank">Get a demo</a>
              <a className="signInCTA d-flex align-items-center" href="https://business.thunderpod.com/signup" target="_blank"
                 rel="noopener noreferrer">Try for free</a>
            </div>
          </div>
           <HamburgerMenu className="showOnMd hamburgerMenu"
                         isOpen={hamburgerOpen}
                         menuClicked={() => {
                           setHamburgerOpen(!hamburgerOpen)
                         }}
                         width={18}
                         height={15}
                         strokeWidth={1}
                         rotate={0}
                         color='black'
                         borderRadius={0}
                         animationDuration={0.5}
          />
        </div>
      </div>
      <div className={classNames("navigationMobileWrap", {"mobileNavOpen": hamburgerOpen})}>
        <div className="navigationMobileContainer">
           <div className="navigationMobile">

            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/work');
              setHamburgerOpen(false);
            }}>
              Work
            </DropdownItem>
            <DropdownItem divider className="mx-3"/>

            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/wellbeing');
              setHamburgerOpen(false);
            }}>
              Wellbeing
            </DropdownItem>
            <DropdownItem divider className="mx-2"/>
            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/pricing');
              setHamburgerOpen(false);
            }}>
              Pricing
            </DropdownItem>
            <DropdownItem divider className="mx-2"/>
            <DropdownItem tag="a" href="https://business.thunderpod.com/signup" className="productMenuItem" target="_blank" rel="noopener noreferrer" onClick={() => {
              setHamburgerOpen(false);
            }}>
              Try for free
            </DropdownItem>
            <DropdownItem divider className="mx-2"/>
            <DropdownItem tag="a" href="https://calendly.com/d/n6ff-x2mp/thunderpod-demo" className="productMenuItem" target="_blank" rel="noopener noreferrer" onClick={() => {
              setHamburgerOpen(false);
            }}>
              Get a demo
            </DropdownItem>
            <DropdownItem divider className="mx-2"/>
            <DropdownItem tag="a" href="https://business.thunderpod.com/signin" className="productMenuItem" target="_blank" rel="noopener noreferrer" onClick={() => {
              setHamburgerOpen(false);
            }}>
              Sign in
            </DropdownItem>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(Header)
