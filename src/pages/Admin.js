import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";

const Admin = () => {
  const [infos, setInfos] = useState(null);

  useEffect(() => {
    const query = ref(db, "infos");
    return onValue(query, (snapshot) => {
      let data = snapshot.val();
      data = Object.values(data);
      console.log(data[0]);
      setInfos(infos);
    });
  }, []);

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
        <Typography variant="h3">Navbar</Typography>{infos?.brand}
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
