import styled from "styled-components";

const H1Component = styled.h1(
  ({ theme }) => `
  font-size: ${theme.fontSizes.h1.lg};
  color:${theme.fontColor};
  text-align: left;
  margin: 0;
  
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    font-size: ${theme.fontSizes.h1.md};
    text-align:center;
    margin-top: 0;
  }
`
);

const H1 = (props) => {
  return <H1Component>{props.children}</H1Component>;
};

export default H1;
