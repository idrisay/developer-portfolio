import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";

import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <Box>
      <Banner />
      <HomeProjects />
      <Technologies />
      <AboutMe/>
    </Box>
  );
};

export default Home;
