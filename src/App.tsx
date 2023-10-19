import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
