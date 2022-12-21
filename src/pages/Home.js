import { Box } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: '50px',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: '#162950'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)"
  }
}));

const Home = () => {
  return (
    <Box>
      <Banner />
      <HomeProjects />
      <div style={{width: '400px', margin:'auto'}}>
      <BorderLinearProgress variant="determinate" value={70} />
      </div>
    </Box>
  );
};

export default Home;
