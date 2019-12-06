import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Map from "./components/Map";

//STYLE start
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;
//STYLE end

//MAP

//MAP

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Map />
    </AppContainer>
  );
}

export default App;
