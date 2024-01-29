import styled from "styled-components";
import footerText from "../../text/footer-text";
import FooterLayout from "../Layouts/FooterLayout";
import { useEffect } from "react";
import { useState } from "react";

const CreatedByContainer = styled.div`
  grid-row: 1/2;
`;

const CurrentYearContainer = styled.div`
  grid-row: 2/3;
`;

const Footer = () => {
  const [viewsCounter, setViewsCounter] = useState("");
  console.log(process.env.REACT_APP_VIEWS_SERVER_LINK);

  useEffect(() => {
    const fetchViewsData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_VIEWS_SERVER_LINK);
        const json = await response.json();
        setViewsCounter(json.views);
      } catch (error) {
        setViewsCounter(null);
      }
    };

    fetchViewsData();
  }, []);

  return (
    <FooterLayout>
      <CreatedByContainer>{footerText.createdBy} </CreatedByContainer>
      <CurrentYearContainer>
        {footerText.currentYear}
        {viewsCounter ? " | views: " + viewsCounter : ""}
      </CurrentYearContainer>
    </FooterLayout>
  );
};

export default Footer;
