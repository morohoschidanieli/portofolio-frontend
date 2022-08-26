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

const Project = styled.div`
  width: 100%;
`;

const MockupProject = styled.img`
  object-fit: contain;
  width: 100%;
  padding: 10px 10px 30px 10px;
`;

const LiveDemo = styled.div`
  padding: 8px;
  border: 2px solid black;
  border-radius: 25px;
  height: 48px;
  width: 178px;
`;

const LiveDemoLink = styled.a`
  color: #f8f8f8;
  transition: color 0.4s;
  text-decoration: none;

  &:link {
    text-decoration: none;
  }
`;

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
      {projects.map((project) => {
        return (
          <Project>
            <MockupProject src={project.image} />
            <H2>{project.title}</H2>
            <LiveDemo>
              <LiveDemoLink target="_blank" href={project.url}>
                Live Demo
              </LiveDemoLink>
            </LiveDemo>
          </Project>
        );
      })}
    </PortofolioLayout>
  );
};

export default Portofolio;
