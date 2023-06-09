import SideLink from "./SideLink";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Flex,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const Sidebar = ({ isOpen, onClose, btnRef }: Props) => {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location, onClose]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader color="blue.500">
          Ar<span className="txt-pink">Byte</span>
        </DrawerHeader>

        <DrawerBody>
          <Flex direction="column" pb="5">
            <Text fontSize="sm" color="gray.400" fontWeight="bold" pb="5">
              CURSOS
            </Text>

            <SideLink href="/programming">Curso de programación</SideLink>
            <SideLink href="/design">Curso de diseño</SideLink>
            <SideLink href="/git">Curso de Git y GitHub</SideLink>
            <SideLink href="/git">Curso de metodologías ágiles</SideLink>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
