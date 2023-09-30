import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ImgWrap,
  Img,
  SocialLogo,
  ExtNavLinks
} from "./NavbarElements";

const Navbar = ({ toggle, img,
  alt}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
        <ImgWrap>
                <Img src={img} alt={alt} />
          </ImgWrap>
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="workflow"
              >
                Workflow
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="services"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                to="pricing"
              >
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <ExtNavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                href = "https://blog.shamanredteam.com/"
              >
                Blog
              </ExtNavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
