import styled from "styled-components";
import H2 from "../Headings/H2";
import PortofolioLayout from "../Layouts/PortofolioLayout";
import ResumeMockup from "../../assets/images/projects/resume-mockup.png";
import BlackjackMockup from "../../assets/images/projects/brackjack-mockup.png";
import CalculatorMockup from "../../assets/images/projects/calculator-mockup.png";
import GuessMyNumberMockup from "../../assets/images/projects/guessmynumber-mockup.png";
import RandomNumberGenerator from "../../assets/images/projects/randomnumbergenerator-mockup.png";
import TicTacToeMockup from "../../assets/images/projects/tictactoe-mockup.png";
import ToDoMockup from "../../assets/images/projects/todo-mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

const Project = styled.div`
  width: 100%;
`;

const MockupProject = styled.img`
  object-fit: contain;
  width: 100%;
  padding: 50px 0px;
`;

const LiveDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-left: auto !important;
  margin-right: auto !important;
  margin: 10px;
  border: 2px solid black;
  border-radius: 25px;
  height: 30px;
  width: 178px;
  font-size: 18px;
  left: 0;
  top: 0;
`;

const LiveDemoLink = styled.a(
  ({ theme }) => `
  color: ${theme.fontColor};
  text-decoration: none;
  transition: color 0.4s;

  &:link {
    text-decoration: none;
  }

  &:hover{
    background: ${theme.gradientColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
);

const Portofolio = () => {
  const projects = [
    {
      title: "Resume",
      image: ResumeMockup,
      url: "https://aniel88.github.io/CV/",
    },
    {
      title: "Blackjack Game",
      image: BlackjackMockup,
      url: "https://aniel88.github.io/blackjack-game/",
    },
    {
      title: "Calculator in react",
      image: CalculatorMockup,
      url: "https://aniel88.github.io/calculator_react/",
    },
    {
      title: "Guess my number game",
      image: GuessMyNumberMockup,
      url: "https://aniel88.github.io/guessMyNumber/",
    },
    {
      title: "Random number generator",
      image: RandomNumberGenerator,
      url: "https://aniel88.github.io/random-number/",
    },
    {
      title: "Tic Tac Toe game",
      image: TicTacToeMockup,
      url: "https://aniel88.github.io/tictactoegame/",
    },
    {
      title: "To do application",
      image: ToDoMockup,
      url: "https://aniel88.github.io/to-do-list/",
    },
  ];

  return (
    <PortofolioLayout>
      {projects.map((project, index) => {
        return (
          <Project key={index}>
            <MockupProject src={project.image} />
            <H2>{project.title}</H2>
            <LiveDemo>
              <LiveDemoLink target="_blank" href={project.url}>
                <FontAwesomeIcon icon={faCompass} />
                &nbsp; Live Demo
              </LiveDemoLink>
            </LiveDemo>
          </Project>
        );
      })}
    </PortofolioLayout>
  );
};

export default Portofolio;