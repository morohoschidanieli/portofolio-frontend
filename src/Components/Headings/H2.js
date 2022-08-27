import styled from "styled-components";

const H2Component = styled.h2(
  ({ theme }) => `
  font-size: ${theme.fontSizes.h2.lg};
  color:${theme.fontColor};
  margin: 4px 0;
  
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    font-size: ${theme.fontSizes.h2.md};
    text-align:center;
    margin-top: 0;
  }
`
);

const H2 = (props) => {
  return <H2Component>{props.children}</H2Component>;
};

export default H2;
