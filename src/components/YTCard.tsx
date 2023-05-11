import { Link } from "react-router-dom";
import { Card, CardBody, Heading, Stack, Image, Text } from "@chakra-ui/react";

interface props {
  img: string;
}

const YTCard = ({ img }: props) => {
  return (
    <Link to="/">
      <Card
        maxW="sm"
        transition="transform 0.250s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <CardBody>
          <Stack spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and.
            </Text>
            <Text color="gray.500" fontSize="sm">
              Curso de programación
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default YTCard;
