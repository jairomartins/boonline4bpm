import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const FormBuscarBoletimNumero = ({ setIdBusca, checkBoletim }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIdBusca(value);
  };

  return (
    <Form>
      <InputGroup>
        <Form.Control
          required
          placeholder="Digite o n° do boletim"
          type="number"
          value={inputValue}
          onChange={handleChange}
        />
        <Button
          onClick={checkBoletim}
          disabled={!inputValue} // botão desativado se o input estiver vazio
        >
          Buscar Boletim
        </Button>
      </InputGroup>
    </Form>
  );
};

export default FormBuscarBoletimNumero;
