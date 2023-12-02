// Formulário para buscar de boletim pelo numero
//
//
//

import { Form, Button, InputGroup} from "react-bootstrap";
import InputMask from 'react-input-mask';
const FormBuscarBoletimData = ({setIdBusca, checkBoletim}) => {
    return ( <>
            <Form>
                <InputGroup>

                    <InputMask 
                        mask="99/99/9999"
                        className="form-control form-control-sm"
                        size="sm"
                        onChange={(e)=>{setIdBusca(e.target.value)}}
                    />
                    <Button onClick={checkBoletim}>
                        Buscar nesta Data
                    </Button>
                </InputGroup>
            </Form>
    </> );
}
 
export default FormBuscarBoletimData;