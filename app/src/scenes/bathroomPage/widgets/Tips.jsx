import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spacer from "../../../components/Spacer";
import ButtonOrange from "../../../components/ButtonOrange.jsx";
import ButtonWhite from "../../../components/ButtonWhite.jsx";
import Call from "@mui/icons-material/Call";
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// Images
import tip1 from "../../../assets/carouselhome1.webp";
import tip2 from "../../../assets/carouselhome2.webp";
import tip3 from "../../../assets/carouselhome3.webp";
import tip4 from "../../../assets/carouselhome4.webp";
import tip5 from "../../../assets/collage-image-1.png";
import tip6 from "../../../assets/collage-image-2.png";
import tip7 from "../../../assets/collage-image-4.png";
import tip8 from "../../../assets/collage-image-5.png";
import tip9 from "../../../assets/collage-image-6.png";
import tip10 from "../../../assets/contact-background.png";

// const tip1 =
//   "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome1.webp";

export default function TipsCarousel() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [selected, setSelected] = useState(tipsData[0]);
  const [direction, setDirection] = useState(null);

  const controlButton = {
    height: "40px",
    minWidth: "unset",
    width: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: theme.palette.primary[500],
    border: " 1px solid rgba(29, 29, 27, 0.3)",
    boxShadow: "0px 10px 40px rgba(193, 102, 45, 0.5)",
  };

  const handleNext = () => {
    const nextIndex = selected.id + 1;
    if (nextIndex <= tipsData.length) {
      setDirection("next");
      setSelected(tipsData[nextIndex - 1]);
    } else {
      setSelected(tipsData[0]); // loop back to the first item
      setDirection("next");
    }
  };

  const handlePrev = () => {
    const prevIndex = selected.id - 1;
    if (prevIndex >= 1) {
      setDirection("prev");
      setSelected(tipsData[prevIndex - 1]);
    } else {
      setSelected(tipsData[tipsData.length - 1]); // loop back to the last item
      setDirection("prev");
    }
  };

  return (
    <Box>
      <Box className="container">
        {/* Title section */}
        <Box className="row">
          <Box className="col-12" textAlign="center">
            <Typography variant="h4" className="title-font" mb="3rem">
              10 Tips Inför Din Badrumsrenovering
            </Typography>
            <Box className="flex-centerd-justify" mb="4rem">
              <Typography
                variant="body1"
                className="body-paragraph"
                style={{
                  width: smallScreen || mdScreen ? "100%" : "70%",
                  textAlign: "center",
                }}
              >
                Den som äger ett hus eller en lägenhet i Stockholm behöver lägga
                tid och pengar för att renovera sin bostad. En av de vanligaste,
                och roligaste rummen att renovera enligt oss är såklart badrum!
              </Typography>
            </Box>
            <hr />
          </Box>
        </Box>
      </Box>
      <Box className="wrapper" position="relative">
        {/* Controls */}
        {!smallScreen && (
          <Box sx={absoluteBox}>
            <Box sx={absolutePrev}>
              <Button
                variant="contained"
                onClick={handlePrev}
                sx={controlButton}
              >
                <span>
                  <ArrowBackIosNewIcon />
                </span>
              </Button>
            </Box>
            <Box sx={absoluteNext}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={controlButton}
              >
                <span>
                  <ArrowForwardIosIcon />
                </span>
              </Button>
            </Box>
          </Box>
        )}
        <Spacer />
        <Box className="container" height="fit-content" overflow="hidden">
          <AnimatePresence mode="wait">
            {/* Carousel */}
            {selected &&
              /* Desktop Carousel */
              (!smallScreen ? (
                <motion.div
                  className="row"
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: "0%",
                    transition: { duration: 0.5, type: "spring", bounce: 0.25 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                  {/* Text Box */}
                  <motion.div
                    className="col-12 col-lg-6"
                    style={{
                      padding:
                        selected.id % 2 === 0 ? "0 0 0 3rem" : "0 3rem 0 0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{ color: theme.palette.primary[500] }}
                      className="title-font"
                    >
                      {selected.id}
                    </span>
                    <Typography variant="h5" className="title-font">
                      {selected.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="body-paragraph"
                      sx={{ marginTop: "1rem" }}
                    >
                      {selected.paragraph}
                    </Typography>
                    <Box mt="2rem">
                      <ButtonOrange
                        buttonText="Skriv till oss"
                        aria="Klicka för att komma till kontakta oss"
                        ariaAtag="Länk till kontakt sidan"
                        href="kontakt"
                      />
                      <ButtonWhite
                        icon={<Call sx={{ marginRight: "5px" }} />}
                        buttonText="08-33 36 63"
                        aria="Klicka för att ringa BOB VÅTRUMSRENOVERING"
                        ariaAtag="Länk med företagets telefonnummer"
                        href="tel:08-333663"
                      />
                    </Box>
                  </motion.div>
                  {/* Image Box */}

                  <motion.div
                    className={`col-12 col-lg-6 ${
                      selected.id % 2 === 0 ? "order-first" : "order-last"
                    }`}
                  >
                    <img
                      src={selected.image}
                      alt={selected.title}
                      style={{
                        width: "100%",
                        height: "450px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                /* Mobile Carousel */
                <motion.div
                  className="row"
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: "0%",
                    transition: { duration: 0.5, type: "spring", bounce: 0.25 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                  <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(event, info) => {
                          const { point } = info;
                          if (point.x < -100) {
                            handleNext();
                          } else if (point.x > 100) {
                            handlePrev();
                          }
                        }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="col-12"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "2rem"
                    }}
                  >
                    <Card sx={{ width: "100%", boxShadow: "5px 5px 40px rgb(0 0 0 / 30%)", }}>
                      <CardMedia
                        component="img"
                        title="swipea för att se fler tips"
                        alt={selected.title}
                        height="300"
                        dragable="false"
                        image={selected.image}
                      />
                      <CardContent>
                        <Typography gutterBottom className="subtitle-font" variant="h5">
                          {selected.title}
                        </Typography>
                        <Typography variant="body1" className="body-paragraph" color={theme.palette.grey[600]}>
                          {selected.paragraph}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <a style={{ textDecoration: "none"}} href="#kontakt"><Button size="small" sx={{ color: theme.palette.primary[500] }} className="button-text">Tidigare Projekt</Button></a>
                        <Button size="small" sx={{ color: theme.palette.grey[900] }} className="button-text">Kontakta oss</Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
          <Box
            className="row"
            mt="2rem"
            justifyContent="center"
            sx={{
              position: smallScreen ? "absolute" : "relative",
              top: smallScreen ? "0" : "unset",
              right: "15px",
            }}
          >
            {tipsData.map((item, index) => (
              <span
                key={index}
                style={{
                  height: ".2rem",
                  width:
                    selected.id === item.id
                      ? smallScreen
                        ? "2rem"
                        : "5rem"
                      : smallScreen
                      ? "1rem"
                      : "2rem",
                  margin: smallScreen ? ".2rem" : ".4rem",
                  backgroundColor:
                    selected.id === item.id
                      ? theme.palette.primary[500]
                      : theme.palette.primary[100],
                }}
              ></span>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const tipsData = [
  {
    id: 1,
    number: "",
    image: tip1,
    title:
      "Bestäm dig för hur mycket pengar du kan avsätta för en badrumsrenovering",
    paragraph:
      "Det finns oändligt många saker man kan göra när man vill renovera badrum. Men plånboken räcker inte till allt. Det är viktigt att man innan man tar kontakt med en hantverkare bestämmer sig för hur mycket pengar man är beredd att lägga.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 2,
    number: "",
    image: tip2,
    title: "Leta upp en erfaren hantverkare!",
    paragraph:
      "En vanlig miss när man ska renovera sitt badrum är att man skickar ut en bred offert till en massa hantverkare. Det är inte alltid en bra idé. Av flera skäl. Risken att skicka ut en allt för bred offert är att man får in en massa anbud och så tar man det billigaste. Risken är då att man väljer en hantverkare som inte är särskilt erfaren och som sedan gör ett sämre jobb och använder dåligt material. Gör en ordentlig research och se till att anlita en bra fackman.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 3,
    number: "",
    image: tip3,
    title: "Mät upp ditt badrum och gör en ritning.",
    paragraph:
      "När du väl har hittat en bra hantverkare i Stockholm för en badrumsrenovering så måste du se till att mäta upp ditt badrum så att hantverkaren har möjlighet att bilda sig en uppfattning av badrummet som han eller hon ska renovera.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 4,
    number: "",
    image: tip4,
    title: "Ta inspiration från andra badrumsrenoveringar.",
    paragraph:
      "Det kan vara svårt att veta exakt hur man vill ha sitt badrum. Det bästa sättet att få inspiration till hur en badrumsrenovering kan göras är att titta på tex. pintrest eller instagram. De finns 1000 olika sätt att renovera badrummet på och det är bara fantasin som sätter stopp för att få just ditt dröm badrum.",
  },
  {
    id: 5,
    number: "",
    image: tip5,
    title:
      "Rådgör med en hantverkare om vad som är möjligt för just ditt badrum.",
    paragraph:
      "Det kan vara svårt för en lekman att veta hur man ska renovera ett badrum och veta precis vad som är möjligt när det gäller att renovera badrum. Säkerställ därför med hantverkaren att det är möjligt att renovera badrum på det sätt som du vill.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 6,
    number: "",
    image: tip6,
    title: "Anlita bara en hantverkare som har F-skatt.",
    paragraph:
      "Om du ska kunna göra ROT-avdrag för en badrumsrenovering så behöver hantverkaren ha F-skattsedel.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 7,
    number: "",
    image: tip7,
    title: "Fundera över vilket material du vill använda.",
    paragraph:
      "Kolla med din förening om badrumsrenoveringen kräver någon form av anmälan eller bygglov. I 9 av 10 fall räcker det endast med ett mejl till ordförande där ni förklarar att ni vill renovera badrummet.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 8,
    number: "",
    image: tip8,
    title: "Bestäm vilken inredning du vill ha i badrummet.",
    paragraph:
      "Informera hantverkaren om vilken inredning du vill ha i badrummet.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 9,
    number: "",
    image: tip9,
    title: "Säkerställ att renoveringen är försäkrad.",
    paragraph:
      "Det är viktigt att du har ett fullgott försäkringsskydd när du ska renovera badrummet. Be alltid hantverkaren att skicka över sitt försäkringsbevis.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 10,
    number: "",
    image: tip10,
    title: "Säkerställ att du inte behöver bygglov.",
    paragraph:
      "Det finns oändligt många saker man kan göra när man vill renovera badrum. Men plånboken räcker inte till allt. Det är viktigt att man innan man tar kontakt med en hantverkare bestämmer sig för hur mycket pengar man är beredd att lägga.",
    link: "kontakt",
    linkText: "Kontakt",
  },
];

// Styles

const absoluteBox = {
  position: "absolute",
  top: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
  zIndex: 10
};

const absolutePrev = {
  position: "absolute",
  top: 0,
  left: "50px",
  bottom: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
};

const absoluteNext = {
  position: "absolute",
  top: 0,
  right: "50px",
  bottom: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
};
