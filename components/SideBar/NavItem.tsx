import { FlexProps, Flex, Icon} from "@chakra-ui/react";
import Link from 'next/link';
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: React.ReactNode;
    href: string;
  }

export const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        <Flex
          color="white"
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "blue.700",
            color: "white",
          }}
          {...rest}
        >
          <Icon mr="4" fontSize="16" color="white" as={icon} />
          {children}
        </Flex>
      </Link>
    );
  };