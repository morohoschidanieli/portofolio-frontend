import styled from "styled-components";

const H2Component = styled.h2(
  ({ theme }) => `
  font-size: ${theme.fontSizes.h2.lg};
  margin: 4px 0;
  color:${theme.fontColor};
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    text-align:center;
    margin-top: 0;
    font-size: ${theme.fontSizes.h2.md};
  }
`
);

const H2 = (props) => {
  return <H2Component>{props.children}</H2Component>;
};

export default H2;
