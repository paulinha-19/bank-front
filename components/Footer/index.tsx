import { Box, Text } from "@chakra-ui/react";

function Copyright() {
  return (
    <Text as="span" color="gray.600" fontSize="md">
      © Copyright {new Date().getFullYear()} PIXPAY
    </Text>
  );
}

export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="white"
      shadow="md"
      p={4}
      position="sticky"
      bottom="0"
      width="100%"
    >
      <Box textAlign="center">
        <Copyright />
      </Box>
    </Box>
  );
};
