import { Box } from "@chakra-ui/react";
import "../../styles/loading-public.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="container">
      <div className="box">
          <Box mx="auto" mt="5">
          <Image
            objectFit="cover"
            src="/images/logo.png"
            alt="Logo"
            width={500}
            height={500}
          />
        </Box>
        <div className="role">
          <div className="block"></div>
        </div>
      </div>
    </div>
  );
}
