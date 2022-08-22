import styled from "styled-components";

const H1Component = styled.h1(
  ({ theme }) => `
  font-size: 3rem;
  text-align: left;
  margin: 0;
  color:${theme.fontColor};
`
);

const H1 = (props) => {
  return <H1Component>{props.children}</H1Component>;
};

export default H1;
