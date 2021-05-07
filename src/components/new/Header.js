import React, {useRef, useState} from "react"
import {withRouter} from "react-router-dom"
import "./Header.scss"
import HamburgerMenu from "react-hamburger-menu"
import classNames from "classnames";
import {
  faCaretDown, faCaretUp, faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  NavLink,
} from "reactstrap";
// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };
const Header = (props) => {
  const {demoClick} = props;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;
  //
  //   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  //   setPrevScrollPos(currentScrollPos);
  // };
  //
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);
  const toggle = () => setDropdownOpen(dropDownOpen => !dropDownOpen);

  return (
    <>
      <div className="pageHeader">
        <div className="d-flex justify-content-between pageHeaderWrapper">
          <div className="logoContainer" style={{backgroundImage: 'url("assets/images/logo.png")'}}
               onClick={() => props.history.push('/')}>
          </div>
          <div className="headerMenuWrapper">
            <div className="headerMenuContainer">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"} onMouseOver={() => {
                setDropdownOpen(true);
              }}
                        onMouseLeave={() => {
                setDropdownOpen(false);}}
              >
                <DropdownToggle className="bg-white border-0">
                  <div className="headerMenuOption">
                    Products&nbsp;
                    <FontAwesomeIcon
                      className="ml-2"
                      color="#000"
                      icon={dropdownOpen?faCaretDown:faCaretDown}
                    />
                  </div>
                </DropdownToggle>
                <DropdownMenu className="productDropdownMenu">
                  <DropdownItem className="productMenuItem" onClick={() => {
                    props.history.push('/performance')
                  }}>
                    Performance
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem className="productMenuItem" onClick={() => {
                    props.history.push('/growth')
                  }}>
                    Growth
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem className="productMenuItem" onClick={() => {
                    props.history.push('/productivity')
                  }}>
                    Productivity
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem className="productMenuItem" onClick={() => {
                    props.history.push('/analytics')
                  }}>
                    Analytics
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/*<div className="headerMenuOption">Products&nbsp;<FontAwesomeIcon icon={faCaretDown}/></div>*/}
              {/*<div  className="headerMenuOption">Solutions</div>*/}
              <div className="headerMenuOption" onClick={() => {
                props.history.push('/pricing')
              }}>Pricing
              </div>
            </div>
            <div className="headerCTAContainer">
              <button className="demoCTA" onClick={() => demoClick()}>Request a demo</button>
              <a className="signInCTA" href="https://business.thunderpod.com" target="_blank"
                 rel="noopener noreferrer">Sign in</a>
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
          {/*<div className="position-absolute navigationMobileDismiss" onClick={()=>{setHamburgerOpen(!hamburgerOpen)}}><FontAwesomeIcon className="closeMobileNav bg-white" icon={faTimesCircle}/></div>*/}
          <div className="navigationMobile">
            {/*<a className="demoCTA" href="https://v5uyd32e1lw.typeform.com/to/ZhBatJna" target="_blank"*/}
            {/*   rel="noopener noreferrer">Request a demo</a>*/}
            {/*<a className="signInCTA" href="https://business.thunderpod.com" target="_blank"*/}
            {/*   rel="noopener noreferrer">Sign in</a>*/}

            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/performance');
              setHamburgerOpen(false);
            }}>
              Performance
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/growth');
              setHamburgerOpen(false);
            }}>
              Growth
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/productivity');
              setHamburgerOpen(false);
            }}>
              Productivity
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/analytics');
              setHamburgerOpen(false);
            }}>
              Analytics
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem className="productMenuItem" onClick={() => {
              props.history.push('/pricing');
              setHamburgerOpen(false);
            }}>
              Pricing
            </DropdownItem>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(Header)
