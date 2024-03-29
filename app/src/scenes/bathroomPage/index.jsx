import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// Components
import Contact from "../../components/Contact.jsx";
import Spacer from "../../components/Spacer.jsx";
import Credits from "../../components/Credits.jsx";
import ButtonOrange from "../../components/ButtonOrange.jsx";
import Video from "../../components/Video.jsx";
import InstgramWidget from "../../components/InstagramWidget.jsx";
import Team from "../../components/Team.jsx";
// Widgets
import Intro from "./widgets/Intro.jsx";
import TipsCarousel from "./widgets/Tips.jsx";
import Planer from "./widgets/Planer.jsx";
// Animation
import AnimatedBox from "../../animation/Animated.jsx";
// Images
const landingImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/contact-background.webp";

export default function Bathroom() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const titleFontSize = "54px";
  return (
    <div style={{ minHeight: "max-content" }}>
      <Box className="landing-box">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${landingImage})`,
          }}
        ></Box>
        {/* Hero Section */}
        <Box
          className="container"
          sx={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "100px",
            justifyContent: "center",
            position: "relative",
            zIndex: "20",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Box heighth="50px" width="300px" backgroundColor="black"></Box>
          </Box>
          <AnimatedBox>
            <Box
              className="row"
              justifyContent="center"
              display="flex"
              textAlign="center"
            >
              <Box className="col-12" textAlign="center">
                <Typography
                  variant="h1"
                  className="hero_title"
                  fontSize={
                    smallScreen
                      ? `clamp(28px, 4vw, ${titleFontSize})`
                      : titleFontSize
                  }
                  sx={heroTitle}
                >
                  Badrumsrenovering?
                </Typography>
                <Typography
                  variant="body1"
                  className="body-paragraph"
                  style={{
                    color: "#fff",
                    marginTop: smallScreen ? "1rem" : "2rem",
                  }}
                >
                  Dags att renovera badrummet? Låt oss vara med och räkna. Vi
                  renoverar ett stort antal badrum och tvättstugor varje år och
                  hos oss får du ett fast pris, en tydlig och fastställd tidplan
                  och en engagerad projektledare som är med dig hela vägen från
                  start till mål. Kontakta BOB för en fri rådgivning av din
                  Badrumsrenovering i Stockholm.
                </Typography>
                <Box mt={smallScreen ? "1rem" : "2rem"}>
                  <ButtonOrange
                    aria="Klicka för att komma till kontakta oss sidan"
                    ariaAtag="Länk till kontakta oss"
                    buttonText="Kontakta oss"
                  />
                </Box>
              </Box>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />
      <AnimatedBox>
        <section id="credits">
          <Credits />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="intro">
          <Intro />
        </section>
      </AnimatedBox>
      <Spacer />
      {/* 
      Uncomment this when interview and instagram is sorted
      <AnimatedBox>
        <section id="interview">
          <Video />
        </section>
      </AnimatedBox>
      <Spacer /> */}
      {/* <AnimatedBox>
        <section id="instagram">
          <InstgramWidget />
        </section>
      </AnimatedBox>
      <Spacer /> */}
      <AnimatedBox>
        <section id="tips">
          <TipsCarousel />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="planering">
          <Box className="container">
            <Planer />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />
      {!lgScreen && <Spacer />}
      <AnimatedBox>
        <section id="team">
          <Team />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="tjanster-kontakt">
          <Contact student={true} />
          <Spacer />
        </section>
      </AnimatedBox>
    </div>
  );
}

const heroTitle = {
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#fff",
  textAlign: "center",
};
