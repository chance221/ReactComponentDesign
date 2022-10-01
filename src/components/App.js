
import Header from "./Header";
import Layout from "./Layout";
import { createContext, useState } from "react";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

function App() {
  

  return (
    <Layout startingTheme="light">
      <div>
        <Header />
        <Speakers  />
      </div>
    </Layout>
  );
}

export default App;
