import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import InputMask from "react-input-mask";

const FormBuscarBoletimData = ({ setIdBusca, checkBoletim }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIdBusca(value);
  };

  return (
    <Form>
      <InputGroup>
        <InputMask
          mask="99/99/9999"
          className="form-control form-control-sm"
          size="sm"
          value={inputValue}
          onChange={handleChange}
        />
        <Button
          onClick={checkBoletim}
          disabled={!inputValue.trim()} // desativa se estiver vazio
        >
          Buscar nesta Data
        </Button>
      </InputGroup>
    </Form>
  );
};

export default FormBuscarBoletimData;
