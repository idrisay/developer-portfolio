import { Box } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";



const Home = () => {
  return (
    <Box>
      <Banner />
      <HomeProjects />
    </Box>
  );
};

export default Home;
