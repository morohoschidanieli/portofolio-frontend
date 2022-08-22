import styled from "styled-components";

const FooterLayoutComponent = styled.footer(
  ({ theme }) => `
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    text-align: center;
    align-self: center;
    font-size: ${theme.fontSizes.footer};
    color: ${theme.footerFontColor};
    font-weight:${theme.footerFontWeight};
  `
);

const FooterLayout = (props) => {
  return <FooterLayoutComponent>{props.children}</FooterLayoutComponent>;
};

export default FooterLayout;
