import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoSVG from "../utils/logo/LogoSVG";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const NavbarElementItem = styled.li`
  text-transform: lowercase;
  border-image-slice: 1;
  cursor: pointer;
`;

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

const NavbarElementLogo = styled(NavLink)`
  text-decoration: none;
  color: #1f1f1f;
`;

const NavbarElement = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <NavbarElementItem>
      {props.navbarLink.type === "link" ? (
        <NavbarElementLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={props.navbarLink.path}
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
