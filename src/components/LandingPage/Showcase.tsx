import logo1 from "../../img/logo1.jpg";
import { Flex, Image, Text } from "@chakra-ui/react";

const Showcase = () => {
  return (
    <Flex
      direction="column"
      gap={{ base: 3, md: 8 }}
      justifyContent="center"
      mt={{ base: 8, lg: 50 }}
    >
      <Text
        fontSize={{ base: "4xl", md: "5xl" }}
        mr={{ base: 0, md: 1 }}
        textAlign={{ base: "center" }}
      >
        Bienvenidos a{" "}
        <span className="txt-blue">
          Ar<span className="txt-pink">Byte</span>
        </span>
      </Text>

      <Flex justifyContent="center">
        <Image src={logo1} width="200px" />
      </Flex>

      <Text
        fontSize="xl"
        color="gray.500"
        textAlign={{ base: "center" }}
        display={{ base: "none", md: "block" }}
      >
        Ofrecemos cursos en VEXcode IQ, Autodesk Inventor, Git y GitHub, y
        metodologías ágiles para brindarte una educación completa y práctica en
        robótica. Aprenderás a programar robots, diseñar piezas y ensamblajes,
        colaborar eficientemente y gestionar proyectos con éxito. ¡Únete a
        nosotros y descubre las posibilidades ilimitadas de la robótica VEX!
      </Text>

      <Text
        fontSize="xl"
        color="gray.500"
        textAlign={{ base: "center" }}
        display={{ base: "block", md: "none" }}
      >
        Ofrecemos cursos en VEXcode IQ, Autodesk Inventor, Git y GitHub, y
        metodologías ágiles para brindarte una educación completa y práctica en
        robótica.
      </Text>
    </Flex>
  );
};

export default Showcase;
