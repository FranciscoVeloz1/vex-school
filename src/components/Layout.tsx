import Navbar from "./Navbar";
// import img1 from "../img/1.jpg";
// import img2 from "../img/2.jpg";
// import img3 from "../img/3.jpg";
import Sidebar from "./Sidebar";
import theme from "../styles/theme";
// import Carousel from "./LandingPage/Carousel";

import React, { createRef } from "react";
import { ColorModeScript, Flex, useDisclosure } from "@chakra-ui/react";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  // const images = [img1, img2, img3];
  const btnRef = createRef<HTMLButtonElement>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar onOpen={onOpen} btnRef={btnRef} />
      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      {/* <Carousel images={images} /> */}
      <Flex
        direction="column"
        py={3}
        justifyContent="center"
        alignItems="space-between"
        w={{ base: "90%", lg: "80%" }}
        m="auto"
      >
        {children}
      </Flex>
    </div>
  );
};

export default Layout;
