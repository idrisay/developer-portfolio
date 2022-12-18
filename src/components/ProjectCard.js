import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

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
          "0px 3px 1px -2px white,0px 2px 2px 0px white,0px 1px 5px 0px white",
      }}
    >
      <Typography variant="h5">{project.name}</Typography>
      <Typography>{project.info}</Typography>
    </Paper>
  );
};

export default ProjectCard;
