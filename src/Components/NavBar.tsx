import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/viaraLogo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  /**Hstack is chakra ui horizontal stack
   * image also should import using chakra ui
   **/
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
