import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { LinkItems } from "./items";
import { NavItem } from "./NavItem";
import { theme } from "../../theme";

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
      <Flex alignItems="center" justifyContent="space-between">
        <Box mx="auto" mt="5">
          <Image
            boxSize="full"
            objectFit="cover"
            src="/images/logo.png"
            alt="Logo"
            width={40}
          />
        </Box>
        <Box style={{position: "absolute"}} top="2" right="2">
          <CloseButton color={"white"} display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Box>
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
