import Home from "./pages";
import theme from "./styles/theme";
import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

const App = () => {
  return (
    <HashRouter>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </HashRouter>
  );
};

export default App;
