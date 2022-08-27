import styled from "styled-components";

const Layout = styled.main(
  ({ theme }) => `
  display:grid;
  grid-template-columns: 1fr;
  grid-gap:90px;
  margin-top: 48px;
  
  @media screen and (max-width: ${theme.breakpoints.lg})  {
    grid-gap:30px;
    grid-template-columns: 1fr;
    margin:20px;
  }
`
);

const PortofolioLayout = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default PortofolioLayout;
