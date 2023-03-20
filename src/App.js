import { ThemeProvider } from "styled-components";
import AppLayout from "./components/Layouts/AppLayout";
import { base, dark, light } from "./themes";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Route/Home";
import AboutMe from "./components/Route/AboutMe";
import Experience from "./components/Route/Experience";
import Portofolio from "./components/Route/Portofolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { HashRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";

const themesMap = {
  light,
  dark,
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );
  localStorage.setItem("theme", currentTheme);

  const theme = {
    ...base,
    ...themesMap[currentTheme],
  };

  const selectThemeHandler = (event) => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppLayout onSelectTheme={selectThemeHandler}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HashRouter>
        <Footer />
        <Contact />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
