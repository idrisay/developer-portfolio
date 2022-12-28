import { Box, Typography } from "@mui/material";

const AboutMe = ({ experiences = [] }) => {
  return (
    <Box maxWidth="md" sx={{ margin: "auto" }}>
      <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 3 }}>
        About Me
      </Typography>
      <Box
        id="about"
        maxWidth={"md"}
        sx={{
          margin: "10px auto",
          display: "flex",
          height: "100%",
          scrollMarginTop: "175px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "300px",
          }}
        >
          {experiences?.map((exp, index) => (
            <Typography
              key={index}
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                margin: "20px",
              }}
            >
              {exp.date}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(186,186,186,1) 10%, rgba(255,252,252,1) 50%, rgba(186,186,186,1) 90%, rgba(0,0,0,1) 100%)",
            width: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {experiences.map((exp, ind) => (
            <Box
              key={ind}
              sx={{
                width: 20,
                height: 20,
                borderRadius: 5,
                background: "white",
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "0px 20px",
          }}
        >
          {experiences?.map((exp, i) => (
            <Box
              key={i}
              sx={{
                height: `${100 / experiences.length}%`,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  padding: "20px 0px",
                }}
              >
                {exp.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
