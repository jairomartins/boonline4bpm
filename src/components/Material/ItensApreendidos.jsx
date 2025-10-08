import React, { useContext } from "react";
import MaterialList from "./MaterialList";
import AddMaterial from "./AddMaterial";
import NavPage from "../NavPage";
import { BoletimContext } from "../../Context/BoletimContext";
import CabecalhoBoletim from "../Cabecalho/CabecalhoBoletim";

function ItensApreendidos() {
  const { boletim, setBoletim } = useContext(BoletimContext);

  return (
    <>
      <CabecalhoBoletim texto={"Materiais Apreendidos"} />
      <AddMaterial boletim={boletim} setBoletim={setBoletim} />
      <MaterialList boletim={boletim} setBoletim={setBoletim} />
      <NavPage prev="../envolvido" next="../efetivo" />
    </>
  );
}

export default ItensApreendidos;
