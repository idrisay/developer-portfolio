import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Technologies = () => {
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
  return (
    <Box>
      <Typography variant="h4"  component="h2" sx={{ mt: 10, mx: -4, mb: 3 }}>
        Technologies
      </Typography>
      <Box>
        <Box my={2} mt={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
            <Typography variant="h5" >Html</Typography>
            <Typography>Advanced</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={80} />
        </Box>
        <Box my={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
            <Typography variant="h5">Css</Typography>
            <Typography>Advanced</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={80} />
        </Box>
        <Box my={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
            <Typography variant="h5">Javascript</Typography>
            <Typography>Advanced</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={80} />
        </Box>
        <Box my={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
            <Typography variant="h5">React js</Typography>
            <Typography>Advanced</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={80} />
        </Box>
        <Box my={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
            <Typography variant="h5">Styled Component,MUI</Typography>
            <Typography>Regular</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={60} />
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
