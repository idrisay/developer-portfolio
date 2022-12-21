import { Box } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";

import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <Box>
      <Banner />
      <HomeProjects />
      <div style={{ width: "900px", margin: "auto"  }}>
        <Technologies />
      </div>
    </Box>
  );
};

export default Home;
