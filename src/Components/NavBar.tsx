import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/viaraLogo.svg";

const NavBar = () => {
  /**Hstack is chakra ui horizontal stack
   * image also should import using chakra ui
   **/
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
