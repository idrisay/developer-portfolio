import React from "react";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import GradientLinkButton from "./GradientLinkButton";

const ProjectCard = ({ project }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#1A2027",
        color: "white",
        p: 2,
        borderRadius: "20px 0px",
        m: 1,
        boxShadow:
          "0px 3px 1px -2px rgba(19,173,199,1),0px 2px 2px 0px rgba(105,120,209,1),0px 1px 5px 0px rgba(148,93,214,1)",
      }}
    >
      <CardMedia
        sx={{ borderRadius: 2, margin: "10px 0px" }}
        component="img"
        image={project.img}
        alt={project.info}
      />
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
