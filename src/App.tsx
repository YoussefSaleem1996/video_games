import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" bg="">
          
        </GridItem>
      </Show>
      <GridItem area="main" bg="">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
