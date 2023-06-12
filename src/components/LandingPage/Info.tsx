import Render from "../../img/RenderAA3.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const Info = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      gap={{ base: 4, lg: 20 }}
      alignItems="center"
    >
      <Box width="full">
        <Image src={Render} width="full" />
      </Box>

      <Flex direction="column" gap={4}>
        <Box>
          <Text
            fontSize="4xl"
            mr={{ base: 0, md: 1 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Los mejores cursos estan{" "}
            <span className="txt-blue">
              Ar<span className="txt-pink">Byte</span>
            </span>
          </Text>
        </Box>

        <Flex alignItems="center" gap={4}>
          <ChevronRightIcon boxSize="10" color="blue.500" />
          <Text fontSize="xl" color="gray.500">
            Aprende las bases de la programación orientada objetos desde la
            comodidad de tu casa solo con una laptop y conexión a internet.
          </Text>
        </Flex>

        <Flex alignItems="center" gap={4}>
          <ChevronRightIcon boxSize="10" color="blue.500" />
          <Text fontSize="xl" color="gray.500">
            Después aplica los conocimientos adquiridos en el mundo de la
            robótica, donde con el IDE VEXcode IQ aprenderás a programar robots.
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Info;
