import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const experiences = [
  {
    id: 1,
    date: "Jan 2022",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima nemo ratione quo non consequuntur deserunt quis voluptatem ex",
  },
  {
    id: 2,
    date: "Jun 2022",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima nemo ratione quo non consequuntur deserunt quis voluptatem ex",
  },
  {
    id: 3,
    date: "Present",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima nemo ratione quo non consequuntur deserunt quis voluptatem ex",
  },
];

const AboutMe = () => {
  return (
    <Box maxWidth="md" sx={{ margin: "auto" }}>
      <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 3 }}>
        About Me
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: "10px",
          background: "white",
          borderRadius: "50px",
          margin: "auto",
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {experiences.map((item) => (
          <Box
            sx={{
              background: "white",
              borderRadius: "50%",
              marginTop: "-5px",
              width: "20px",
              height: "20px",
            }}
            key={item.id}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-30px",
                width: "70px",
                marginLeft: "-35px",
              }}
              textAlign='center'
            >
              {item.date}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", m: "10px 20px", gap: "1rem" }}>
        {experiences.map((item) => (
          <Typography key={item.id} align="center">
            {item.info}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default AboutMe;
