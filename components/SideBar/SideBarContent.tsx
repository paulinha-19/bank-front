import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LinkItems } from "./items";
import { NavItem } from "./NavItem";


interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const customLightModeColors = {
  light: {
    bg: "#4e8fdf",
    bgGradient: "linear-gradient(180deg, #4e8fdf 10%, #224abe 100%)",
    bgSize: "cover",
  },
};
export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue(customLightModeColors.light.bg, "gray.900")}
      backgroundImage={useColorModeValue(
        customLightModeColors.light.bgGradient,
        "none"
      )}
      backgroundSize={useColorModeValue(
        customLightModeColors.light.bgSize,
        "auto"
      )}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
