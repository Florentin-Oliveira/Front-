import React from "react";
import Home from "../Route/Home";
import Botao from "../components/Botao/index";
import Cliente from "../components/Cliente/Cliente"
import OS from "../components/OS/OrdenServico";
import Cadastro from "../Route/Cadastro/Cadastro";
/*import style from './App.module.scss';*/

function App() {
  return (
    <div className="style.AppStyle">
      <Home />
      <Cliente/>
      <Botao />
      <OS/>
      <Cadastro/>
    </div>
  );
}

export default App;
