"use client";

import { useState, useEffect } from "react";
import React from "react";
import { Box, Flex, Stack, Text, Image } from "@chakra-ui/react";
import "../../../styles/account-form.css";
import { Login, SignUp, ResetPassword } from "../../../components/index";
import Loading from "../loading";

export default function AccountForm() {
  const [currentView, setCurrentView] = useState("logIn");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const changeView = (view: string) => {
    setCurrentView(view);
  };
  const renderView = () => {
    switch (currentView) {
      case "signUp":
        return (
          <Box>
            <SignUp changeView={changeView} />
          </Box>
        );

      case "logIn":
        return (
          <Box>
            <Login changeView={changeView} />
          </Box>
        );

      case "PWReset":
        return (
          <Box>
            <ResetPassword changeView={changeView} />
          </Box>
        );

      default:
        return null;
    }
  };
  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <Box id="entry-page" overflowY="hidden">
          <Stack minH={"100vh"} direction={{ md: "row" }}>
            <Flex
              className="bg-cashbank"
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Box>
                <Image objectFit="cover" src="/images/logo.png" alt="Logo" />
              </Box>
            </Flex>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                {renderView()}
              </Stack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
