import styled from "styled-components";

const NavbarLayoutComponent = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavbarLayout = (props) => {
  return <NavbarLayoutComponent>{props.children}</NavbarLayoutComponent>;
};

export default NavbarLayout;
