import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LoadingProps {
  children: ReactNode;
}

export default function Loading({ children }: LoadingProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <span className="loader"></span>
    </Box>
  );
}
