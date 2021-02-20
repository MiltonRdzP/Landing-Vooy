import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Section from "./Section"
import Form from './components/Form'
const App = () => {
  return (
    <>
    <Container>
    <Navbar/>
      <Section/>  
      <Form/>
    </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  background: #f2f2f2;
`;