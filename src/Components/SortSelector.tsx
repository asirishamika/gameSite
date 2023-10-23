import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by:Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>Relavance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release date</MenuItem>
          <MenuItem>Poppularity</MenuItem>
          <MenuItem>Avarage rating</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
