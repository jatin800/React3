import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bg={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
}
