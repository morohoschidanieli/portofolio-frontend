import { ThemeProvider } from "styled-components";
import AppLayout from "./components/layouts/AppLayout";
import { base, dark, light } from "./themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/route/Home";
import AboutMe from "./components/route/AboutMe";
import Experience from "./components/route/Experience";
import Portofolio from "./components/route/Portofolio";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

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
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
