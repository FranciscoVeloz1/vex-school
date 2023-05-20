import { Flex, Grid, Text } from "@chakra-ui/react";
import { UnlockIcon, CalendarIcon, StarIcon } from "@chakra-ui/icons";

const Cards = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={{ base: 8, lg: 20 }}
      alignItems="center"
    >
      <Flex direction="column" gap={2} textAlign="center" alignItems="center">
        <UnlockIcon boxSize={8} color="blue.500" />
        <Text fontSize="3xl">Desbloquea</Text>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
          iure dolorum sint quibusdam molestiae magni nulla, beatae in.
          Veritatis.
        </Text>
      </Flex>

      <Flex direction="column" gap={2} textAlign="center" alignItems="center">
        <CalendarIcon boxSize={8} color="blue.500" />
        <Text fontSize="3xl">Administra</Text>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
          iure dolorum sint quibusdam molestiae magni nulla, beatae in.
          Veritatis.
        </Text>
      </Flex>

      <Flex direction="column" gap={2} textAlign="center" alignItems="center">
        <StarIcon boxSize={8} color="blue.500" />
        <Text fontSize="3xl">Brilla</Text>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
          iure dolorum sint quibusdam molestiae magni nulla, beatae in.
          Veritatis.
        </Text>
      </Flex>
    </Grid>
  );
};

export default Cards;
