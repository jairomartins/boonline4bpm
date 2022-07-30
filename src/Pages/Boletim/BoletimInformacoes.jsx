import { Table } from "react-bootstrap";

const BoletimInformacoes = ({boletim}) => {
    return ( 
        <>
            <Table size="sm">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Natureza</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {(boletim)?
                    <tr>
                        <td>{boletim.numero}</td>
                        <td>{boletim.natureza}</td>
                        <td><a href="/">Abrir</a></td>
                    </tr>
                    :""
                    }
                </tbody>
            </Table>
        
        </>
     );
}

export default BoletimInformacoes;