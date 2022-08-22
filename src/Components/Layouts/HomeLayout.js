import styled from "styled-components";

const HomeLayoutComponent = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const HomeLayout = (props) => {
  return <HomeLayoutComponent>{props.children}</HomeLayoutComponent>;
};

export default HomeLayout;
