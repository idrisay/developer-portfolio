import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import ProjectCard from "./ProjectCard";



const projetcList = [
  {
    id: 1,
    name: "Blogify",
    info: "Blogify Info ",
    Link: "https://github.com/idrisay/blogify",
  },
  {
    id: 2,
    name: "Exchange App",
    info: "Exchange App Info",
    Link: "https://github.com/idrisay/exchange-app",
  },
  {
    id: 3,
    name: "Movie App",
    info: "Movie App Info",
    Link: "https://github.com/idrisay/react-movie-app",
  },
  {
    id: 4,
    name: "Todo App",
    info: "Todo App",
    Link: "https://github.com/idrisay/todo-app",
  },
];

const HomeProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" sx={{my:2}}>
        My Projects
      </Typography>
      <Grid container rowSpacing={1}>
        {projetcList?.map((project) => (
        <Grid item xs={12} md={6}>
          <ProjectCard project={project} />
        </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProjects;
