import styled from "styled-components";

const Layout = styled.main(
  ({ theme }) => `
  margin-top: 48px;
  display:grid;
  grid-template-columns: 1fr;
  grid-gap:90px;

  @media screen and (max-width: ${theme.breakpoints.lg})  {
    margin:20px;
    grid-template-columns: 1fr;
  }
`
);

const PortofolioLayout = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default PortofolioLayout;
