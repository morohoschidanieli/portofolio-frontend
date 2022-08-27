import NavbarElement from "./NavbarElement";
import NavbarLayout from "../Layouts/NavbarLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const OpenNavbar = styled(FontAwesomeIcon)(
  ({ theme }) => `
  display:none;
  position: absolute;
  color:${theme.fontColor};
  font-size:${theme.navbarIconsSize};
  cursor:pointer;
  top: 17px;
  right: 17px;

  @media screen and (max-width: ${theme.breakpoints.lg})  {
    display:block;
  }`
);

const NavbarComponent = styled.nav(
  ({ theme }) => `
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    display:flex;
    height:${theme.navbarHeightOnMobile}; 
    justify-content:end;
  }`
);

const NavbarLinks = [
  {
    title: "home",
    path: "/",
    type: "link",
    order: { desktop: "1", mobile: "1" },
  },
  {
    title: "about me",
    path: "/about",
    type: "link",
    order: { desktop: "2", mobile: "2" },
  },
  {
    imageUrl: "da",
    path: "/",
    type: "logo",
    order: { desktop: "3", mobile: "5" },
  },
  {
    title: "experience",
    path: "/experience",
    type: "link",
    order: { desktop: "4", mobile: "3" },
  },
  {
    title: "portofolio",
    path: "/portofolio",
    type: "link",
    order: { desktop: "5", mobile: "4" },
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const hideNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <NavbarComponent onTouchMove={hideNavbar} onWheel={hideNavbar}>
      <NavbarLayout showNavbar={showNavbar} clickHandler={toggleNavbar}>
        {NavbarLinks.map((navbarElement, index) => {
          return (
            <NavbarElement
              clickHandler={hideNavbar}
              key={index}
              navbarLink={navbarElement}
            />
          );
        })}
      </NavbarLayout>
      <OpenNavbar onClick={toggleNavbar} icon={faBars} />
    </NavbarComponent>
  );
};

export default Navbar;
