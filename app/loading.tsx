import { Spinner, Box } from "@chakra-ui/react";
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
      minH="200px"
    >
      <span className="loader"></span>
    </Box>
  );
}
