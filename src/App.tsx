import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
        <GridItem area="aside" bg="yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
