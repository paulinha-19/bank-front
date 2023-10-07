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
import { theme } from "../../theme";
import Image from "next/image";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue(theme.customLightModeColors.light.bg, "gray.900")}
      backgroundImage={useColorModeValue(
        theme.customLightModeColors.light.bgGradient,
        "none"
      )}
      backgroundSize={useColorModeValue(
        theme.customLightModeColors.light.bgSize,
        "auto"
      )}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box mx="auto" pt="5">
          <Image
            src="/logo-1.png"
            width={100}
            height={100}
            alt="Logo cashbank"
          />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
