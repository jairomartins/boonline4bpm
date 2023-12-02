// Formulário para buscar de boletim pelo numero
//
//
//

import { Form, Button, InputGroup} from "react-bootstrap";

const FormBuscarBoletimNumero = ({setIdBusca, checkBoletim}) => {
    return ( <>
            <Form>
                <InputGroup>
                    <Form.Control
                    required
                    placeholder="Digite o n° do boletim"
                    type="number"
                    onChange={(e)=>setIdBusca(e.target.value)}
                    />
                    <Button onClick={checkBoletim}>
                        Buscar Boletim
                    </Button>
                </InputGroup>
            </Form>
    </> );
}
 
export default FormBuscarBoletimNumero;