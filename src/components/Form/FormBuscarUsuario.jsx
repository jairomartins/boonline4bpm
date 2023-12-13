import React from "react"
import { Button, Form, InputGroup } from "react-bootstrap"

const FormBuscarUsuario = ({setIdBusca, handleClickBuscarUsuarios})=>{

    

    return (
        <>
        <Form>
            <InputGroup size="sm">
                <Form.Control
                required
                placeholder="Digite o ID ou Matricula"
                onChange={(e)=>setIdBusca(e.target.value)}
                type="number"
                />
                <Button onClick={handleClickBuscarUsuarios}>
                    Pesquisar Usuário
                </Button>
            </InputGroup>
        </Form>
        </>
    )
}
export default FormBuscarUsuario