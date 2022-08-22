import styled, { keyframes } from "styled-components";
import HomeLayout from "../Layouts/HomeLayout";
import H1 from "../Headings/H1";
import H2 from "../Headings/H2";
import ReactSelfPhoto from "../../assets/images/selfphoto1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ImageContainer = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.gradientColor};
  width: 370px;
  height: 370px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 40%);
  margin-top: -100px;
`
);

const InfoContainer = styled.div`
  margin-top: -100px;
  text-align: left;
  width: 100%;
`;

const Image = styled.img`
  height: auto;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  object-fit: fill;
`;

const GradientName = styled.span(
  ({ theme }) => `
  background: ${theme.gradientColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
);

const skake = keyframes`
 0% { transform: rotate(0deg);}
 10% { transform: rotate(14deg); }
 20% { transform: rotate(-8deg); }
 30% { transform: rotate(14deg); }
 40% { transform: rotate(-4deg); }
 50% { transform: rotate(10deg); }
 60% { transform: rotate(0deg); }
 100% { transform: rotate(0deg); }
`;

const HandMoving = styled.div`
  display: inline-block;
  animation-name: ${skake};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  -webkit-transform-origin: 70% 70%;
  transform-origin: 70% 70%;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0.8rem 0.8rem 0 0.8rem;
`;

const InfoListElement = styled.li(
  ({ theme }) => `
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.fontColor};
  font-weight:${theme.navbarFontWeight};
`
);

const InfoListEmoji = styled.span(
  ({ theme }) => `
  margin: 0 16px;
  font-size: ${theme.fontSizes.homeEmoji};
`
);

const ContactContainer = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  font-size: ${theme.fontSizes.contact};
  color: ${theme.fontColor};
  justify-content: space-evenly;
`
);

const ContactLink = styled.a(
  ({ theme }) => `
  color: ${theme.fontColor};
`
);

const Home = () => {
  const aboutMeList = [
    { emoji: "☕", description: "fueled by coffee" },
    { emoji: "🌎", description: "based in the RO, Cluj-Napoca" },
    { emoji: "💼", description: "Frontend Developer at Endava" },
    { emoji: "📧", description: "morohoschidanieliosif@gmail.com" },
  ];
  return (
    <HomeLayout>
      <ImageContainer>
        <Image src={ReactSelfPhoto} />
      </ImageContainer>
      <InfoContainer>
        <H1>
          Hi, I'm <GradientName>Daniel</GradientName>
          <HandMoving>🤚</HandMoving>
        </H1>
        <H2>I'm a Frontend Developer.</H2>
        <InfoList>
          {aboutMeList.map((aboutMeElement, index) => (
            <InfoListElement key={index}>
              <InfoListEmoji>{aboutMeElement.emoji}</InfoListEmoji>
              {aboutMeElement.description}
            </InfoListElement>
          ))}
        </InfoList>
        <ContactContainer>
          <ContactLink
            target="_blank"
            href="https://www.facebook.com/moro.danniel/"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </ContactLink>
          <ContactLink
            target="_blank"
            href="https://www.instagram.com/moro.danniel/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </ContactLink>
          <ContactLink target="_blank" href="https://github.com/aniel88">
            <FontAwesomeIcon icon={faGithub} />
          </ContactLink>
          <ContactLink
            target="_blank"
            href="https://www.linkedin.com/in/morohoschidi/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </ContactLink>
        </ContactContainer>
      </InfoContainer>
    </HomeLayout>
  );
};

export default Home;