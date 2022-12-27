import {
  Box,
  Button,
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { onValue, ref, update } from "firebase/database";
const Admin = () => {
  const [infos, setInfos] = useState("asa");
  useEffect(() => {
    const query = ref(db, "infos");
    return onValue(query, (snapshot) => {
      let data = snapshot.val();
      if (snapshot.exists()) {
        setInfos(data);
        console.log(data);
      }
    });
  }, []);

  const handleFieldChange = (e) => {
    console.log(e.target.value, e.target.name);
    const newInfo = { ...infos, [e.target.name]: e.target.value };
    console.log(newInfo);
    setInfos(newInfo);
  };

  const handleUpdate = () => {
    const dbRef = ref(db, `infos`);
    update(dbRef, infos)
      .then(() => {
        console.log("Data updated");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleArrayChange = (e, type, index) => {
    const newValue = infos[type];
    newValue[index] = { ...newValue[index], [e.target.name]: e.target.value };
    setInfos({ ...infos, [type]: newValue });
  };

  const handleProjectChangeImages = (e, index, ind) => {
    const projects = infos.projects
    const newValue = infos.projects[index].images
    newValue[ind] = { ...newValue[ind], [e.target.name]: e.target.value};
    projects[index] = { ...projects[index] ,images: newValue}
    setInfos({...infos, projects})
  };

  return (
    <Box sx={{ background: "white", color: "black", padding: "10px" }}>
      <Box
        maxWidth={"sm"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Navbar</Typography>
        <Typography variant="h4">Brand</Typography>
        <TextField
          id="outlined-basic"
          name="brand"
          variant="outlined"
          value={infos?.brand ? infos?.brand : ""}
          onChange={handleFieldChange}
        />
        <Typography variant="h4">Job Name</Typography>
        <TextField
          id="outlined-basic"
          name="jobName"
          variant="outlined"
          value={infos?.jobName ? infos?.jobName : ""}
          onChange={handleFieldChange}
        />
        <Typography variant="h4">Job Description</Typography>
        <TextareaAutosize
          id="outlined-basic"
          name="jobDescription"
          variant="outlined"
          value={infos?.jobDescription ? infos?.jobDescription : ""}
          onChange={handleFieldChange}
        />
        <Typography variant="h4">Email</Typography>
        <TextField
          id="outlined-basic"
          name="email"
          variant="outlined"
          value={infos?.email ? infos?.email : ""}
          onChange={handleFieldChange}
        />
        <Typography variant="h4">Github Link</Typography>
        <TextField
          id="outlined-basic"
          name="github"
          variant="outlined"
          value={infos?.github ? infos?.github : ""}
          onChange={handleFieldChange}
        />
        <Typography variant="h4">Linkedin Link</Typography>
        <TextField
          id="outlined-basic"
          name="linkedin"
          variant="outlined"
          value={infos?.linkedin ? infos?.linkedin : ""}
          onChange={handleFieldChange}
        />

        <Divider>
          {" "}
          <Typography variant="h4">About Me</Typography>
        </Divider>
        <Box sx={{ width: "100%" }}>
          {infos?.aboutMe?.map((item, index) => (
            <Box sx={{ width: "100%" }} key={index}>
              <Typography variant="h5">Date</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                name="date"
                variant="outlined"
                value={item.date ? item.date : ""}
                onChange={(e) => handleArrayChange(e, "aboutMe", index)}
              />
              <Typography variant="h5">Description</Typography>
              <TextareaAutosize
                style={{ width: "100%", height: "100px" }}
                id="outlined-basic"
                name="description"
                variant="outlined"
                value={item.description ? item.description : ""}
                onChange={(e) => handleArrayChange(e, "aboutMe", index)}
              />
            </Box>
          ))}
        </Box>

        <Divider>
          {" "}
          <Typography variant="h4">Additional Skills</Typography>
        </Divider>
        <Box sx={{ width: "100%" }}>
          {infos?.additionalSkills?.map((item, index) => (
            <Box sx={{ width: "100%" }} key={index}>
              <Typography variant="h5">Tech Name</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                name="name"
                variant="outlined"
                value={item.name ? item.name : ""}
                onChange={(e) =>
                  handleArrayChange(e, "additionalSkills", index)
                }
              />
            </Box>
          ))}
        </Box>

        <Divider>
          {" "}
          <Typography variant="h4">Technologies</Typography>
        </Divider>
        <Box sx={{ width: "100%" }}>
          {infos?.technologies?.map((item, index) => (
            <Box sx={{ width: "100%" }} key={index}>
              <Typography variant="h5">Tech Name</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                name="name"
                variant="outlined"
                value={item.name ? item.name : ""}
                onChange={(e) => handleArrayChange(e, "technologies", index)}
              />
            </Box>
          ))}
        </Box>

        <Divider>
          {" "}
          <Typography variant="h4">Projects</Typography>
        </Divider>
        <Box sx={{ width: "100%" }}>
          {infos?.projects?.map((item, index) => (
            <Box sx={{ width: "100%" }} key={index}>
              <Typography variant="h5">Name</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                name="name"
                variant="outlined"
                value={item.name ? item.name : ""}
                onChange={(e) => handleArrayChange(e, "projects", index)}
              />
              <Typography variant="h5">Info</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                name="info"
                variant="outlined"
                value={item.info ? item.info : ""}
                onChange={(e) => handleArrayChange(e, "projects", index)}
              />
              <Typography variant="h5">Link</Typography>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                name="link"
                variant="outlined"
                value={item.link ? item.link : ""}
                onChange={(e) => handleArrayChange(e, "projects", index)}
              />
              {item.images.map((each, ind) => (
                <Box key={ind}>
                  <Typography variant="h5">Title</Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    name="title"
                    variant="outlined"
                    value={each.title ? each.title : ""}
                    onChange={(e) =>
                      handleProjectChangeImages(e, index, ind)
                    }
                  />
                   <Typography variant="h5">Image Url</Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    id="outlined-basic"
                    name="url"
                    variant="outlined"
                    value={each.url ? each.url : ""}
                    onChange={(e) =>
                      handleProjectChangeImages(e, index, ind)
                    }
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>

        <Button
          sx={{ marginTop: "5px" }}
          onClick={handleUpdate}
          variant="contained"
          color="success"
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};
export default Admin;
