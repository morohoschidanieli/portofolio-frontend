import styled from "styled-components";

const Layout = styled.main(
  ({ theme }) => `
  margin-top: 48px;

  @media screen and (max-width: ${theme.breakpoints.lg})  {
    margin:20px;
  }
`
);

const AboutLayout = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default AboutLayout;
