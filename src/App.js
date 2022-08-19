import styled, { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/RouteComponent/Home";
import AboutMe from "./Components/RouteComponent/AboutMe";
import Experience from "./Components/RouteComponent/Experience";
import Portofolio from "./Components/RouteComponent/Portofolio";
import Navbar from "./Components/Navbar";

const BaseLayout = styled.div`
  background-color: ${(props) => props.theme.layoutBackgroundColor};
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const LayoutGrid = styled.div`
  display: grid;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  text-align: center;
  grid-template-rows: 60px 1fr 60px;
  background-color: ${(props) => props.theme.fontColor};
  max-width: 1200px;
`;

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BaseLayout>
        <LayoutGrid>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/portofolio" element={<Portofolio />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </LayoutGrid>
      </BaseLayout>
    </ThemeProvider>
  );
};

export default App;
