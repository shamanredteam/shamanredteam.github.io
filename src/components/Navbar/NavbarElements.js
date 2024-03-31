import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { ExternalLink } from "react-external-link";

export const Nav = styled.nav`
  background: ${({ }) => ("#212228")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
display: inline-block;
@media screen and (max-width: 768px) {
  width: 100%;
}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export const ExtNavLinks = styled(ExternalLink)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #fff;
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #e61f27;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
`;

export const ImgWrap = styled.div`
  height: 100%;
  display: inline-block;
  display: flex;
  align-items: center;
  padding-block: 6px;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 18rem;
  margin: auto;
`;

export const SocialLogo = styled.p`
  color: white;
  // font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue";
  font-family: 'swz721k';
  text-al/ign: center;
  padding-top: 15px;
  padding-left: 10px;
  text-decoration: none;
  font-size: 1.0rem;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
`;