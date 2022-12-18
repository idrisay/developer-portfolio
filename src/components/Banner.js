import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import GradientLinkButton from "./GradientLinkButton";

const Banner = () => {
  return (
    <Container maxWidth="lg" sx={{m:2}}>
      <Typography variant="h3" component="h2">
        FrontEnd Developer
      </Typography>
      <Typography sx={{ m: 2, color: '#BCBCBC' }}>
        I am a web/mobile developer.My objective is simply to be the best
        web/mobile developer that I can be and to contribute to the technology
        industry all that I know and can do.You can also check my GitHub
        repository.
      </Typography>
      <GradientLinkButton
      sx={{
       
      }}
        bg="linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)"
        link="mailto:idrisayyildiz24@gmail.com"
      >
        Contact Me
      </GradientLinkButton>
    </Container>
  );
};

export default Banner;
