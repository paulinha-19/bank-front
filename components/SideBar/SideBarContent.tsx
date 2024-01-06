import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
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
        <Box mx="auto" fontSize="3xl" mt="5">
          <Text as="span">Ca</Text>
          <Text style={{ color: "green" }} as="span">
            $
          </Text>
          <Text as="span">hBank</Text>
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
