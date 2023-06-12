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
          ¡Descubre tu potencial en la programación! Desbloquea tu creatividad,
          construye el futuro y conviértete en un maestro del código. ¡Inicia
          hoy mismo!
        </Text>
      </Flex>

      <Flex direction="column" gap={2} textAlign="center" alignItems="center">
        <CalendarIcon boxSize={8} color="blue.500" />
        <Text fontSize="3xl">Administra</Text>
        <Text color={"gray.500"}>
          ¡Aprende a liderar proyectos de robótica! Descubre cómo administrar
          equipos, diseñar prototipos y llevar tus ideas a la realidad.
          ¡Inscríbete ahora!
        </Text>
      </Flex>

      <Flex direction="column" gap={2} textAlign="center" alignItems="center">
        <StarIcon boxSize={8} color="blue.500" />
        <Text fontSize="3xl">Logra</Text>
        <Text color={"gray.500"}>
          ¡Con el conocimiento adquirido, alcanzarás resultados sorprendentes!
          Abre las puertas al éxito y conviértete en un líder del futuro. ¡No te
          lo pierdas!
        </Text>
      </Flex>
    </Grid>
  );
};

export default Cards;
