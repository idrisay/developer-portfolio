import React from "react";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Box } from "@mui/material";

import GradientLinkButton from "./GradientLinkButton";
import ImageSlider from "./ImageSlider";


const ProjectCard = ({ project }) => {
  return (
    <Paper
      id="projects"
      sx={{
        scrollMarginTop: "175px",
        backgroundColor: "#1A2027",
        color: "white",
        p: 2,
        borderRadius: "20px 0px",
        m: 1,
        boxShadow:
          "0px 3px 1px -2px rgba(19,173,199,1),0px 2px 2px 0px rgba(105,120,209,1),0px 1px 5px 0px rgba(148,93,214,1)",
      }}
    >
      {" "}
      <ImageSlider images={project.images} />
      <Typography align="center" variant="h5">
        {project.name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider
          sx={{
            height: 2,
            width: "50%",
            background:
              "linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)",
          }}
        />
      </Box>
      <Typography sx={{ px: 4, py: 2 }}>{project.info}</Typography>
      <GradientLinkButton
        bg="linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)"
        link={project.link}
        target="_blank"
        rel="noreferrer"
      >
        Look it up
      </GradientLinkButton>
    </Paper>
  );
};

export default ProjectCard;
