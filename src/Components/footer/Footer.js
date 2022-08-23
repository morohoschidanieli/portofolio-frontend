import styled from "styled-components";
import footerText from "../../text/footer-text";
import FooterLayout from "../layouts/FooterLayout";

const CreatedByContainer = styled.div`
  grid-row: 1/2;
`;

const CurrentYearContainer = styled.div`
  grid-row: 2/3;
`;
const Footer = () => {
  return (
    <FooterLayout>
      <CreatedByContainer>{footerText.createdBy} </CreatedByContainer>
      <CurrentYearContainer>{footerText.currentYear}</CurrentYearContainer>
    </FooterLayout>
  );
};

export default Footer;
