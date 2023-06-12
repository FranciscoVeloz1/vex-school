import Info from "../components/LandingPage/Info";
import Cards from "../components/LandingPage/Cards";
import Footer from "../components/LandingPage/Footer";
import Showcase from "../components/LandingPage/Showcase";
import { Divider, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction="column" mt={70} gap={{ base: "70px", lg: "100px" }}>
      <Showcase />
      <Divider />
      <Cards />
      <Divider />
      <Info />
      <Footer />
    </Flex>
  );
};

export default Home;
