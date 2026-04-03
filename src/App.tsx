import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Grid>
        <GridItem>
          <Navbar />
        </GridItem>

        <GridItem>
          <Hero />
        </GridItem>
        <GridItem>
          <Experience />
        </GridItem>
        <GridItem>
          <Projects />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
