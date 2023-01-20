import React, { lazy, Suspense, useState } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { Route, Routes, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import LoadingScreen from "./components/LoadingScreen.jsx";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FixedButtons from "./components/FixedButtons.jsx";

// Not found
import NotFound from "./components/404Page.jsx";

// Scenes
const HomePage = lazy(() => import("./scenes/homePage/index.jsx"));
const Services = lazy(() => import("./scenes/servicesPage/index.jsx"));
const Certifications = lazy(() =>
  import("./scenes/certificationsPage/index.jsx")
);
const Contact = lazy(() => import("./scenes/contactPage/index.jsx"));
const About = lazy(() => import("./scenes/aboutPage/index.jsx"));

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [isLoading, setIsloading] = useState(true);
  const location = useLocation();

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<LoadingScreen isLoading={isLoading} />}>
          <Navbar />
          <FixedButtons />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/vara-tjanster/badrum" element={<Services />}></Route>
            <Route path="/behorigheter" element={<Certifications />}></Route>
            <Route path="/kontakt" element={<Contact />}></Route>
            <Route path="/omoss" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;