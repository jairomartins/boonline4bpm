import React, { useContext } from "react";
import AddPolicial from "./AddPolicial";
import PolicialList from "./PolicialList";
import NavPage from "../NavPage";
import { BoletimContext } from "../../Context/BoletimContext";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

function Efetivo() {
  const { boletim, setBoletim } = useContext(BoletimContext);

  return (
    <>
      <CabecalhoBoletim texto={"Adicionar Efetivo"} />
      <AddPolicial boletim={boletim} setBoletim={setBoletim} />
      <PolicialList policiais={boletim.efetivo} boletim={boletim} setBoletim={setBoletim} />
      <NavPage prev="../material" next="../historico" />
    </>
  );
}

export default Efetivo;
