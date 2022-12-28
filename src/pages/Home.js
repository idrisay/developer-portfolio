import { Box } from "@mui/material";
import {useState, useEffect} from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import HomeProjects from "../components/HomeProjects";
import Technologies from "../components/Technologies";
import { db } from "../utils/firebase";
import { onValue, ref } from "firebase/database";


const experiences = [
  {
    id: 1,
    date: "Jan 2022",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    date: "Jun 2022",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minima nemo ratione quo non consequuntur deserunt quis voluptatem ex",
  },
  {
    id: 3,
    date: "Present",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus incidunt, inventore est vel nulla doloremque optio dicta. Fugit est possimus commodi nisi veniam recusandae alias similique, consectetur eaque tenetur?",
  },
  {
    id: 4,
    date: "Present",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae delectus incidunt, inventore est vel nulla doloremque optio dicta. Fugit est possimus commodi nisi veniam recusandae alias similique, consectetur eaque tenetur?",
  },
];

const Home = () => {
  const [infos, setInfos] = useState()

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

  return (
    <Box>
      {/* <ImageSlider /> */}
      <Banner />
      <HomeProjects />
      <Technologies />
      <AboutMe experiences={infos?.aboutMe}/>
    </Box>
  );
};

export default Home;
