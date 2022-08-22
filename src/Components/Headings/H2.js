import styled from "styled-components";

const H2Component = styled.h2(
  ({ theme }) => `
  font-size: 2rem;
  margin: 4px 0;
  color:${theme.fontColor};
`
);

const H2 = (props) => {
  return <H2Component>{props.children}</H2Component>;
};

export default H2;
