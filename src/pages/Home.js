import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";
import Technologies from "../components/Technologies";
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";

const Home = () => {
  const [infos, setInfos] = useState();

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

  console.log(infos?.technologies);

  return (
    <Box>
      {/* <ImageSlider /> */}
      <Banner />
      <HomeProjects />
      <Technologies
        techs={infos?.technologies}
        additionaltechs={infos?.additionalSkills
        }
      />
      <AboutMe experiences={infos?.aboutMe} />
    </Box>
  );
};

export default Home;
