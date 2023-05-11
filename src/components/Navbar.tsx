import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

interface Props {
  btnRef: React.RefObject<HTMLButtonElement>;
  onOpen: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar = ({ btnRef, onOpen }: Props) => {
  return (
    <Box bg="teal" py={3}>
      <Flex justifyContent="space-between" alignItems="center" w="90%" m="auto">
        <Text fontSize="xl" color="white">
          <Link to="/">Óptica Lagos</Link>
        </Text>

        <Button ref={btnRef} bgColor="white" onClick={onOpen}>
          <HamburgerIcon color="teal" />
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
