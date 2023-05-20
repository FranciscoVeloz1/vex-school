import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

interface Props {
  btnRef: React.RefObject<HTMLButtonElement>;
  onOpen: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar = ({ btnRef, onOpen }: Props) => {
  return (
    <Box bg="white" py={3}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w={{ base: "90%", lg: "80%" }}
        m="auto"
      >
        <Heading fontSize="xl" color="blue.500">
          <Link to="/">
            Ar<span className="txt-pink">Byte</span>
          </Link>
        </Heading>

        <Button
          ref={btnRef}
          colorScheme="blue"
          variant="ghost"
          onClick={onOpen}
        >
          <HamburgerIcon boxSize="6" />
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
