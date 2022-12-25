import React from "react";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import GradientLinkButton from "./GradientLinkButton";
import ImageSlider from "./ImageSlider";
import blogify from '../assets/blogify.png'

const images = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    title: "beach",
  },
  {
    id: 1,
    url: blogify,
    title: "boat",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    title: "forest",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1431411207774-da3c7311b5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "city",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
    title: "italy",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Paper
    id='projects'
      sx={{
        scrollMarginTop: '175px',
        backgroundColor: "#1A2027",
        color: "white",
        p: 2,
        borderRadius: "20px 0px",
        m: 1,
        boxShadow:
          "0px 3px 1px -2px rgba(19,173,199,1),0px 2px 2px 0px rgba(105,120,209,1),0px 1px 5px 0px rgba(148,93,214,1)",
      }}
    >
      {/* <CardMedia
        sx={{ borderRadius: 2, margin: "10px 0px" }}
        component="img"
        image={project.img}
        alt={project.info}
      /> */}

      <ImageSlider images={images}/>
      <Typography align="center" variant="h5">{project.name}</Typography>
      <Box  sx={{display: 'flex', justifyContent: 'center'}}>
      <Divider sx={{height: 2, width:'50%', background: 'linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)'}}/>
      </Box>
      <Typography sx={{px:4, py:2}}>{project.info}</Typography>
      <GradientLinkButton
        bg="linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)"
        link={project.link}
        target='_blank'
        rel="noreferrer"
      >
        Look it up
      </GradientLinkButton>
    </Paper>
  );
};

export default ProjectCard;
