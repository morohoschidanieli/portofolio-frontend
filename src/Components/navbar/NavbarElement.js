import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoSVG from "../utils/logo/LogoSVG";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const NavbarElementItem = styled.li(
  ({ theme, order }) => `
  text-transform: lowercase;
  border-image-slice: 1;
  cursor: pointer;
  order:${order.desktop};
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    order:${order.mobile};
  }
`
);

const NavbarElementLink = styled(NavLink)(
  ({ theme }) => `
  text-decoration: none;
  color: ${theme.fontColor};
  font-weight:${theme.navbarFontWeight};

  &.active {
    border-image-source: ${theme.gradientColor};
    padding-bottom: 8px;
    border-bottom: 5px solid;
    border-image-slice: 1;
  }

  &:hover {
    transition: all 0.25s ease;
    color: ${theme.fontHoverColor};
  }
`
);

const NavbarElementLogo = styled(NavLink)(
  ({ theme }) => `
  text-decoration: none;
  color: #1f1f1f;

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
