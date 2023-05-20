import Render from "../../img/Render.jpg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const Info = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      gap={{ base: 4, lg: 20 }}
      alignItems="center"
    >
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
            ¡Bienvenido a la escuela VEX! Ofrecemos cursos en VEXcode IQ,
            Autodesk Inventor, Git y GitHub, y metodologías ágiles para.
          </Text>
        </Flex>

        <Flex alignItems="center" gap={4}>
          <ChevronRightIcon boxSize="10" color="blue.500" />
          <Text fontSize="xl" color="gray.500">
            ¡Bienvenido a la escuela VEX! Ofrecemos cursos en VEXcode IQ,
            Autodesk Inventor, Git y GitHub, y metodologías ágiles para.
          </Text>
        </Flex>
      </Flex>

      <Box width="full">
        <Image src={Render} width="full" transform="scaleX(-1)" />
      </Box>
    </Grid>
  );
};

export default Info;
