import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import Notification from "./components/Notification";
import "./styles.css";

function App() {
  return (
    <>
      <Notification />
    </>
  );
}

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
