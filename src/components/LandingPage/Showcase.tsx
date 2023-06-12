import Render2 from "../../img/RenderAA2.png";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const Showcase = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      gap={{ base: 4, lg: 10 }}
      alignItems="center"
    >
      <Box>
        <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          mr={{ base: 0, md: 1 }}
          textAlign={{ base: "left" }}
        >
          Bienvenidos a{" "}
          <span className="txt-blue">
            Ar<span className="txt-pink">Byte</span>
          </span>
        </Text>

        <Text
          fontSize="xl"
          color="gray.500"
          textAlign={{ base: "left" }}
          display={{ base: "none", md: "block" }}
        >
          Ofrecemos cursos en VEXcode IQ, Autodesk Inventor, Git y GitHub, y
          metodologías ágiles para brindarte una educación completa y práctica
          en robótica. Aprenderás a programar robots, diseñar piezas y
          ensamblajes, colaborar eficientemente y gestionar proyectos con éxito.
          ¡Únete a nosotros y descubre las posibilidades ilimitadas de la
          robótica VEX!
        </Text>

        <Text
          fontSize="xl"
          color="gray.500"
          textAlign={{ base: "left" }}
          display={{ base: "block", md: "none" }}
        >
          Ofrecemos cursos en VEXcode IQ, Autodesk Inventor, Git y GitHub, y
          metodologías ágiles para brindarte una educación completa y práctica
          en robótica.
        </Text>
      </Box>

      <Flex justifyContent="center">
        <Image src={Render2}  />
      </Flex>
    </Grid>
  );
};

export default Showcase;
