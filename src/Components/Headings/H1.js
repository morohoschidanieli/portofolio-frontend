import styled from "styled-components";

const H1Component = styled.h1(
  ({ theme }) => `
  font-size: ${theme.fontSizes.h1.lg};
  text-align: left;
  margin: 0;
  color:${theme.fontColor};
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    text-align:center;
    margin-top: 0;
    font-size: ${theme.fontSizes.h1.md};
  }
`
);

const H1 = (props) => {
  return <H1Component>{props.children}</H1Component>;
};

export default H1;
