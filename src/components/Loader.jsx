import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <VStack h={"100vh"} justifyContent={"center"}>
      <Spinner size={"xl"} />
    </VStack>
  );
}
