import { Box } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";
import Technologies from "../components/Technologies";


const experiences = [
  {
    id: 1,
    date: "Jan 2022",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    date: "Jun 2022",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima nemo ratione quo non consequuntur deserunt quis voluptatem ex",
  },
  {
    id: 3,
    date: "Present",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus incidunt, inventore est vel nulla doloremque optio dicta. Fugit est possimus commodi nisi veniam recusandae alias similique, consectetur eaque tenetur?",
  },
  {
    id: 4,
    date: "Present",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus incidunt, inventore est vel nulla doloremque optio dicta. Fugit est possimus commodi nisi veniam recusandae alias similique, consectetur eaque tenetur?",
  },
];

const Home = () => {
  return (
    <Box>
      <Banner />
      <HomeProjects />
      <Technologies />
      <AboutMe experiences={experiences}/>
    </Box>
  );
};

export default Home;
