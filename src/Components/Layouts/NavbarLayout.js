import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavbarLayoutComponent = styled.ul(
  ({ theme, showNavbar }) => `
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;

  @media screen and (max-width: ${theme.breakpoints.lg})  {
    display:flex;
    position:absolute;
    flex-direction:column;
    justify-content:center;
    background-color:${theme.background};
    height:100vh;
    width:100%;
    margin:0;
    padding:0 !important;
    top:0;
    left:0;
    width:100vw;
    z-index:11111;    
    transition:1s;
    transform:${showNavbar ? "none" : "translateY(-100vh)"};
  }
`
);

const CloseNavbar = styled(FontAwesomeIcon)(
  ({ theme }) => `
  display:none;
  color:${theme.fontColor};
  font-size:${theme.navbarIconsSize};
  cursor:pointer;

  @media screen and (max-width: ${theme.breakpoints.lg})  {
    display:block;
    position:absolute;
    top:16px;
    right:16px;
    z-index:111111;  
  }`
);

const NavbarLayout = (props) => {
  const toggleNavbar = () => {
    props.clickHandler();
  };

  return (
    <NavbarLayoutComponent showNavbar={props.showNavbar}>
      <CloseNavbar onClick={toggleNavbar} icon={faXmark} />
      {props.children}
    </NavbarLayoutComponent>
  );
};

export default NavbarLayout;
