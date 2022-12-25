import { Box } from "@mui/system";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AdjustIcon from '@mui/icons-material/Adjust';

const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "750px",
        height: "300px",
        margin: "0px auto"
      }}
    >
      <Box sx={{ position: "relative", height: "100%" }}>
        <Box
          onClick={goToPrevious}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            left: "32px",
            zIndex: 2,
            cursor: "pointer",
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              background: "black",
              borderRadius: "50%",
              padding: "8px",
              opacity: "0.5",
            }}
            fontSize="large"
          />
        </Box>
        <Box
          onClick={goToNext}
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            right: "32px",
            zIndex: 2,
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              background: "black",
              borderRadius: "50%",
              padding: "8px",
              opacity: "0.5",
            }}
            fontSize="large"
          />
        </Box>
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              backgroundImage: `url(${images[currentIndex].url})`,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: 'background-image 0.5s ease-in-out'
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0px",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            // background: 'rgba(0, 0, 0, 0.2);'
          }}
        >
          {images.map((item) => (
            <Box sx={{ margin: "10px 10px 0px", background: 'rgba(0, 0, 0, 0.1);', borderRadius: '50%', padding: '5px 5px 0px' }}>
              {item.id === currentIndex ? <AdjustIcon fontSize="small" /> : <CircleIcon fontSize="small" sx={{cursor: 'pointer'}} onClick={() => goToSlide(item.id)} />}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
