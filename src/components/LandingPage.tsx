import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box textAlign="center">
      <Flex direction="column" align="center" justify="center" minHeight="90vh">
        <Heading as="h1" size="xl" mb={4}>
          Bienvenidos a Escuela VEX
        </Heading>
        <Text
          fontSize="lg"
          color="gray.400"
          mb={8}
          display={{ base: "block", md: "none" }}
        >
          ¡Bienvenido a la escuela VEX! Ofrecemos cursos en VEXcode IQ, Autodesk
          Inventor, Git y GitHub, y metodologías ágiles para brindarte una
          educación completa y práctica en robótica.
        </Text>

        <Text
          fontSize="lg"
          color="gray.400"
          mb={8}
          display={{ base: "none", md: "block" }}
        >
          ¡Bienvenido a la escuela VEX! Ofrecemos cursos en VEXcode IQ, Autodesk
          Inventor, Git y GitHub, y metodologías ágiles para brindarte una
          educación completa y práctica en robótica. Aprenderás a programar
          robots, diseñar piezas y ensamblajes, colaborar eficientemente y
          gestionar proyectos con éxito. ¡Únete a nosotros y descubre las
          posibilidades ilimitadas de la robótica VEX!
        </Text>

        <Link to="/cursos" className="button button-blue-500">
          Explorar cursos
        </Link>
      </Flex>
    </Box>
  );
};

export default LandingPage;
