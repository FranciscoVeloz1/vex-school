import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import theme from "../styles/theme";
import React, { createRef } from "react";
import { ColorModeScript, Flex, useDisclosure } from "@chakra-ui/react";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  const btnRef = createRef<HTMLButtonElement>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar onOpen={onOpen} btnRef={btnRef} />
      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Flex
        direction="column"
        py={3}
        justifyContent="center"
        alignItems="space-between"
        w={{base: "90%", lg: "80%"}}
        m="auto"
      >
        {children}
      </Flex>
    </div>
  );
};

export default Layout;
