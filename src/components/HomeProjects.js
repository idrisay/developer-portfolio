import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import ProjectCard from "./ProjectCard";
import blogify from '../assets/blogify.png'

const projetcList = [
  {
    id: 1,
    name: "Blogify",
    info: "Blogify Info ",
    link: "https://github.com/idrisay/blogify",
    img: blogify
  },
  {
    id: 2,
    name: "Exchange App",
    info: "Exchange App Info",
    link: "https://github.com/idrisay/exchange-app",
    img: blogify
  },
  {
    id: 3,
    name: "Movie App",
    info: "Movie App Info",
    link: "https://github.com/idrisay/react-movie-app",
    img: blogify
  },
  {
    id: 4,
    name: "Todo App",
    info: "Todo App",
    link: "https://github.com/idrisay/todo-app",
    img: blogify
  },
];

const HomeProjects = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" sx={{my:2}}>
        My Projects
      </Typography>
      <Grid container spacing={6} columns={12}>
        {projetcList?.map((project) => (
        <Grid key={project.id} item xs={12} md={6}>
          <ProjectCard project={project} />
        </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProjects;
