import React, { useContext, useMemo } from "react";
import { Container, Table } from "react-bootstrap";
import Envolvido from "./Envolvido";
import { BoletimContext } from "../../Context/BoletimContext";

function EnvolvidoList({ setEnvolvido, setModoEdicao }) {
    const { boletim, setBoletim } = useContext(BoletimContext);

    const envolvidosMemo = useMemo(() => (
        boletim.envolvidos.map(envolvido => (
            <Envolvido 
                key={envolvido.id} 
                envolvido={envolvido} 
                boletim={boletim} 
                setBoletim={setBoletim} 
                setEnvolvido={setEnvolvido} 
                setModoEdicao={setModoEdicao} 
            />
        ))
    ), [boletim, setBoletim, setEnvolvido, setModoEdicao]);

    return (
        <Container fluid>
            <Table>
                <thead>
                    <tr>
                        <th>Envolvimento</th>
                        <th>Nome</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>{envolvidosMemo}</tbody>
            </Table>
        </Container>
    );
}

export default EnvolvidoList;
