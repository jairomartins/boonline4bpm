import { Table } from "react-bootstrap";

const BoletimList = ({boletimList})=>{

    return(
    <>
        <Table size="sm">
            <thead>
                <tr>
                    
                    
                    <th>Data</th>
                    <th colSpan={3}>Natureza</th>
                    <th>Número</th>
                    <th>Município</th>
                </tr>
            </thead>
            <tbody>
                {
                boletimList.map((boletim)=>
                <tr key={boletim.id}>
                <td>{boletim.data}</td>
                <td colSpan={3}>{boletim.natureza}</td>
                <td>{boletim.numero}</td>
                <td>{boletim.municipio}</td>
                </tr>
                )
                }
                </tbody>
        </Table>
    
    </>)

}

export default BoletimList;