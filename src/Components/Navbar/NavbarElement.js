import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoSVG from "../utils/logo/LogoSVG";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const NavbarElementItem = styled.li(
  ({ theme, order }) => `
  order:${order.desktop};
  text-transform: lowercase;
  border-image-slice: 1;
  cursor: pointer;
  
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    display: flex;
    justify-content: center;
    align-items: center;
    order:${order.mobile};
    height:60px;
  }
`
);

const NavbarElementLink = styled(NavLink)(
  ({ theme }) => `
  font-weight:${theme.navbarFontWeight};
  color: ${theme.fontColor};
  text-decoration: none;
  
  &.active {
    border-image-source: ${theme.gradientColor};
    padding-bottom: 8px;
    border-bottom: 5px solid;
    border-image-slice: 1;
  }

  &:hover {
    color: ${theme.fontHoverColor};
    transition: all 0.25s ease;
  }
`
);

const NavbarElementLogo = styled(NavLink)(
  ({ theme }) => `
  color: #1f1f1f;
  text-decoration: none;
 
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    display:none;
  }
`
);

const NavbarElement = (props) => {
  const themeContext = useContext(ThemeContext);

  const hideNavbar = () => {
    props.clickHandler();
  };

  return (
    <NavbarElementItem order={props.navbarLink.order}>
      {props.navbarLink.type === "link" ? (
        <NavbarElementLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={props.navbarLink.path}
          onClick={hideNavbar}
        >
          {props.navbarLink.title}
        </NavbarElementLink>
      ) : (
        <NavbarElementLogo to={props.navbarLink.path}>
          <LogoSVG
            color={themeContext.fontColor}
            width={themeContext.logoSize}
          />
        </NavbarElementLogo>
      )}
    </NavbarElementItem>
  );
};

export default NavbarElement;
