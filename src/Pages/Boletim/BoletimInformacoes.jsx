import { Table } from "react-bootstrap";

const BoletimInformacoes = () => {
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
                    <tr>
                        <td>2012</td>
                        <td>Furto</td>
                        <td><a href="/">Abrir</a></td>
                    </tr>
                </tbody>
            </Table>
        
        </>
     );
}

export default BoletimInformacoes;