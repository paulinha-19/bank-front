import { FlexProps, Flex, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon?: IconType;
  children?: React.ReactNode;
  href: string;
}

export const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Box>
      <Link href={href} style={{ textDecoration: "none" }}>
        <Flex
          color="white"
          align="center"
          mt="12"
          p="2"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          fontWeight={"medium"}
          _hover={{
            bg: "orange.700",
            color: "white",
          }}
          {...rest}
        >
          <Icon mr="4" fontSize="16" color="white" as={icon} />
          {children}
        </Flex>
      </Link>
    </Box>
  );
};
