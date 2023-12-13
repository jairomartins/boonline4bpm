import React from "react"
import { Button, Form, InputGroup } from "react-bootstrap"

const FormBuscarUsuario = ()=>{

    const handleClickBuscarUsuarios = ()=>[
        console.log("Buscando usuário")
    ]

    return (
        <>
        <Form>
            <InputGroup size="sm">
                <Form.Control
                required
                placeholder="Digite o ID ou Matricula"
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