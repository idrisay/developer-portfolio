import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const Admin = () => {
 



  useEffect(() => {
    console.log("19");
    console.log(infos);
    console.log(infos?.brand);
  }, [infos]);

  return (
    <Box sx={{ background: "white", color: "black", padding: "10px" }}>
      <Box
        maxWidth={"sm"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Typography variant="h3">Navbar</Typography>
        <TextField
          size="small"
          id="outlined-basic"
          label="Brand"
          variant="outlined"
          value={infos?.brand}
        />
        <Button sx={{ marginTop: "5px" }} variant="contained" color="success">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Admin;
