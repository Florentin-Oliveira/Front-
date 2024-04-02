import React from "react";
import Home from "../Route/Home";
import Botao from "../components/Botao/index";
import Cliente from "../components/Cliente/Cliente"
import OS from "../components/OS/OrdenServico";

function App() {
  return (
    <div>
      <Home />
      <Cliente/>
      <Botao />
      <OS/>
    </div>
  );
}

export default App;
