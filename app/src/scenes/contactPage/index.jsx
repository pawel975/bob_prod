import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// Components
import Contact from "../../components/Contact.jsx";
import Spacer from "../../components/Spacer.jsx";
import Intro from "../../components/Intro.jsx";
import Credits from "../../components/Credits.jsx";
import AnimatedBox from "../../animation/Animated.jsx";
// Images
const image =
  "https://storage.googleapis.com/bob-prod-images/media/assets/services-collage-2.webp";
const introMobile =
  "https://storage.googleapis.com/bob-prod-images/media/assets/intromobilecontact.webp";
const landingImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome2.webp";

export default function ContactPage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const titleFontSize = "54px";
  return (
    <Box>
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
            justifyContent: "flex-end",
            paddingBottom: "5%",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Typography
              variant="h1"
              fontWeight="bold"
              className="hero_title"
              fontSize={
                smallScreen
                  ? `clamp(32px, 4vw, ${titleFontSize})`
                  : titleFontSize
              }
              textTransform="uppercase"
              color="#E6E6E6"
            >
              Kontakt
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />

      {/* Intro contact section */}
      <AnimatedBox>
        <section id="contact-intro">
          <Box className="container">
            <Box className="row" minHeight="70vh">
              <Intro
                image={!smallScreen ? image : introMobile}
                title="Expert-hjälp Inför Din Badrumsrenovering - Kontakta Oss Idag!"
                body="Kontakta oss idag för att få svar på alla dina frågor inför din renovering. Vi erbjuder professionell rådgivning och hjälper dig att planera och genomföra din renovering på bästa sätt. Tveka inte att höra av dig till oss!"
                alt="picture of the owners"
                to="contact"
                label="Länk till kontakt formuläret"
                linkName="Ta steget"
                pageLink={true}
              />
            </Box>
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />

      <AnimatedBox>
        <section id="contact">
          <Contact />
        </section>
      </AnimatedBox>

      <Spacer />

      <section className="credits-bg">
        <Credits dark={true} />
      </section>
    </Box>
  );
}
