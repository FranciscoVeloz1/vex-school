import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface props {
  href: string;
  children: React.ReactNode;
}

const SideLink = ({ href, children }: props) => {
  return (
    <Link to={href} className="link">
      <Flex alignItems="center">
        <ChevronRightIcon mr="2" />
        {children}
      </Flex>
    </Link>
  );
};

export default SideLink;
