import { Link } from "@mui/material";
import React from "react";

const GradientLinkButton = ({ children, link, bg, sx }) => {
  return (
    <Link
      sx={{
        m: 2,
        display: 'inline-block',
        py: 1,
        px: 4,
        fontWeight: 'bold',
        ...sx,
        borderRadius: "40px",
        background: bg,
      }}
      href={link}
      color="inherit"
    >
      {children}
    </Link>
  );
};

export default GradientLinkButton;
