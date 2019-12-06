import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";

//STYLE start
const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: #ffe;
  flex-basis: 0;
  position: absolute;
  z-index: 0;
`;
//STYLE end

//MAP

//MAP

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Map />
      <Title>Vegan Highway</Title>
      <Footer />
    </AppContainer>
  );
}

export default App;
