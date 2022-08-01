import {Alert, Table} from "react-bootstrap";

const BoletimInformacoes = ({boletim}) => {
    return ( 
        <> 
        {(boletim===undefined)?
            <Alert variant="danger">
                Boletim não encontrado!
            </Alert>
        
        :
        <Table size="sm">
            <thead>
                <tr>
                    
                    <th>Natureza</th>
                    <th>Data</th>
                    <th>Número</th>
                    <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{boletim.natureza}</td>
                    <td>{boletim.data}</td>
                    <td>{boletim.numero}</td>
                    <td><a href="/">Ver</a></td>
                </tr>
            </tbody>
            </Table>
        
        }
        </>
     );
}

export default BoletimInformacoes;