import { Navbar } from "../components/ui/Navbar";
import { AboutTitle } from "../components/ui/AboutTitle";
import { IntroTitle } from "../components/ui/IntroTitle";
import { Stack, Box } from "@mui/material";
import componentDiagram from "../assets/images/component-diagram.png";
import { TableDiagram } from "../components/ui/TableDiagram";
import { AccordionDiagram } from "../components/ui/AccordionDiagram";
import { Diagram } from "../components/ui/Diagram";

export const About = () => {
  return (
    <Box bgcolor={"#FFFF"}>
      {/* Navbar */}
      <Navbar />

      {/* Title & introduction */}
      <Stack
        width={{ xs: "80%", sm: "80%", md: "60%" }}
        direction={"column"}
        margin={"auto"}
        textAlign={"center"}
        my={4}
      >
        <AboutTitle>Introducing WeatherHub</AboutTitle>
        <IntroTitle>
          A simple weather forecast API app leveraging React and Material UI
          design. The goal of this app is to reinforce understanding of React's
          component-based architecture, ensuring a solid grasp of its
          fundamental concepts
        </IntroTitle>
      </Stack>

      {/* Architecture diagram */}
      <Box
        sx={{
          margin: "auto",
          width: { xs: "80%", sm: "550px", md: "700px" },
        }}
      >
        <Diagram src={componentDiagram} alt={"component-diagram"} />
      </Box>

      {/* Table diagram */}
      <Stack margin={"auto"} textAlign={"center"} direction={"column"} my={4}>
        <AboutTitle>App Features</AboutTitle>
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "60%" },
            margin: "auto",
            marginTop: "24px",
          }}
        >
          <TableDiagram />
        </Box>
      </Stack>

      {/*  Accordion  */}
      <Stack direction={"column"} textAlign={"center"}>
        <AboutTitle>Key Concepts Applied</AboutTitle>
        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            margin: "24px auto 96px auto",
          }}
        >
          <AccordionDiagram />
        </Box>
      </Stack>
    </Box>
  );
};
