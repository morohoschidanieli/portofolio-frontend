import { ThemeProvider } from "styled-components";
import AppLayout from "./Components/Layouts/AppLayout";
import { base, dark, light } from "./themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/RouteComponent/Home";
import AboutMe from "./Components/RouteComponent/AboutMe";
import Experience from "./Components/RouteComponent/Experience";
import Portofolio from "./Components/RouteComponent/Portofolio";
import Navbar from "./Components/NavbarComponents/Navbar";
import Footer from "./Components/FooterComponent/Footer";
import { useState } from "react";

const themesMap = {
  light,
  dark,
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const theme = { ...base, ...themesMap[currentTheme] };

  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
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
