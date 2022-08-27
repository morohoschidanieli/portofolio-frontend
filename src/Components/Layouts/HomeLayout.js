import styled from "styled-components";

const HomeLayoutComponent = styled.main(
  ({ theme }) => `
  display: grid;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
);

const HomeLayout = (props) => {
  return <HomeLayoutComponent>{props.children}</HomeLayoutComponent>;
};

export default HomeLayout;
