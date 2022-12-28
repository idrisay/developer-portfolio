import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { SiMaterialui } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";

const techIcons = {
  Javascript: <IoLogoJavascript fontSize="large" />,
  ReactJS: <RiReactjsLine fontSize="large" />,
  HTML: <ImHtmlFive2 fontSize="large" />,
  CSS: <DiCss3 fontSize="large" />,
  Material: <SiMaterialui fontSize="large" />,
  Git: <BiGitBranch fontSize="large" />,
  GitHub: <AiOutlineGithub fontSize="large" />,
  TailwindCSS: <SiTailwindcss fontSize="large" /> ,
  SCSS: <DiSass fontSize="large" />,
  Bootstrap: <BsFillBootstrapFill fontSize="large" />

};



const Technologies = ({ techs = [], additionaltechs}) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 12,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      background: "#162950",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      background:
        "linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 60%, rgba(148,93,214,1) 100%)",
    },
  }));

  console.log({additionaltechs})

  return (
    <Box maxWidth="md" sx={{ margin: "auto" }}>
      <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 3 }}>
        Technologies
      </Typography>
      <Box sx={{ mt: 10, maxWidth: "90%", margin: "auto" }}>
        {techs.length > 0 &&
          techs?.map((item) => (
            <Box key={item.name} my={2}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ width: "20px" }}>{techIcons[item.name]}</Box>
                  <Typography sx={{ ml: 2 }} variant="h5">
                    {item.name}
                  </Typography>
                </Box>
                <Typography>{item.level}</Typography>
              </Box>
              <BorderLinearProgress
                variant="determinate"
                value={item.percentage}
              />
            </Box>
          ))}
      </Box>
      <Typography variant="h4" component="h2" sx={{ mt: 10, mb: 3 }}>
        Additional technologies and skills
      </Typography>
      <Box sx={{ mt: 10, maxWidth: "90%", margin: "auto" }}>
        <Grid
          container
          sx={{ my: 2, mx: 2 }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {additionaltechs?.map((item) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={item.name}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "28px" }}>{techIcons[item.name]}</Box>
              <Typography>{item.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Technologies;
