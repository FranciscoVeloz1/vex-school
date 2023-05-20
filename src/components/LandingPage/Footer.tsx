import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex direction="column" alignItems="center" mb="26px">
      <Divider mb="26px" />
      <Text fontSize="xl" textAlign="center" color="gray.500">
        &copy; Arbyte. Derechos reservados
      </Text>
    </Flex>
  );
};

export default Footer;
