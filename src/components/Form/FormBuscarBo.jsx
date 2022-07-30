// Formulário para buscar de boletim pelo numero
//
//
//

import { Form, Button, InputGroup} from "react-bootstrap";

const FormBuscarBo = () => {
    return ( <>
            <Form>
                <InputGroup>
                    <Form.Control
                    placeholder="Digite o n° do boletim"
                    type="number"
                    />
                    <Button>
                        Buscar Boletim
                    </Button>
                </InputGroup>
            </Form>
    </> );
}
 
export default FormBuscarBo;