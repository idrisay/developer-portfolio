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
    img: blogify,
    images : [
      {
     
        url: "https://github.com/idrisay/developer-portfolio/raw/master/project-view-1.png",
        title: "beach",
      },
      {
       
        url: "https://github.com/idrisay/developer-portfolio/raw/master/project-view-2.png",
        title: "forest",
      },
      {
        
        url: "https://github.com/idrisay/developer-portfolio/raw/master/project-view-3.png",
        title: "city",
      }
    ]
  },
  {
    id: 2,
    name: "Exchange App",
    info: "Exchange App Info",
    link: "https://github.com/idrisay/exchange-app",
    img: blogify,
    images : [
      {
       
        url: blogify,
        title: "boat",
      },
      {
       
        url: "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
        title: "forest",
      },
      {
       
        url: "https://images.unsplash.com/photo-1431411207774-da3c7311b5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "city",
      },
      {
       
        url: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
        title: "italy",
      },
    ]
  },
  {
    id: 3,
    name: "Movie App",
    info: "Movie App Info",
    link: "https://github.com/idrisay/react-movie-app",
    img: blogify,
    images : [
      {
        
        url: "https://images.unsplash.com/photo-1431411207774-da3c7311b5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "city",
      },
      {
        
        url: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
        title: "italy",
      },
    ]
  },
  {
    id: 4,
    name: "Todo App",
    info: "Todo App",
    link: "https://github.com/idrisay/todo-app",
    img: blogify,
    images : [
      {
        url: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
        title: "italy",
      },
    ]
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
